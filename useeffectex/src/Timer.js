import { useState, useEffect } from 'react';

export default function Timer() {
    const [count, setCount] = useState(0);
    
    //useEffect 의 timer hook 기능
    useEffect(() => {

        let timer = setTimeout(() => setCount(count + 1), 1000);
        return () => clearTimeout(timer); //timer나 interval을 종료하는 return 마무리 함수
        // setTimeout(() => setCount(count + 1), 1000)
    }, []) 
    //setInterval 사용하면서 []안에 count를 쓰게 되면 계속해서 돌게 된다 

    return (
        <h1>I've rendered {count} times!</h1>
    )
}