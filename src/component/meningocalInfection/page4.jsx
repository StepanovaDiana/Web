import React from 'react';

import "inter-ui/inter.css";
import "./page4.css"
const Page4 = () => {


    return (


        <div className={'test'}>

            <h2 className={'h2test'}>Продолжаем опрос симптомов</h2>

            <h3 className={'h3test'}>Общее состояние:</h3>

            <div  className={'box'}>
                <select  className={'select'}>
                    <option value= "varOne"> Удовлетворительное </option>
                    <option value= "varFour"> Средней тяжести</option>
                    <option value= "varTwo"> Тяжелое </option>
                    <option value="varThree"> Терминальное </option>

                </select>
                <div  className={'list'}>

                    <a href="/test6" className="but" id= "but" >Далее</a>
                </div>

            </div>
        </div>


    );


};

export default Page4;


