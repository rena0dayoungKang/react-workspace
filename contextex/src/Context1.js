import { useState, createContext } from 'react';
import Context2 from './Context2';

export const UserContext = createContext();

export default function Context1() {
    const [user, setUser] = useState('Micle');
    return (
        <UserContext.Provider value={{user, setUser}}> 
        {/* 하나이상의 데이터가 있는 객체나 함수도 context 로 전달할 수 있음  */}
            <h1>{`Hello ${user}!`}</h1>
            <Context2/>
        </UserContext.Provider>
    )
}