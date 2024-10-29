function GradeInfo({grade, setGrade}) {
    // const gradeChange = (e) => {
    //     setGrade(e.target.value);
    // }
    return(
        <>
            <h1>{grade}</h1>
            <input type="text" onInput={(e) => setGrade(e.target.value)}/>
        </>
    )
}
export default GradeInfo;