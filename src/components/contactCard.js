import React from "react";
import user from "../images/user.jpg";

const CardContact = (props) =>{
    const{id,name,email}=props.contact;
    return(
        <div className='item'>
            <img className="ui avatar image" src={user} />
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                    <button className='ui button red delete'><i className='trash alternate outline icon'></i></button>
                </div>
        </div>
    )
}

export default CardContact