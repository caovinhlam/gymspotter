import { Card, Rating, Typography } from "@mui/material"
import { useState } from "react"

const Review = (props) => {
    const { username, review } = props
    const [rating, setRating] = useState(0)



    return (
        <Card
            sx={{ display: "flex" }}
            className="mui-card, reviewCard"
        >
            <Typography variant="h5" gutterBottom>
                {username}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>{review.date}</Typography>
            
            <Typography component="legend">Overall Rating</Typography>
            <Rating name="read-only" value={review.rating} readOnly />
            <Typography component="legend">Cleanliness</Typography>
            <Rating name="read-only" value={review.cleanliness} readOnly />
            <Typography component="legend">Price</Typography>
            <Rating name="read-only" value={review.price} readOnly />
            <Typography component="legend">Service</Typography>
            <Rating name="read-only" value={review.service} readOnly />

            {/* <div style={{flexDirection:'row', display:'flex'}}>
            </div> */}
            <Typography component="legend" style={{marginTop:'15px'}}>
                {review.description}
            </Typography>


        </Card>
    )
}

export default Review