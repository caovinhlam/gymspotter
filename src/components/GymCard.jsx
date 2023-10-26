import { Card, Box, CardContent, Typography, CardMedia, IconButton, Rating, CardActions, Button } from "@mui/material";
import TypeBubble from "./TypeBubble";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import { pink } from '@mui/material/colors';

const GymCard = (props) => {
  let { gym, viewHandler, favouriteHandler } = props;

  const [favourited, setFavourited] = useState(false);

  const cardFavouriteHandler = () => {

    setFavourited(!favourited);
  }

  return (
    <Card sx={{ display: "flex", flexDirection: "column" }} className="gym-card">
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardContent className="gym-contents">
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
            <Rating name="read-only" value={Number(gym.rating)} readOnly />
          </Typography>
          <TypeBubble types={gym.types} />

        </CardContent>
        <div className="card-image">
          {/* <FavoriteIcon sx={{ fontSize: 60 }} color="action" onClick={favouriteHandler} /> */}
          {/* <IconButton aria-label="add to favorites" onClick={favouriteHandler}>
          <FavoriteIcon sx={{ fontSize: 60 }} color="action" />
        </IconButton> */}
          <CardMedia
            component="img"

            image="src/assets/react.svg"
            alt="Live from space album cover"
          />
        </div>
      </Box>
      {/* <CardContent>
          <Typography level="title-lg">{gym.name}</Typography>
          <Typography level="body-sm">
            We are a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing.
          </Typography>
        </CardContent> */}

      <CardActions className="button-action">
        {favourited ?
          <IconButton
            sx={{ ml: "auto", color: pink[500] }}
            onClick={(e) => cardFavouriteHandler(e, gym.id)}
          >
            <FavoriteIcon sx={{ fontSize: 30 }} />
          </IconButton>
          :
          <IconButton
            sx={{ ml: "auto" }}
            onClick={(e) => cardFavouriteHandler(e, gym.id)}
          >
            <FavoriteIcon sx={{ fontSize: 30 }} />
          </IconButton>}
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => viewHandler(e, gym.id)}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default GymCard;
