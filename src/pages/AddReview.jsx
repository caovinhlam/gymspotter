import { Box, Button, FormControl, FormLabel, InputLabel, Modal, Rating, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";

const AddReview = (props) => {

    const [rating, setRating] = useState(0)
    const [cleanliness, setCleanliness] = useState(0)
    const [price, setPrice] = useState(0)
    const [service, setService] = useState(0)

    useEffect(() => {
        // Update the document title using the browser API
        setRating(0)
        setCleanliness(0)
        setPrice(0)
        setService(0)
        console.log("helloooo")
      }, []);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '20px',
        p: 4,
    };
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <FormControl className="review-form">
                    <FormLabel sx={{ textAlign: "center" }}>Overall</FormLabel>
                    <Rating value={rating} sx={{ fontSize: 60, marginLeft:'auto', marginRight:'auto'}}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }} className="review-rating"/>
                    <FormLabel>Cleanliness</FormLabel>
                    <Rating value={cleanliness} sx={{ fontSize: 30 }}
                        onChange={(event, newValue) => {
                            setCleanliness(newValue);
                        }}
                        className="review-rating" />
                    <FormLabel>Price</FormLabel>
                    <Rating value={price} sx={{ fontSize: 30 }}
                        onChange={(event, newValue) => {
                            setPrice(newValue);
                        }}
                        className="review-rating" />
                    <FormLabel>Service</FormLabel>
                    <Rating value={service} sx={{ fontSize: 30 }}
                        onChange={(event, newValue) => {
                            setService(newValue);
                        }}
                        className="review-rating" />
                    <TextField label="Description" multiline rows={3}></TextField>
                    <div className="review-button-action">
                        <Button variant="contained">Save</Button>
                        <Button color="error" variant="contained" onClick={props.handleClose}>Cancel</Button>
                    </div>
                </FormControl>
            </Box>
        </Modal>
    )
}

export default AddReview