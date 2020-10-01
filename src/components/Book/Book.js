import React from 'react';
import Hotel from '../Hotel/Hotel';



const Book = () => {
   
    const homes = [
        {
            title: 'Light bright airy stylish apt & safe peaceful stay',
            description: '4 guests 2bed rooms 2beads 2baths wif air conditioning kitcher Carcellation tex billt availlavle',
            imgUrl: 'https://i.ibb.co/0G8RtH3/Rectangle-26.png',
            price: 119,
            star:4.9
        },
        {
            title: 'Apartment in Lost Panorama',
            description: '4 guests 2bed rooms 2beads 2baths wif air conditioning kitcher Carcellation tex billt availlavle',
            imgUrl: 'https://i.ibb.co/Y8881L4/Rectangle-27.png',
            price: 149,
            star:4.8
        },
        {
            title: 'AR Lounge & Pool (r&r = b&b)',
            description: ' 4 guests 2bed rooms 2beads 2baths wif air conditioning kitcher Carcellation tex billt availlavle.',
            imgUrl: ' https://i.ibb.co/JdJg0zR/Rectangle-28.png',
            price: 199,
            star:4.6
        }
    ]

    
    return (
        <div>
            {
                homes.map(home => <Hotel key={home.bedType} homes={home}></Hotel>)
            }

          
        </div>
    );
};

export default Book;