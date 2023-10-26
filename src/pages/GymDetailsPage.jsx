import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/react.svg";
import TypeBubble from "../components/TypeBubble";
import { Favorite } from "@mui/icons-material";
import Review from "../components/Review";
import { Button, IconButton } from "@mui/material";
import AddReview from "./AddReview";

const GymDetailsPage = (props) => {
  const params = useParams();
  const [currentGym, setCurrentGym] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const gyms = [
    {
      id: "1",
      name: "In2Performace",
      placeId: "abc",
      location: "1 St.",
      types: ["24/7", "MMA", "Rock Climbing", "Female Only"],
    },
    {
      id: "2",
      name: "Anytime Fitness",
      placeId: "abc",
      location: "25 Crt.",
      types: ["24/7", "Boxing", "Rock Climbing", "Female Only", "MMA"],
    },
    {
      id: "3",
      name: "Gym Bros",
      placeId: "abc",
      location: "50 Swole Lane.",
      types: ["24/7", "Female Only"],
    },
  ];

  const reviews = [
    {
      id: "1",
      userId: "1",
      username: "Cao Vinh Lam",
      rating: "1",
      cleanliness: "2",
      price: "3",
      service: "4",
      description: "It's okay",
      date: "1 hour ago",
    },
    {
      id: "2",
      userId: "2",
      username: "Phil VU",
      rating: "4",
      cleanliness: "3",
      price: "2",
      service: "1",
      description: "Decent",
      date: "2 hours ago",
    },
    {
      id: "3",
      userId: "3",
      username: "Zhanzhao Yang",
      rating: "5",
      cleanliness: "4",
      price: "4",
      service: "5",
      description: "I like it",
      date: "3 hours ago",
    },
  ];

  useEffect(() => {
    loadGymDetails();
  }, []);

  const loadGymDetails = () => {
    for (const [i, gym] of gyms.entries()) {
      if (gym.id === params.gymId) {
        console.log("found it");
        setCurrentGym(gym);
        break;
      } else {
        console.log("looking at " + i);
      }
    }
  };

  const favouriteHandler = () => {
    return;
  };

  return (
    <div>
      {currentGym && (
        <div className="gym-body">
          <h2>Name: {currentGym.name}</h2>
          <h2>Location: {currentGym.location}</h2>
          <div className="row1">
            <img src={image} className="col1" />
            <div className="col2">
              <h2>Types</h2>
              <TypeBubble types={currentGym.types} />
            </div>
          </div>
          <h2>Utilities:</h2>
          <h2>Services:</h2>
          <h2>Description:</h2>
          <div className="row2">
            <Button variant="contained" color="primary">
              Direction
            </Button>
            <Button variant="contained" color="success" onClick={handleOpen}>
              Add Review
            </Button>
            <IconButton
              aria-label="add to favorites"
              onClick={favouriteHandler}
            >
              <Favorite sx={{ fontSize: 40 }} color="action" />
            </IconButton>
            {/* <Favorite sx={{ fontSize: 40 }} color="action" onClick={favouriteHandler} className="favourite" /> */}
          </div>
          <div className="row3">
            {reviews.map((review, reviewIndex) => (
              <Review
                key={reviewIndex}
                username={review.username}
                review={review}
              />
            ))}
            <AddReview open={open} handleClose={handleClose} />
          </div>
          
        </div>
      
      )}
    </div>
  );
};

export default GymDetailsPage;
