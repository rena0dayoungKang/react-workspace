import { Table, Label, Input, Button } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { url } from '../config';

const Join = () => {
    const [member, setMember] = useState({
        id: '', name: '', password: '', email: '', profileImage: '',
        address: '', nickname: ''
    });

    const divStyle = {
        margin: "0 auto", width: '400px', border: "1px solid lightgray",
        borderRadius: '7px', padding: '10px'
    };
    const edit = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    }

    const submit = (e) => {

    }

    return (
        <>
            <div className='header-text'>회원가입</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="id">아이디</Label></td>
                            <td><Input type="text" name="id" id="id" onChange={edit} /></td>
                        </tr>
                        <tr>
                            <td><Label for="name">이름</Label></td>
                            <td><Input type="text" name="name" id="name" onChange={edit} /></td>
                        </tr>
                        <tr>
                            <td><Label for="password">비밀번호</Label></td>
                            <td><Input type="text" name="password" id="password" onChange={edit} /></td>
                        </tr>
                        <tr>
                            <td><Label for="email">이메일</Label></td>
                            <td><Input type="text" name="email" id="email" onChange={edit} /></td>
                        </tr>
                        <tr>
                            <td><Label for="address">주소</Label></td>
                            <td><Input type="text" name="address" id="address" onChange={edit} /></td>
                        </tr>
                        <tr>
                            <td><Label>프로필이미지</Label></td>
                            <td>
                                <img src="/plus.png" width="100px" height="100px" alt=""
                                    onClick={() => document.getElementById('file').click()} /><br /><br />
                                <Input type="file" name="file" id="file" onChange={edit} hidden accept='image/*' />
                            </td>
                        </tr>
                        <tr>
                            <td><Label for="nickname">닉네임</Label></td>
                            <td><Input type="text" name="nickname" id="nickname" onChange={edit} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Button color='primary' style={{width:"100%"}} onClick={submit}>회원가입</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )

}

export default Join;