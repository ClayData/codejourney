import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import AuthenticationService from '../../utils/AuthenticationService';

export default function MenuButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory()
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const signOut = (event) => {
        AuthenticationService.logout();
        history.push("/");
    }

    return(
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => {setAnchorEl(null);}}
            >
            <MenuItem onClick={() => history.push("/tomatoes")}>
                TomatoTime
            </MenuItem>
            <MenuItem onClick={signOut}>
                Sign Out
            </MenuItem>
            
        </Menu>
    </div>
    )
} 