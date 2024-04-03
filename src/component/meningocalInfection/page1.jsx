import React from 'react';

import "inter-ui/inter.css";
import "./page1.css"
const Page1 = () => {


    return (


        <div className={'test'}>

            <h2 className={'h2test'}>Оценка риска менинговой инфекции</h2>

            <h3 className={'h3test'}>Наличие и характер сыпи:</h3>

            <div  className={'box'}>
                <select >
                    <option value= "varOne"> Нет сыпи</option>
                    <option value= "varTwo"> Не геморрагическая</option>
                    <option value="varThree"> Геморрагическая мелкоточечная </option>
                    <option value= "varFour"> Сочетание геморрагической и др.</option>
                    <option value= "varFive"> Геморрагическая звездчатая </option>
                    <option value= "varSix"> Геморрагическая сливная </option>
                    <a href="#" className="button" id="button">Бронхиальная астма</a>
                </select>

            </div>
        </div>


    );


};

export default Page1;


