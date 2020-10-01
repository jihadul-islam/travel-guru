import React from 'react';
import { Card } from 'react-bootstrap';
import './Hotel.css'
import star from '../../icon/star_1_.png'
import Calender from '../Calender/Calender';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
const Hotel = ({homes}) => {
    
    return (
        <div>
          <GoogleMaps></GoogleMaps>
            <h2><Calender></Calender></h2>
           <Card  className="half-width">
    <Card.Body>
    <Card.Title>{homes.title}</Card.Title>
      <Card.Text style={{color:'gray'}}>
      {homes.description} 
      </Card.Text>

      <Card.Text>
      ${homes.price} 
        <img style={{width:'18px'}} src={star} alt=""/>
        {homes.star}
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={homes.imgUrl}/>
  </Card>
  
        </div>
    );
};

export default Hotel;