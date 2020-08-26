import React from 'react';
import './CartAres.css'

const CartArea = (props) => {
    const {name, img, email} = props.card;
    return (
        <div className='cart'>
            <div className='img-Cart'>
                <img src={img} alt=""/>
            </div>
            <div className='cartId'>
                <h3>{name}</h3>
                <h5>{email}</h5>
            </div>
        </div>
    );
};

export default CartArea;