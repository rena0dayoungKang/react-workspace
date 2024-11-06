import {Table, Label, Input, Button} from 'reactstrap';
import {useState} from 'react';
import axios from 'axios';
import {url} from '../config';
import { useNavigate } from 'react-router';
import { useAtom } from 'jotai/react';
import { userAtom } from '../atoms';

const Login = () => {
    const [member, setMember] = useState({id:'', password:''});
    const [user, setUser] = useAtom(userAtom);
    const divStyle = {margin:"0 auto",width:'400px',border:"1px solid lightgray",borderRadius:'7px',padding:'10px'};
    const navigate = useNavigate();

    const edit = (e) => {
        setMember({...member, [e.target.name]:e.target.value});
    }

    const submit = (e) => {
        axios.post(`${url}/login`, member)
            .then(res=> {
                console.log(res.data);
                setUser({...res.data})
                navigate("/")
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return(
        <>
            <div className="header-text">로그인</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="id">아이디</Label></td>
                            <td><Input type="text" name="id" id="id" onChange={edit}/></td>
                        </tr>
                        <tr>
                            <td><Label for="password">비밀번호</Label></td>
                            <td><Input type="password" name="password" id="password" onChange={edit}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Button color="primary" style={{width:"100%"}} onClick={submit}>로그인</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Login;