import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]) ; 

    
 //Piece of code which runs based on a condition
 useEffect(() => {
    //this is where the code runs
        database.collection("Food").onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
    );
    //Run once and never again
 }, []);
 


    return (
    <div>
        <h1>Food Cards</h1>

        <div className="tinderCards_cardContainer"></div>
        {people.map((person) => (
            <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up' , 'down']}
            > 
                <div 
                style={{ backgroundImage: `url(${person.url})`}} 
                className="card"
                >
                 <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
    </div>
    ); 
}

export default TinderCards;
