import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { MakeAccount } from './MakeAccount';
import { Deposit } from './Deposit';
import { Withdraw } from './Withdraw';
import AllAccountInfo from './AllAccountInfo';
import AccountInfo from './AccountInfo';
// import Login from './Login';
// import Join from './Join';
// import Header from './Header'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; // react 최신버전에 맞는 {} 를 사용해야함

function App() {
  const [tab, setTab] = useState("makeAccount"); 

  const toggle = (tabName) => {
    if(tab!==tabName) setTab(tabName);
  }

  return (
    <div style={{margin:"0 auto", width:"1500px"}}>
      <i><h5>kosta bank</h5></i>
      <Nav tabs>
        <NavItem>
          <NavLink onClick={() => { toggle('makeAccount'); }}
            className={tab === 'makeAccount' && 'active'}>계좌개설</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => {toggle('deposit'); }}
            className={tab === 'deposit' && 'active'}>입금</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => {toggle('withdraw'); }}
            className={tab === 'withdraw' && 'active'}>출금</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => {toggle('accountInfo'); }}
            className={tab === 'accountInfo' && 'active'}>계좌조회</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => {toggle('allAccountInfo'); }}
            className={tab === 'allAccountInfo' && 'active'}>전체계좌조회</NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={tab}>
        <TabPane tabId="makeAccount"><MakeAccount/></TabPane>
        <TabPane tabId="deposit"><Deposit/></TabPane>
        <TabPane tabId="withdraw"><Withdraw/></TabPane>
        <TabPane tabId="accountInfo"><AccountInfo/></TabPane>
        <TabPane tabId="allAccountInfo"><AllAccountInfo/></TabPane>
      </TabContent>
    </div>
  );
}

export default App;
