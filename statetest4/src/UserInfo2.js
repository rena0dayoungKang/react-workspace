import {useState} from 'react';

function UserInfo2({user}) {
    const [myUser, setMyUser] = useState({...user})

    const userChange = (e) => {
        setMyUser({...myUser, [e.target.name]:e.target.value})
    }
    return(
        <>
            <h1>{myUser.name}</h1>
            <input type="text" name="name" onChange={userChange}/>
            <h1>{myUser.grade}</h1>
            <input type="text" name="grade" onChange={userChange}/>
            <h1>{myUser.weight}</h1>
            <input type="text" name="weight" onChange={userChange}/>
        </>
    )
}
export default UserInfo2;