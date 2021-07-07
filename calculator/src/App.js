import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [result, setResult] = useState("")

    const handlClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult("");
    }

    const backspace = () => {
        setResult(result.slice(0,-1))
    }

    const calculate = () => {
        try{
            setResult(eval(result).toString())
        }catch(err){
            setResult("Error")
        }       
    }
    return (
        <div class="container">
        <div class="calculadora">
            <div class="display">
                <form class="form">
                    <input type="text" value={result}/>
                </form>
            </div>
            <button onClick={clear} class="col-2">C</button>
            <button onClick={backspace}>&larr;</button>
            <button name="/" onClick={handlClick} class="operador">/</button>
            <button name="7" onClick={handlClick} class="numero">7</button>
            <button name="8" onClick={handlClick} class="numero">8</button>
            <button name="9" onClick={handlClick} class="numero">9</button>
            <button name="*" onClick={handlClick} class="operador">X</button>
            <button name="4" onClick={handlClick} class="numero">4</button>
            <button name="5" onClick={handlClick} class="numero">5</button>
            <button name="6" onClick={handlClick} class="numero"> 6</button>
            <button name="-" onClick={handlClick} class="operador">-</button>
            <button name="1" onClick={handlClick} class="numero">1</button>
            <button name="2" onClick={handlClick} class="numero">2</button>
            <button name="3" onClick={handlClick} class="numero">3</button>
            <button name="+" onClick={handlClick} class="operador">+</button>
            <button name="0" onClick={handlClick} class="col-2 numero">0</button>
            <button name="." onClick={handlClick} class="numero">.</button>
            <button onClick={calculate}class="operador">=</button>            
        </div>
    </div>
    )
}

export default App;