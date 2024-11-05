import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import Login from './component/Login';
import Join from './component/Join';
import BoardList from './component/BoardList';
import BoardWrite from './component/BoardWrite';
import BoardDetail from './component/BoardDetail';
import BoardModify from './component/BoardModify';

function App() {
  return (
    <div>
      {/* 라우터 사용을위해 index.js 에 import BrowserRouter  */}
      <Main/>
      <Routes>
        <Route exect path="/" element={<BoardList/>}></Route>
        <Route exect path="/login" element={<Login/>}></Route>
        <Route exect path="/join" element={<Join/>}></Route>
        <Route exect path="/boardWrite" element={<BoardWrite/>}></Route>
        <Route exect path="/boardDetail/:num" element={<BoardDetail/>}></Route>
        <Route exect path="/boardModify/:num" element={<BoardModify/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
