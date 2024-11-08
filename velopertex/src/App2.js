import './App.css';
import CreateUser from './CreateUser';
import InputSample2 from './InputSample2';
import InputSample3 from './InputSample3';
import UserList from './UserList';
import React, { useRef, useReducer, useState, useMemo, useCallback } from 'react';
//useRef() 를 사용하여 nextId 라는 변수를 만들어보겠습니다

//useMemo 를 사용하여 연산한 값 재사용하기
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
      case 'REMOVE_USER' :
        return {
          ...state, 
          users : state.users.filter(user => 
            user.id !== action.id
          )
        }
    default: return state;
  }
}


function App() {
  // const [inputs, setInputs] = useState({
  //   username: '',
  //   email: ''
  // });

  // const { username, email } = inputs;

  //useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용
  // const onChange = useCallback(
  //   e => {
  //     const { name, value } = e.target;
  //     setInputs({
  //       ...inputs,
  //       [name]: value
  //     });
  //   },
  //   []
  // );

  //그 다음에는, users 도 useState 를 사용하여 컴포넌트의 상태로서 관리해주세요.
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: 'velopert',
  //     email: 'public.velopert@gmail.com'
  //   },
  //   {
  //     id: 2,
  //     username: 'tester',
  //     email: 'tester@example.com'
  //   },
  //   {
  //     id: 3,
  //     username: 'liz',
  //     email: 'liz@example.com'
  //   }
  //   //const users = []; //배열을 App 에서 선언하고 UserList 에게 props 로 전달
  // ]);



  // const nextId = useRef(4); //useRef()파라미터, 이 값이 .current 값의 기본값
  // const onCreate = useCallback(() => {

  //   //1) 불변성을 지키면서 배열에 새 항목을 추가하는 방법 첫번째는 spread 연산자를 사용하는 것
  //   // const user = {
  //   //   id: nextId.current, username, email
  //   // };
  //   // setUsers([...users, user]);

  //   //2) 또 다른 방법은 concat 함수를 사용하는 것
  //   const user = {
  //     id: nextId.current, username, email
  //   };
  //   setUsers(users.concat(user));

  //   setInputs({ //input 초기화
  //     username: '',
  //     email: ''
  //   });
  //   nextId.current += 1;
  // }, [username, email]
  // );

  // const onRemove = useCallback(
  //   id => {
  //     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //     // = user.id 가 id 인 것을 제거함
  //     setUsers(users.filter(user => user.id !== id));
  //     // 불변성을 지키면서 특정 원소를 배열에서 제거하기 위해서는 filter 배열 내장 함수를 사용하는것이 가장 편합니다.
  //   }, []
  // );

  // const onToggle = useCallback(
  //   id => {
  //     setUsers(
  //       users.map(user =>
  //         user.id === id ? { ...user, active: !user.active } : user
  //       )
  //     );
  //   }, [users]
  // );
  // // 함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야 된다는 것

  // // const count = countActiveUsers(users);
  // const count = useMemo(() => countActiveUsers(users), [users]);
  // //useMemo 는 특정 결과값을 재사용 할 때 사용

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

  return (
    <div className='div'>
      {/* <Counter/> */}
      {/* <InputSample /> */}
      {/* <InputSample2/> */}
      {/* <InputSample3/> */}
      {/* <UserList/> */}

      {/* useRef 를 사용하여 변수를 관리해볼건데요, 
      용도는 우리가 앞으로 배열에 새 항목을 추가할건데, 
      새 항목에서 사용 할 고유 id 를 관리하는 용도입니다. */}
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={[]} />
      <div>활성 사용자 수 : 0</div>
      {/* input 값이 바뀔 때에도 컴포넌트가 리렌더링 되므로 이렇게 불필요할때에도 호출 */}
      {/* 이러한 상황에는 useMemo 라는 Hook 함수를 사용하면 성능을 최적화 할 수 있습니다. */}
    </div>
  );
}



export default App;
