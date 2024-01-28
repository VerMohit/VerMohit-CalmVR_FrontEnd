import React from 'react';
import * as classes from "./VideoPlayer.module.css"

export const VideoPlayer = () => {
  return (
    <video className={classes.video} controls>
      <source  src="placeholder.mp4" type="video/mp4" />
    </video>
  );
};

