import React, { Component } from 'react';
import "../style/Saloon.css"


class CardapioItem extends Component {

    render() {
        const { item, valor, onClick, imagem } = this.props;
        console.log(imagem);
        return (
           
                <li className="itemMenu"><img className="imgMenu" src={imagem}/><button onClick={onClick} className="btnItems btnTest"> {item}  <br/>  {valor}</button></li>

        );
    }
}

export default CardapioItem;