let accessToken;
const clientId = 'b8ab2e234a6e43119d3d278f3b7c7116';
const redirectUri = "http://localhost:3000/";

const Spotify = {
  getAccessToken(){
      if(accessToken){
        return accessToken;
      }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expire = window.location.href.match(/expires_in=([^&]*)/);
     if(accessTokenMatch&&expire){
       accessToken = accessTokenMatch[1];
       const expiresIn = Number(expire[1]);
       window.setTimeout(() => accessToken = '', expiresIn * 1000);
       window.history.pushState('Access Token', null, '/');
       return accessToken;
     } else {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
     }
  },

  search(term){
    accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
    { headers: {Authorization: `Bearer ${accessToken}`}
  }).then(response => response.json()).then(jsonResponse => {
    if(jsonResponse.tracks){
      return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
      }));
    } else {
      return [];}
   });
  },

  
}
export default Spotify;
