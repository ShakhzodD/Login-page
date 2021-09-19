import React, {useEffect, useRef, useState} from 'react'

function setDefaultValue(){
    const userCount=localStorage.getItem("count");
    return userCount ? +userCount:0
}
export default function Timer() {
    const [count, setCount]=useState(setDefaultValue());
    const [isCounting, setIsCounting]=useState(false);
    const timerIdRef=useRef(null);

    const handleStart = () =>{
        setIsCounting(true)

        timerIdRef.current=setInterval(() => {
            setCount((prev)=>prev+1)
        }, 1000);
    }

    const handleStop=()=>{
        clearInterval(timerIdRef.current);
        setIsCounting(false)
    }

    const handleReset=()=>{
        setCount(0);
        setIsCounting(false)
    }

    useEffect(()=>{
        console.log("update");
        localStorage.setItem("count", count)
    },[count]);

    useEffect(()=>{
        if(isCounting){
            timerIdRef.current = setInterval(()=>{
                setCount((prev)=>prev+1)
            }, 1000);
        }

        return ()=>{
            console.log("wilUnMount");
            timerIdRef.current && clearInterval(timerIdRef.current);
            timerIdRef.current=null
        }
    }, [isCounting])
    return (
        <div>
            <h1>{count}</h1>
            {!isCounting ? (
                <button onClick={handleStart}>Start</button>
            ):(
                <button onClick={handleStop}>Stop</button>
            )} 
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
