import React from 'react';
import './TrackList.css';

class TrackList extends React.Component {
  render(){
    return(
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return <Track track={this.props.track} key={track.id} />;
        });
      }
      </div>
    );
  }
}

export default TrackList;
