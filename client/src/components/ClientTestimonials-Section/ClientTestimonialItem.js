import React from 'react';
import './ClientTestimonial.css'

function ClientTestimonialItem(props) {
    return (
        <>
        <li className='cards__testimonial'>
            <div className='cards__testimonial-link'>
                <figure className='cards__testimonial__pic__wrap' data-category={props.rrss}>
                    <img className='cards__testimonial-img' alt= "Testimonial" src={props.src}/>
                </figure> 
                <div className='cards__testimonial-info'>
                    <h5 className='cards__testimonial-text'>{props.description}</h5>
                </div>
            </div>
        </li>
        </>
    );
}

export default ClientTestimonialItem;
