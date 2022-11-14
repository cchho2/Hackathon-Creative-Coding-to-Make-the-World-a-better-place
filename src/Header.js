import React from "react";
import './Header.css';  
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';


function Header() 
{
    return (
        <div className="header">
            <IconButton>
            <AccountBoxIcon className = "header_icon" fontSize="large"/>
            </IconButton>

            <img className= "header_logo" 
            src="https://1000logos.net/wp-content/uploads/2022/11/Shopee-Food-Emblem.png"
             alt="food swipe logo"/>

             <IconButton>
            <ForumIcon className = "header_icon" fronSize="large"/>
            </IconButton>
        </div>
    );
}

export default Header; 
