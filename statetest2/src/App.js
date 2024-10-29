import { useState } from 'react';

function App() {
  const [data, setData] = useState('test');
  const [user, setUser] = useState({name:'화요일', email:'feb@naver.com', address:'서울시 금천구'});
  // const setInput = (e) => {
  //   setData(e.target.value);
  // }

  const userChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  return (
    <div>
      <h1>{data}</h1>
      <input type="text" onChange={(e) => setData(e.target.value)}/><br/><br/>
      
      <p>이름 : {user.name}, 이메일 : {user.email}, 주소 : {user.address}</p>
      이름 : <input type="text" name="name" onChange={userChange}/><br/>
      이메일 : <input type="text" name="email" onChange={userChange}/><br/>
      주소 : <input type="text" name="address" onChange={userChange}/><br/>
    </div>
  );
}

export default App;
