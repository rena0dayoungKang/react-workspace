import React, { useEffect } from 'react';

//재사용되는 코드를 일일히 넣는게 별로 좋지 않으니, 컴포넌트를 재사용 할 수 있도록

const User = React.memo(function User({ user, onRemove, onToggle }) {
    
    // useEffect 라는 Hook 을 사용하여 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 
    //언마운트 됐을 때 (사라질 때), 그리고 업데이트 될 때 (특정 props가 바뀔 때) 특정 작업을 처리하는 방법
    useEffect(() => {
        console.log(user);
    });
    //useEffect 를 사용 할 때에는 첫번째 파라미터에는 함수, 
    //두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣습니다.
    //deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출
    //deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출,
    //cleanup 함수는 useEffect 에 대한 뒷정리

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            {/* 삭제 버튼이 클릭 될 때는 user.id 값을 앞으로 props 로 받아올 
            onRemove 함수의 파라미터로 넣어서 호출해주어야 합니다. */}
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) { //App.js에서prop으로 전달받은 {users}
    // const users = [
    //     {
    //         id: 1,
    //         username: 'velopert',
    //         email: 'public.velopert@gmail.com'
    //     },
    //     {
    //         id: 2,
    //         username: 'tester',
    //         email: 'tester@example.com'
    //     },
    //     {
    //         id: 3,
    //         username: 'liz',
    //         email: 'liz@example.com'
    //     }
    // ];

    return (
        <div>
            {/* 배열의 인덱스를 하나하나 조회해가면서 렌더링하는 방법은 동적인 배열을 렌더링하지 못합니다. */}
            {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}

            {/* 동적인 배열을 렌더링해야 할 때에는 자바스크립트 배열의 내장함수 map() 을 사용 */}
            {
                users.map(user => (
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
                ))
                // users.map((user, index) => (
                //     <User user={user} key={index}/>
                // ))
            }
        </div>
        //react-jsx-dev-runtime.development.js:85 
        //Warning: Each child in a list should have a unique "key" prop. 에러가 난다
        //이유는 리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야합니다.
        //만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용 할 때 
        //설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용하시면 됩니다.
    );
}

//배열 렌더링에 key값이 필요한 이유 : key값이 없다면 배열 순서대로 출력하면서 중간에 삽입, 삭제가
//일어날 경우, 모든 배열 순서를 다시 만들어냄 (즉, 중간에 삽입,삭제가 아니므로 비효율적)
//key값이 있다면 말그대로 중간에 삽입이 된다.
//배열안에 중복되는 key값이 있다면 업데이트가 이루어지지 않음 

export default React.memo(UserList);