import GymCard from "../components/GymCard"

const Home = (props) => {
    let {text} = props

    const gyms = [
        { name: "In2Performace", placeId: "abc", location: "1 St.", types: ["24/7", "MMA", "Rock Climbing", "Female Only"] },
        { name: "Anytime Fitness", placeId: "abc", location: "25 Crt.", types: ["24/7", "Boxing", "Rock Climbing", "Female Only", "MMA"] },
        { name: "Gym Bros", placeId: "abc", location: "50 Swole Lane.", types: ["24/7", "Female Only"] },
    
    ]

    return (
        <div>
            <p>Welcome {text}</p>
            {gyms.map((gym, gymIndex) => 
                <GymCard key={gymIndex} gym={gym} />
            )}
        </div>
    )
}

export default Home