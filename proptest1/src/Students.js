import Student from "./Student";
function Students({studs}) {
    return(
        <>
            <table border="1">
                <tbody>    
                    <tr>
                        <th>이름</th>
                        <th>학년</th>
                        <th>전공</th>
                    </tr>
                        {
                            studs.map((s, index) => {
                                return(
                                    // <tr key={index}>
                                    //     <td>{s.name}</td>
                                    //     <td>{s.grade}</td>
                                    //     <td>{s.subject}</td>
                                    // </tr>
                                    <Student stud={s} key={index}/>            
                                )
                            })
                        }
                </tbody>

            </table>
        </>
    )
    //{students} 를 인자로 가져올 때는 return 에 중괄호 없음
}

export default Students;