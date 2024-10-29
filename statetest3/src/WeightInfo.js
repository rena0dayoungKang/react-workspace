function WeightInfo({weight, setWeight}) {
    // const weightChange = (e) => {
    //     setWeight(e.target.value);
    // }
    return(
        <>
            <h1>{weight}</h1>
            <input type="text" onChange={(e) => setWeight(e.target.value)}/>
        </>
    )
}
export default WeightInfo;