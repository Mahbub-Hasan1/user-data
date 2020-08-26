import React from 'react';
import './UserInfo.css';

const UserInfo = (props) => {
    const {name, img, email} = props.user;
    return (
        
        <div className='usera'>
            <div className='img-div'>
                <img src={img} alt=""/>
            </div>
            <div className='userId'>
                <h3>user name : {name}</h3>
                <h5>email : {email}</h5>
                <button onClick={() => {props.handelClick(props.user)}}>added</button>
            </div>
        </div>
            
    );
};

export default UserInfo;