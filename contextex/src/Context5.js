import { useContext } from 'react';
import { UserContext } from './Context1';

export default function Context5() {
    console.log(useContext(UserContext));
    const {user,setUser} = useContext(UserContext);
    return (
        <>
            <h1>Context5</h1>
            <h2>{`Hello, ${user} again!`}</h2>
            <input type="text" onChange={(e) => setUser(e.target.value)}/>
        </>
    )
}