import React from 'react';

import "inter-ui/inter.css";
import "./page6.css"
const Page6 = () => {


    return (


        <div className={'test'}>

            <h2 className={'h2test'}>Продолжаем опрос симптомов</h2>

            <h3 className={'h3test'}>Олигурия:</h3>

            <div  className={'box'}>
                <select  className={'select'}>
                    <option value= "varOne"> Нет</option>
                    <option value= "varTwo"> Есть </option>

                </select>
                <div  className={'list'}>

                    <a href="/test8" className="but" id= "but" >Далее</a>
                </div>

            </div>
        </div>


    );


};

export default Page6;


