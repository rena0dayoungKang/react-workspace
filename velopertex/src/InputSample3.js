//useRef의 사용 용도
//1. 특정 DOM을 가리킬 때 
//2. 컴포넌트 안에서 조회 및 수정할 수 있는 변수관리 

//가끔씩 DOM 을 직접 선택해야 하는 상황이 발생 할 때
//예를 들어서 특정 엘리먼트의 크기를 가져와야 한다던지, 스크롤바 위치를 가져오거나 설정해야된다던지
//그럴 땐, 리액트에서 ref 라는 것을 사용
//함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef 라는 Hook 함수를 사용

// 초기화 버튼을 클릭했을 때 이름 input 에 포커스가 잡히도록 useRef 를 사용
import React, { useState, useRef } from 'react';

export default function InputSample3() {
    //variable
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출

    //method
    const nameInput = useRef();

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
        });
        nameInput.current.focus(); //Ref 객체의 .current 값은 우리가 원하는 DOM 을 가르키게 됩니다.
    };

    return (
        <div>
            <input name="name" onChange={onChange} value={name} ref={nameInput} placeholder='이름' />
            <input name="nickname" onChange={onChange} value={nickname} placeholder='닉네임' />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    )
}


