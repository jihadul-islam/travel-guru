import React from 'react';
import Places from '../Places/Places';
const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const places = [
        {
            title: ' Coxsbazar',
            description: 'Coxs Bazar is a city,fishing port,tourism centre and district headquarters in.',
            imgUrl: ' https://i.ibb.co/4pVnVSC/Sajek.png" alt="Sajek',
            
            bed: 1,
            capacity: 1,
            bedType: 'Single',
            avatar: 'S',
            price: 119
        },
        {
            title: 'Sreemongol',
            description: 'It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das.',
            
            imgUrl: ' https://i.ibb.co/1v8NhsW/Sreemongol.png',
            bed: 1,
            capacity: 2,
            bedType: 'Double',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Sundorbon',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://i.ibb.co/BLw2CJN/sundorbon.png" ',
            bed: 2,
            capacity: 4,
            bedType: 'Family',
            avatar: 'F',
            price: 199
        }
    ];

   
    return (
        <div style={style}>
            {
                places.map(place => <Places key={place.placeType} place={place}></Places>)
            }
        </div>
    );
};

export default Home;