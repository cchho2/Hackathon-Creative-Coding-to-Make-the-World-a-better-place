import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';


function TinderCards() {
  const [people, setPeople] = useState([
    {
        name: 'Zain is goofy',
        url: 'https://www.freepnglogos.com/uploads/food-png/junk-food-archives-classic-0.png'
    },
    {
        name: 'Hamid is goofy',
        url: 'https://www.freepnglogos.com/uploads/food-png/food-grass-fed-beef-foodservice-products-grass-run-farms-4.png'
    }
  ]) ; 
  //const people = [];
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


