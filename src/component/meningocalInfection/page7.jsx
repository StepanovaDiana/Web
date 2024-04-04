import React from 'react';

import "inter-ui/inter.css";
import "./page7.css"
const Page7 = () => {


    return (


        <div className={'test'}>

            <h2 className={'h2test'}>Продолжаем опрос симптомов</h2>

            <h3 className={'h3test'}>Менингеальные симптомы:</h3>

            <div  className={'box'}>
                <select  className={'select'}>
                    <option value= "varOne"> Нет или выражены слабо</option>
                    <option value= "varTwo"> Выражены умеренно или резко </option>

                </select>
                <div  className={'list'}>

                    <a href="/test9" className="but" id= "but" >Далее</a>
                </div>

            </div>
        </div>


    );


};

export default Page7;


