import logo from './logo.svg';
import './App.css';
import react, { Component, PureComponent } from "react";
import axios from "axios";
import { useState } from 'react';

export class App extends Component {

    state = {
        a: 0
    }

    Change = () => {
        this.setState({ a : 0 })
    }

    incer = () => {
        this.setState({ a: this.state.a + 1 })
    }
    decre = () => {
        this.setState({ a: this.state.a - 1 })
    }

    render() {
        return (
            <>
            <div id='buttons'> 
            <button onClick={() => { this.decre() }} className='btn1'> - </button> <p id='val'>{ this.state.a}</p>
                <button onClick={() => { this.incer() }}  className='btn1'>+</button>
                <button onClick={() =>{this.Change()}} className='btn2'>Reset</button>
            </div>
                

            </>
    )
    }


}

export default App;




















