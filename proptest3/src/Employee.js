function Employee({emps}) {
    return(
    <table border="1">
        <tbody>
            <tr>
                <th>사번</th>
                <th>이름</th>
                <th>부서번호</th>
            </tr>
            {
                emps.map(i => 
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.dept}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
    )
}
export default Employee;