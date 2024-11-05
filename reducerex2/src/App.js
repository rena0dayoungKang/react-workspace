import logo from './logo.svg';
import './App.css';
import { initState, reducer } from './MyReducer';
import { useReducer } from 'react';
import MyNickname from './MyNickname';

function App() {
  
  const [info, dispatch] = useReducer(reducer, initState);
  const edit = (e) => {
    dispatch({type:e.target.name, data:e.target.value})
  }

  return (
    <div className="App">
      <labe>{info.id}</labe>&nbsp;&nbsp;&nbsp;
      <input type="text" name="ID" onChange={edit}/><br/>
      <MyNickname info={info} dispatch={dispatch}/><br/>
      <labe>{info.subject}</labe>&nbsp;&nbsp;&nbsp;
      <input type="text" name="SUBJECT" onChange={edit}/><br/>
      <labe>{info.grade}</labe>&nbsp;&nbsp;&nbsp;
      <input type="text" name="GRADE" onChange={edit}/><br/>
    </div>
  );
}

export default App;
