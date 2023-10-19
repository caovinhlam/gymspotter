import { Card, Box, CardContent, Typography, CardMedia, IconButton } from "@mui/material";
import TypeBubble from "./TypeBubble";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";

const GymCard = (props) => {
  let { gym } = props;
  const navigate = useNavigate();

  const onClickHandler = (event, gymId) => {
    // console.log(gymId);
    navigate(`/details/${gymId}`)
  };

  const favouriteHandler = (e) => {
    e.stopPropagation()
    console.log("favourite")
  }

  return (
    <Card
      sx={{ display: "flex" }}
      onClick={(e) => onClickHandler(e, gym.id)}
      className="mui-card"
    >
      <Box sx={{ display: "flex", flexDirection: "column" }} className="box">
        <CardContent >
          <Typography component="div" variant="h5">
            {gym.id}
          </Typography>
          <Typography component="div" variant="h5">
            {gym.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {gym.location}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            ***** Star Rating *****
          </Typography>
          <TypeBubble types={gym.types} />
        </CardContent>
      </Box>
      <div className="card-image">
        {/* <FavoriteIcon sx={{ fontSize: 60 }} color="action" onClick={favouriteHandler} /> */}
        <IconButton aria-label="add to favorites"  onClick={favouriteHandler}>
          <FavoriteIcon sx={{ fontSize: 60 }} color="action"  />
        </IconButton>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="src/assets/react.svg"
          alt="Live from space album cover"
        />
      </div>
    </Card>
  );
};

export default GymCard;
