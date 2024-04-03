import React from 'react';

import "inter-ui/inter.css";
import "./page5.css"
const Page5 = () => {


    return (


        <div className={'test'}>

            <h2 className={'h2test'}>Продолжаем опрос симптомов</h2>

            <h3 className={'h3test'}>Динамика температуры тела:</h3>

            <div  className={'box'}>
                <select  className={'selectPage5'}>
                    <option value= "varOne"> В анамнезе ${'<'}= 38,7 Сейчас ${'>'}= 37,6 </option>
                    <option value= "varTwo"> В анамнезе ${'>'}= 38,8 Сейчас ${'>'}= 37,6</option>
                    <option value="varThree"> В анамнезе ${'<'}= 38,7 Сейчас ${'<'}= 37,5</option>
                    <option value="varThree"> В анамнезе ${'>'}= 38,8 Сейчас ${'<'}= 37,5</option>

                </select>
                <div  className={'list'}>

                    <a href="/test7" className="but" id= "but" >Далее</a>
                </div>

            </div>
        </div>


    );


};

export default Page5;


