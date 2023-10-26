import { useNavigate } from "react-router-dom";
import GymCard from "../components/GymCard";

const Home = (props) => {
    let { text } = props;

    const user = {
        id: "1",
        email: "email@email.com",
        password: "q",
        firstName: "Cao Vinh",
        lastName: "Lam",
    };

    const gyms = [
        {
            id: "1",
            name: "In2Performace",
            placeId: "abc",
            location: "1 St.",
            types: ["24/7", "MMA", "Rock Climbing", "Female Only"],
            rating: "3",
        },
        {
            id: "2",
            name: "Anytime Fitness",
            placeId: "abc",
            location: "25 Crt.",
            types: ["24/7", "Boxing", "Rock Climbing", "Female Only", "MMA"],
            rating: "4",
        },
        {
            id: "3",
            name: "Gym Bros",
            placeId: "abc",
            location: "50 Swole Lane.",
            types: ["24/7", "Female Only"],
            rating: "1",
        },
    ];

    const favourites = [{ id: "1", userId: "1", gymId: "1" }];

    const navigate = useNavigate();

    const viewHandler = (event, gymId) => {
        // console.log(gymId);
        navigate(`/details/${gymId}`);
      };
    
      const favouriteHandler = (e, gymId) => {
        e.stopPropagation();
        console.log(`favourite ${gymId}`);
      };

    return (
        <div className="main">
            <p>Welcome {text}</p>
            {gyms.map((gym, gymIndex) => (
                <GymCard key={gymIndex} gym={gym} user={user} viewHandler={viewHandler} favouriteHandler={favouriteHandler} />
            ))}
        </div>
    );
};

export default Home;
