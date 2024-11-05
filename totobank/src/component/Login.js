import { Button, Col, FormGroup, Label, Input } from "reactstrap";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";

export default function Login() {
    const [login, setLogin] = useState({ id: '', password: '' });
    const dispatch = useDispatch();

    const edit = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        axios.post("http://localhost:8080/login", login)
            .then(res => {
                console.log(res.data);
                dispatch({type:'USER', data:{...res.data}});
                // alert("로그인 성공");
                window.location.href = "/makeAccount";
            })
            .catch(err => {
                console.log(err);
                alert("로그인 실패");
            })
    }

    return (
        <div className="route">
            <br /><h5 className="accTitle">로그인</h5><br />
            <FormGroup row>
                <Label for="id" sm={3}>아이디</Label>
                <Col sm={9}>
                    <Input type="text" name="id" onChange={edit}></Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="password" sm={3}>비밀번호</Label>
                <Col sm={9}>
                    <Input type="password" name="password" onChange={edit}></Input>
                </Col>
            </FormGroup>
            <Button color="primary" onClick={submit}>로그인</Button>
        </div>
    )
}