import React from 'react';

import "inter-ui/inter.css";
import "./result.css"
const Result = () => {


    return (


        <div className={'test'}>

            <h2 className={'h2result'}>Спасибо за обращение!</h2>

                <div  className={'list'}>
                    <p className={'result'}>Ващи данные отправлены врачу. Ответ прийдет вам на почту. Если хотите обратиться для дальнейшей консультации, позвоните по номеру (+465 897 890 345) </p>
                    <a href="/start" className="but" id= "but" >Начать заново</a>
                </div>

        </div>


    );


};

export default Result;


