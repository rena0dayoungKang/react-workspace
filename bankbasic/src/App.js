import 'bootstrap/dist/css/bootstrap.css';
import Login from './Login';
import Join from './Join';
import { MakeAccount } from './MakeAccount';
import { Deposit } from './Deposit';
import { Withdraw } from './Withdraw';
import AccountInfo from './AccountInfo';
import AllAccountInfo from './AllAccountInfo';
import Header from './Header'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // react 최신버전에 맞는 {} 를 사용해야함

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/join' element={<Join/>}/>
          <Route exact path='/makeAccount' element={<MakeAccount/>}/>
          <Route exact path='/deposit' element={<Deposit/>}/>
          <Route exact path='/withdraw' element={<Withdraw/>}/>
          <Route exact path='/accountInfo' element={<AccountInfo/>}/>
          <Route exact path='/allAccountInfo' element={<AllAccountInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
