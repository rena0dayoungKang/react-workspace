import Department from './Department';
//Employee.js의 자식 Department 호출
function Employee({ emps, depts }) {
    return (
        <>
            <Department dept={depts} />
            <table border="1">
                <tbody>
                    <tr>
                        <th>사번</th>
                        <th>이름</th>
                        <th>부서번호</th>
                        <th>부서명</th>
                    </tr>
                    {
                        emps.map(e =>
                            <tr key={e.id}>
                                <th>{e.id}</th>
                                <th>{e.name}</th>
                                <th>{e.dept}</th>
                                <td>
                                    {depts.find((d) => d.id == e.dept).name}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
export default Employee;