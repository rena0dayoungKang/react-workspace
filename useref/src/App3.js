// useRef를 사용했을 때
import { useState, useRef, useEffect } from 'react';

export default function App3() {
    const [inputValue, setInputValue] = useState("");
    const prevInputValue = useRef("");

    useEffect(() => {
        prevInputValue.current = inputValue;
    }, [inputValue])
    
    return(
        <>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
            <h2>Current Value : {inputValue}</h2>
            <h2>Privious Value : {prevInputValue.current}</h2>
        </>
    )
}