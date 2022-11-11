import React from "react";
import './Header.css';  
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum';

function Header() 
{
    return (
        <div className="header">
            <AccountBoxIcon />
            <h2>I am a header.</h2>
            <ForumIcon />
        </div>
    );
}

export default Header; 