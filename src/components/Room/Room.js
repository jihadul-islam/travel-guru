import React from 'react';
import room1Img from '../../image/room1.png'
import room2Img from '../../image/room2.png'
import room3Img from '../../image/room3.png'
import star from '../../icon/star_1_.png'
import './Room.css'
import GoogleMaps from '../GoogleMaps/GoogleMaps';
const Room = () => {
   const room1 =[
      <div className="room-text">
           <h3> Light bright airy stylish apt and safe peaceful stay</h3>
       <p>4 guestss 2 bedrooms 2 beds 2 baths Wif Air conditioning Kitchen Cancellation fexibility availiable.</p>
       <p> <img src={star}/>4.9(20) $34/night $167 total</p>
      </div>,
       <img style={{width:'300px',marginLeft:'2%'}} src={room1Img}alt=""/>
     
      
   ]
   const room2 =[
    <div style={{marginTop:'30px'}}>
        <div className="room-text">
         <h3>Apartment in Lost Panorama </h3>
     <p>4 guestss 2 bedrooms 2 beds 2 baths Wif Air conditioning Kitchen Cancellation fexibility availiable.</p>
     <p> <img src={star}/>4.8(19) $64/night $167 total</p>
    </div>,
     <img style={{width:'300px',marginLeft:'2%'}} src={room2Img}alt=""/>
   
    </div>
    
 ]

 const room3 =[
    <div style={{marginTop:'30px'}}>
        <div className="room-text">
         <h3>AR Lounge Poll</h3>
     <p>4 guestss 2 bedrooms 2 beds 2 baths Wif Air conditioning Kitchen Cancellation fexibility availiable.</p>
     <p> <img src={star}/>4.7(17) $74/night $167 total</p>
    </div>,
     <img style={{width:'300px',marginLeft:'2%',marginBottom:'10px'}} src={room3Img}alt=""/>
   
    </div>
    
 ]


    return (
        <div>   <GoogleMaps/>
                {room1}
                {room2}
                {room3}
        </div>
    );
};

export default Room;