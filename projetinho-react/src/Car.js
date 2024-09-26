import React, { Component } from 'react';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            brand: "Kia",
            model: "Não entendo de carro desculpa",
            color: "preto",
            year: 1300
        };
    }
  
    changeColor = (newColor) => {
            if (this.state.color !== newColor){
                alert(`A cor do carro mudou de ${this.state.color} para ${newColor}!`)
                this.setState({ color: newColor });
            }else{
                alert(`A cor do carro já é ${newColor}!`)
            }
        }

    render() {
        return (<div>
            <h1>Meu {this.state.brand} {this.state.color}</h1>
            <p>Modelo: {this.state.model}, de {this.state.year}</p>
            <button type="button" onClick={ () => this.changeColor("azul") }>Mudar cor</button>
        </div>);
    }
}

export default Car;