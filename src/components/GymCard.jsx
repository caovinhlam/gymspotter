import { Card, Box, CardContent, Typography, CardMedia, IconButton, Rating, CardActions, Button } from "@mui/material";
import TypeBubble from "./TypeBubble";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
import { FavoriteBorder } from "@mui/icons-material";

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
      variant="outlined"
      sx={{ display: "flex" }}
      className="mui-card"
    >
      <Box sx={{ display: "flex", flexDirection: "column" }} className="box">
        <CardContent >
          {/* <Typography component="div" variant="h5">
            {gym.id}
          </Typography> */}
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
            <Rating name="read-only" value={gym.rating} readOnly />
          </Typography>
          <TypeBubble types={gym.types} />
        </CardContent>
        {/* <CardContent>
          <Typography level="title-lg">{gym.name}</Typography>
          <Typography level="body-sm">
            We are a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing.
          </Typography>
        </CardContent> */}

      </Box>

      <div className="card-image">
        {/* <FavoriteIcon sx={{ fontSize: 60 }} color="action" onClick={favouriteHandler} /> */}
        {/* <IconButton aria-label="add to favorites" onClick={favouriteHandler}>
          <FavoriteIcon sx={{ fontSize: 60 }} color="action" />
        </IconButton> */}
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="src/assets/react.svg"
          alt="Live from space album cover"
        />
        <CardActions>
          <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }} onClick={favouriteHandler}>
            <FavoriteBorder />
          </IconButton>
          <Button variant="contained" color="primary" onClick={(e) => onClickHandler(e, gym.id)}>
            View
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default GymCard;
