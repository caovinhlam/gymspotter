import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
// import { RestoreIcon, FavoriteIcon, PersonIcon, LocationOnIcon } from '@mui/icons-material';
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person"
import { useState } from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  //   const [value, setValue] = useState("recents");

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 500 }}>

        <Link to="/">
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </Link>
        <Link to="/map">
          <BottomNavigationAction label="Map" icon={<LocationOnIcon />} />
        </Link>
        <Link to="/favourite">
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Link>
        <Link to="/profile">
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </Link>
      
    </Box>
  );
};

export default BottomNav;
