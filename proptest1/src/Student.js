function Student({stud}) { 
    //객체로 인자값을 받아올 때는 Students.js 에 있는 <Student stud={s} key={index}/>  
    //코드에서 stud 이름과 인자값 같아야함
    //인자값에 'prop' 대신 '{stud}'를 받아올때는 <td>{props.stud.name}</td> 에서 props를 생략 
    return(
        <tr>
            <td>{stud.name}</td>
            <td>{stud.grade}</td>
            <td>{stud.subject}</td>
        </tr>
    )

}

export default Student;