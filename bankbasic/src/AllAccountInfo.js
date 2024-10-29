import {Table} from 'reactstrap';

export default function AllAccountInfo() {
    const accs = [
        {id:'10001', name:'홍길동', balance:1000000, type:'일반계좌', grade:''},
        {id:'10002', name:'송길동', balance:2000000, type:'특수계좌', grade:'VIP'},
        {id:'10003', name:'하길동', balance:3000000, type:'일반계좌', grade:''},
        {id:'10004', name:'구길동', balance:4000000, type:'특수계좌', grade:'Gold'},
        {id:'10005', name:'차길동', balance:5000000, type:'일반계좌', grade:'Silver'},
    ];
    return (
        <div className='route'>
            <h4>전체 계좌 조회</h4>
            <br/>
            <Table bordered style={{width:'800px', margin:'0 auto'}}>
                {/* 대문자 Table은 reactstrap에서 만들어 놓은 것 */}
                <tbody>
                    {/* 소문자는 그냥 html 태그임 */}
                    <tr>
                        <th>계좌번호</th>
                        <th>이름</th>
                        <th>잔액</th>
                        <th>종류</th>
                        <th>등급</th>
                    </tr>
                    {
                        accs.map(acc => (
                            //map이나 filter 는 객체를 return 해주어야 하는데, {} 중괄호가 있으면 자동리턴이 안됨
                            //소괄호를 쓰거나 return을 명시적으로 <tr>태그 앞에 붙여줄수있음
                            <tr key={acc.id}>
                                <td>{acc.id}</td>
                                <td>{acc.name}</td>
                                <td>{acc.balance}</td>
                                <td>{acc.type}</td>
                                <td>{acc.grade}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}