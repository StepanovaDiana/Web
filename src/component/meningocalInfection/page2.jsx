import React from 'react';

import "inter-ui/inter.css";
import "./page2.css"
const Page2 = () => {


    return (


        <div className={'test'}>

            <h2 className={'h2test'}>Продолжаем опрос симптомов</h2>

            <h3 className={'h3test'}>Яркость сыпи:</h3>

            <div  className={'box'}>
                <select  className={'select'}>
                    <option value= "varOne"> Бледная</option>
                    <option value= "varTwo"> Яркая </option>
                    <option value="varThree"> Цианотичная </option>

                </select>
                <div  className={'list'}>

                    <a href="#" className="but" id= "but" >Далее</a>
                </div>

            </div>
        </div>


    );


};

export default Page2;


