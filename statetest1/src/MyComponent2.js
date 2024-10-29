import { useState } from 'react';

// let {a,b} = {a:10, b:20}
// [10,20,30] 을 세개의 변수에 각각 담고 싶을 때, 
// let [a,b,c] = [10,20,30] 이렇게 하면 a,b,c 변수에 각각 값이 들어감 

// let arr = [10,20,30]
// let [a,b,c] = arr;  이렇게 해도 각각의 변수에 값이 들어감 

function MyComponent2() {
    // const [person, setPerson] = useeState({name:'hong', age:20})
    // 변수 선언에 대괄호사용 
    // {name:'hong', age:20} 이 전체가 person에 들어감
    
    const [name, setName] = useState('hong');
    const [age, setAge] = useState(20);

    return(
        <>
            <h1>Hello React</h1>
            <span>{name}</span>
            <br/>
            <span>{age}</span>
            <br/>
            <button onClick={() => setName('song')}>변경</button>
            <button onClick={() => setAge(30)}>변경</button>
        </>
    )

}

export default MyComponent2;