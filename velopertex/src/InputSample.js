import React, { useState } from 'react';

export default function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text}/>
            {/* input의 onChange는 이벤트 객체 e를 파라미터로 받을 수 있다 */}
            {/* e 객체의 e.target은 이벤트가 발생한 DOM을 가리킨다 */}
            {/* e.target.value를 조회하면 현재 input의 value값을 알 수 있다 */}
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {text}</b>
            </div>
        </div>
    )
}
