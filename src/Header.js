import React from "react";
import './Header.css';  
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useHistory} from "react-router-dom";

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
        <AccountBoxIcon className = "header_icon" fontSize="large"/>
        </IconButton>
      )}
            <Link to="/">
            <img
             className= "header_logo" 
            src="https://1000logos.net/wp-content/uploads/2022/11/Shopee-Food-Emblem.png"
             alt="food swipe logo"/>
            </Link>
           <Link to="/chat">
            <IconButton>
                <ForumIcon className = "header_icon" fronSize="large"/>
            </IconButton>
          </Link>
        </div>
    );
}

export default Header; 
