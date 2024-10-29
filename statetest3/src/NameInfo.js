function NameInfo({name, setName}) {
    const nameChange = (e) => {
        setName(e.target.value);
    }
    return(
        <>
            <h1>{name}</h1>
            <input type="text" onChange={nameChange}/>
        </>
    )
}
export default NameInfo;