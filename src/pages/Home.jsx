import GymCard from "../components/GymCard"

const Home = (props) => {
    let {text} = props

    const gyms = [
        { id:"1", name: "In2Performace", placeId: "abc", location: "1 St.", types: ["24/7", "MMA", "Rock Climbing", "Female Only"], rating:"3" },
        { id:"2", name: "Anytime Fitness", placeId: "abc", location: "25 Crt.", types: ["24/7", "Boxing", "Rock Climbing", "Female Only", "MMA"], rating:"4" },
        { id:"3", name: "Gym Bros", placeId: "abc", location: "50 Swole Lane.", types: ["24/7", "Female Only"], rating:"1" },
    
    ]

    return (
        <div className="main">
            <p>Welcome {text}</p>
            {gyms.map((gym, gymIndex) => 
                <GymCard key={gymIndex} gym={gym} />
            )}
        </div>
    )
}

export default Home