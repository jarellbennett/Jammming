let accessToken;
const clientId = 'b8ab2e234a6e43119d3d278f3b7c7116';
const redirectUri = "http://localhost:3000/";

const Spotify = {
  getAccessToken(){
      if(accessToken){
        return accessToken;
      }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expireIn = window.location.href.match(/expires_in=([^&]*)/);

  }
}
export default Spotify;
