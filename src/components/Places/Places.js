import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Places.css'
const Places = ({home}) => {
  const history = useHistory()
  const handleBook = (bedType) => {
      history.push(`/book/${bedType}`);
  }
  return (
   <div>
<CardDeck>
  <Card className="cards">
    
    <Card.Body>
      <Card.Title>{home.title}</Card.Title>
      <Card.Text>
       {home.description}
      </Card.Text>
    </Card.Body>
    <Card.Img variant="top" src={home.imgUrl} />
  </Card>
  </CardDeck>
  <Button onClick={() => handleBook(home.bedType)} >Booking--></Button>
    </div>
  );
};

export default Places;