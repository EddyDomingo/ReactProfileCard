import { useState } from "react";
import { GrPowerCycle} from 'react-icons/gr';

const ProfileCard = () => {
    const [profile, setProfile] = useState("/images/image-bob2.jpg",)
    const [name, setName] = useState("Bob James")
    const [userStats, setUserStats] = useState("80K  803K  1.4K")
    const [city, setCity] = useState("Houston")
    const influencers = [
        {
            id: 1, 
            pic:"/images/image-bob2.jpg", 
            name:"Bob James", 
            age: "42", 
            city: "Houston", 
            stats: "65K  750K  3.7K" 
        },
        {
            id: 2, 
            pic:"/images/image-jim2.jpg", 
            name:"Jim Thompson", 
            age: "54", 
            city: "Chicago", 
            stats: "45K  700K  2.3K" 
        },
        {
            id: 3, 
            pic:"/images/image-victor.jpg", 
            name:"Victor Crest", 
            age: "26", 
            city: "London", 
            stats: "80K  803K  1.4K"
         }
        
    ]
    const generateUser = () => {
        var x = Math.floor((Math.random() * 3) +1);
        const y = x - 1;
        const infl = influencers[y];
        const img = infl.pic;
        const name = infl.name;
        const stats = infl.stats;
        const city = infl.city;
        setProfile(img);
        setName(name);
        setUserStats(stats)
        setCity(city)
    }
    
    
    return ( 
        <div>
        <main className="main-card">
        <img src="/images/bg-pattern-card.svg" alt="pattern" id="bg-pattern-card"/>
            <img src={profile} alt="Victor" id="victor"/>
            <p className="info-container">
                <detail className="name">
                <strong>{name}</strong> 26<br></br> 
                <p className="city">{city}</p>  
                </detail>
                
                <hr className="section"></hr>
                <p className="followers">{userStats}</p>
            </p>

        </main>
             {/* <button className="btn" onClick={(()=>generateUser())}>Click Me</button> */}
             <button className="btn" onClick={(()=>generateUser())}><GrPowerCycle /></button>
        
        </div>
     );
}
 
export default ProfileCard;