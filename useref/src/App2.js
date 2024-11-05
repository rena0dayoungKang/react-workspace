// useRef를 사용하지 않았을 때
import { useState } from 'react';

export default function App2() {
    const [inputValue, setInputValue] = useState("");
    const [prevValue, setPrevValue] = useState("");
    const inputChange = (e) => {
        setPrevValue(inputValue);
        setInputValue(e.target.value);
    }
    return(
        <>
            <input type="text" onChange={inputChange}/>
            <h2>Current Value : {inputValue}</h2>
            <h2>Privious Value : {prevValue}</h2>
        </>
    )
}