import { useEffect, useState } from "react";

export default function Counter() {
    const [kor, setKor] = useState(0);
    const [eng, setEng] = useState(0);
    const [math, setMath] = useState(0);
    const [avg, setAvg] = useState(0);

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    
    useEffect(() => {
        setAvg((+kor + +eng + +math)/3);  //자바스크립트에서 +를 붙이면 숫자로 바꿀 수 있다 
    }, [kor,eng,math])

    useEffect(() => {
        setCalculation(count*2);
    }, [count]);

    return(
        <>
            {/* <p>Count: {count}</p> */}
            {/* <button onClick={() => {setCount(count+1); setCalculation((count+1)*2);}}>+</button> */}
            국어 : <input type="text" onChange={(e) => setKor(e.target.value)}/><br/>
            영어 : <input type="text" onChange={(e) => setEng(e.target.value)}/><br/>
            수학 : <input type="text" onChange={(e) => setMath(e.target.value)}/><br/>
            <p>평균 : {avg}</p>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count+1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    )
}