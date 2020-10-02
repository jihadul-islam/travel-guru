
import React from 'react';
import Calender from '../Calender/Calender'
import GoogleMaps from '../GoogleMaps/GoogleMaps'
import Room from '../Room/Room';
const Book = () => {
    return (
        <div style={{backgroundColor:'white'}}>
            <Calender></Calender>
            
            <Room></Room>
          
            <h1>This is book</h1>
        </div>
    );
};

export default Book;