import React from 'react';
import './TrackList.module.css';
import Track from '../Track/Track';

function TrackList() {
  return (
    <div className="TrackList">
      <Track />
      <Track />
      <Track />
    </div>
  );
}

export default TrackList;