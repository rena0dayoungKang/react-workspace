import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import MakeAccount from './component/MakeAccount';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import AccountInfo from './component/AccountInfo';
import AllAccountInfo from './component/AllAccountInfo';
import Transfer from './component/Transfer';
import Login from './component/Login';
import Join from './component/Join';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route exect path="/" element={<Main/>} />
        <Route exect path="/login" element={<Login/>} />
        <Route exect path="/join" element={<Join/>} />
        <Route exect path="/makeAccount" element={<MakeAccount/>} />
        <Route exect path="/deposit" element={<Deposit/>} />
        <Route exect path="/withdraw" element={<Withdraw/>} />
        <Route exect path="/transfer" element={<Transfer/>} />
        <Route exect path="/accountInfo" element={<AccountInfo/>} />
        <Route exect path="/allAccountInfo" element={<AllAccountInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
