import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material";
import TypeBubble from "./TypeBubble";
import FavoriteIcon from '@mui/icons-material/Favorite';

const GymCard = (props) => {
  let { gym } = props;

  const onClickHandler = () => {
    console.log("hello");
  };

  const favouriteHandler = () => {
    console.log("favourite")
  }

  return (
    <Card
      sx={{ display: "flex" }}
      onClick={onClickHandler}
      className="mui-card"
    >
      <Box sx={{ display: "flex", flexDirection: "column" }} className="box">
        <CardContent >
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
        <FavoriteIcon sx={{ fontSize: 60 }} color="action" onClick={favouriteHandler} />
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
