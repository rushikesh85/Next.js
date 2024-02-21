"use client"
import React, { useState } from "react";
import Style from './page.module.css';

function Counter() {
    const [countNum, setCount] = useState(1)

    const inc = () => {
        setCount (countNum + 1 )
    }
    const dec = () => {
        setCount (countNum - 1 )
    }
    const reset = () => {
        setCount (0) 
    }
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Counter</h1>
            <h3>{countNum}</h3>
            <button onClick={inc} className={Style.btn}>Increment</button>
            <button onClick={dec} className={Style.btn}>Decrement</button>
            <button onClick={reset} className={Style.btn}>Reset</button>
        </div>
    )
}
export default Counter;