import React, {useState}from 'react';
import PropTypes from 'prop-types';


const GreetingsF = (props) => {

    //const [varible, metodo para actualizarlo] = useState(valor inicial);
    const [age, setage] = useState(34);
    const birthday = () => {
        // actualizamos el state
        setage(age + 1);
    }
    return (
        <div>
            <h1>
                HOLA {props.name} desde componente funcional! {/*Valor del prop*/}
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir Años
                </button>
            </div>
        </div>
    );
};


GreetingsF.propTypes = {
    name: PropTypes.string

};


export default GreetingsF;