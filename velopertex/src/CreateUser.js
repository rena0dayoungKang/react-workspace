import React from 'react';
//상태관리를 CreateUser 에서 하지 않고 부모 컴포넌트인 App 에서 하게 하고,
// input 의 값 및 이벤트로 등록할 함수들을 props 로 넘겨받아서 사용해주겠습니다.
const CreateUser = ({ username, email, onChange, onCreate }) => {
    return (
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} value={username} />
            <input name="email" placeholder="이메일" onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}
export default React.memo(CreateUser);
// 컴포넌트의 props 가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화 React.memo 라는 함수