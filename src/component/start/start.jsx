import React from "react";
import "inter-ui/inter.css";

import './start.css';


const  Start = () => {



    return (

        <div className={'test'}>

            <h2 className={'h2start'}>Добро пожаловать!</h2>

            <div  className={'list'}>
                <p className={'start'}> Мы подскажем, что делать в случае твоей болезни. Выше ты увидишь кнопку о заполнении персональных данных. Заполни ее, пожалуйста, перед началом. Для того, чтобы узнать о твоем самочувствии и проверить симптомы, пройди диагностическое тестирование.</p>
                <a href="/testList" className="butStart" id= "butStart" >Пройти диагностическое тестирование</a>
            </div>

        </div>


    );

}

export  default  Start;