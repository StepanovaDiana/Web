import React from "react";
import './button.css';

const  Button = (props) => {
    return (
        <button{...props} className={'button2'/*+ props.className*/}/>
    );

}

export  default  Button;