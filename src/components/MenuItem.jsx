import React, { Component } from 'react';
import "../style/Saloon.css"


class MenuItem extends Component {

    render() {
        const { item, valor, onClick, imagem } = this.props;
        
        return (
           
                <li className="itemMenu"><img alt="title3" className="imgMenu" src={imagem}/><button onClick={onClick} className="btnItems btnTest"> {item}  <br/>  R$ {valor}</button></li>

        );
    }
}

export default MenuItem;