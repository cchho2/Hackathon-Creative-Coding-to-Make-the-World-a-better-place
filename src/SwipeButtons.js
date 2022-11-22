import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';

const SwipeButtons = () => {
    return (
      <div className="swipeButtons">
        <IconButton className="swipeButtons__repeat">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__left">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__right">
          <CheckIcon fontSize="large" />
        </IconButton>
      </div>
    );
  };

export default SwipeButtons; 
