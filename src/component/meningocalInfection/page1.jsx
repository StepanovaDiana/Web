import React from 'react';

import "inter-ui/inter.css";
import "./page1.css"
const Page1 = () => {


    return (


        <div className={'test'}>

            <h2 className={'h2test'}>Продолжаем опрос симптомов</h2>

            <h3 className={'h3test'}>Преимущественная локализация сыпи:</h3>

            <div  className={'box'}>
                <select  className={'select'}>
                    <option value= "varOne"> На конечностях</option>
                    <option value= "varTwo"> На лице </option>
                    <option value="varThree"> На туловище </option>
                    <option value= "varFour"> Равномерно по телу</option>

                </select>
                <div  className={'list'}>

                    <a href="#" className="but" id= "but" >Далее</a>
                </div>

            </div>
        </div>


    );


};

export default Page1;


