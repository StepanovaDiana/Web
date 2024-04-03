import React from 'react';

import "inter-ui/inter.css";
import "./page3.css"
const Page3 = () => {


    return (


        <div className={'test'}>

            <h2 className={'h2test'}>Продолжаем опрос симптомов</h2>

            <h3 className={'h3test'}>Цианоз:</h3>

            <div  className={'box'}>
                <select  className={'select'}>
                    <option value= "varOne"> Нет или периоральный</option>
                    <option value= "varTwo"> Разлитой или акроцианоз </option>

                </select>
                <div  className={'list'}>

                    <a href="/test5" className="but" id= "but" >Далее</a>
                </div>

            </div>
        </div>


    );


};

export default Page3;


