import {Table} from 'reactstrap';

export default function AllAccountInfo() {
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
                </tbody>
            </Table>
        </div>
    )
}