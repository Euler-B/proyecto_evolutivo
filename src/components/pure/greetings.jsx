import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greetings extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 34
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola { this.props.name } ! {/*Valor del prop*/}
                </h1>
                <h2>
                    Tu edad es de: { this.state.age } {/*Valor de Estado*/}
                </h2>
                <div>
                    <button onClick={ this.birthday }>
                    Cumplir Años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
}


Greetings.propTypes = {
    name: PropTypes.string,

};


export default Greetings;