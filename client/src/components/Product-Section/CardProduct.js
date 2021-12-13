import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductSection.css";

function CardProduct(props) {
    return (
        <>
            <div className='cards_product'>
                <Link className='cards_product_link' to={props.path}>
                    <figure className='cards_product_pic-wrap' >
                        <img className='cards_product_img'  src={props.src} />
                    </figure>
                </Link>
            </div>   
        </>
    );  
}


export default CardProduct;
