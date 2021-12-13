import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import images from '../../assets/images';

function Cards() {
    return (
        <div className='cards'>
            {/* <h1>Productos</h1> */}
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                       <CardItem 
                        src={images.img9} 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                        label='Adventure' 
                        path='/services'
                       />            
                        <CardItem 
                        src={images.img2} 
                        text='Explore the hidden waterfall deep inside the Amazon Jungle' 
                        label='Adventure' 
                        path='/services'
                       />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;