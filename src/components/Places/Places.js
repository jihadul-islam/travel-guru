import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {  Card, CardDeck } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Places.css'
const Places = ({place}) => {
  const history = useHistory()
  const handleBook = (bedType) => {
      history.push(`/book/${bedType}`);
  }
  return (
   <div>
<CardDeck className="cards">
    <Card.Body  style={{backgroundColor:' rgba(255, 255, 255, 0.2)',borderRadius:'5px'}}>
      <Card.Title>{place.title}</Card.Title>
      <Card.Text>
            {place.description}
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={place.imgUrl} />
  </CardDeck>
  
  <button className="booking-btn" onClick={() => handleBook(place.placeType)} ><FontAwesomeIcon icon={faAddressBook} /> Booking--> </button>
    </div>
  );
};

export default Places;