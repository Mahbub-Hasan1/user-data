import React, { useEffect } from 'react';
import { useState } from 'react';
import UserData from '../UserData/UserData';
import UserInfo from '../UserInfo/UserInfo';
import './User.css';
import CartArea from '../CartArea/CartArea';

const User = () => {
    const [user, setUser] = useState(UserData)

    const [cart, setCart] = useState([])
    const handelClick = (usere) => {
        console.log('clicked', usere)
        const newCart = [...cart, usere];
        setCart(newCart)
    }
    
    return (
        <div className='userInfo'>
            <div className='user'>
                {
                    user.map(user => <UserInfo handelClick={handelClick} user={user}></UserInfo>)
                }
            </div>
            <div className='cartNew'>
                <h3>Users : {cart.length}</h3>
                {
                    cart.map(cat => <CartArea card={cat}></CartArea>)
                }
                
            </div>
        </div>
    );
};

export default User;