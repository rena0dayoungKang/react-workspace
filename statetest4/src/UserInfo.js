function UserInfo({user, setUser}) {
    const userChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }
    return(
        <>
            <h1>{user.name}</h1>
            <input type="text" name="name" onChange={userChange}/>
            <h1>{user.grade}</h1>
            <input type="text" name="grade" onChange={userChange}/>
            <h1>{user.weight}</h1>
            <input type="text" name="weight" onChange={userChange}/>
        </>
    )
}
export default UserInfo;