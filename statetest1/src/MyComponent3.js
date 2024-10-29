import { useState } from 'react';

let obj = {a:'test', b:100};
let cpy = {...obj}
// let cpy = obj; 
// 이렇게 하면 obj나 cpy가 데이터가 같음. 하나의 객체를 같이 가짐. 변경하면 원본도 변경되버린다
// 깊은복사 vs 얕은복사 


function MyComponent3() {
    const [person, setPerson] = useState({name:'hong', age:20});

    const changeName = () => {
        setPerson({...person, name:'pong'});
    }

    const changeAge = () => {
        setPerson({...person, age:300});
    }

    return(
        <>
            <h1>Hello React</h1>
            <span>{person.name}</span>
            <br/>
            <span>{person.age}</span>
            <br/>
            <button onClick={changeName}>변경</button>
            <button onClick={changeAge}>변경</button>
        </>
    )
}
export default MyComponent3;