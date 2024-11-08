//input 의 개수가 여러개가 됐을때는, 단순히 useState 를 여러번 사용하고 
//onChange 도 여러개 만들어서 구현 할 수 있다. 그러나 효율적인 방법은, 
//input 에 name 을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것

import React, { useState } from 'react';

export default function InputSample2() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target; //e.target으로 name과 value를 추출
        setInputs({
            ...inputs,  //기존의 input 객체 복사
            [name]: value //name키를 가진 값을 value로 설정
        });
        // ... 문법은 spread 문법, 객체의 내용을 모두 "펼쳐서" 기존 객체를 복사  "불변성을 지킨다"
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
    };

    return (
        <div>
            <input name="name" onChange={onChange} value={name} placeholder='이름' />
            <input name="nickname" onChange={onChange} value={nickname} placeholder='닉네임' />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    )
}
