import React from "react";
import Button from "../button/button";
import {useT} from "../../hooks/useT";
import './header.css';
const  Header = (props) => {
    const {user, onClose} = useT();

    return (
        <div className={'header'}>
            <Button onClick = {onClose}>Закрыть</Button>

        </div>
    );

}

export  default  Header;
