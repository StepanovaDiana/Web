import React from 'react';
import { useState } from 'react';
import Select from "react-select";
import "inter-ui/inter.css";
import "./meningocalInfection.css"

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "lightgray",
        padding: "5px 10px",
        border: "1px solid black",
        boxShadow: "0 2px 4px rgba(0,0,0,.2)",
    }),
    option: (provided, state) => ({
        ...provided,
        borderBottom: "1px dotted pink",
        color: state.isSelected ? "white" : "black",
        backgroundColor: state.isSelected ? "hotpink" : "white",
    }),
};

const MeningocalInfection = () => {


    /*const [selectedOption, setSelectedOption] = useState(null);//получаем данную переменную

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };
    const options = [
        {value: "varOne", label: "Нет сыпи"},
        {value: "varTwo", label: "Не геморрагическая"},
        {value: "varThree", label: "Геморрагическая мелкоточечная "},
        {value: "varFour", label: "Сочетание геморрагической и др."},
        {value: "varFive", label: "Геморрагическая звездчатая "},
        {value: "varSix", label: "Геморрагическая сливная "},
    ];
    const customTheme = (theme) => ({
        ...theme,
        backgroundColor: '#5e5e5e',

        borderRadius: 25,
        borderWidth:2,
        colors: {
            primary25: "rgba(33, 153, 119, 1)",
        },
    });
  /*  const styles = {
        container: (base) => ({
            ...base,


            borderStyle: "solid",
            borderColor:"rgba(33, 153, 119, 1)",

        })
    }*/


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
                </select>

            </div>
        </div>


    );


};

export default MeningocalInfection;


