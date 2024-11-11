import { Table, Input, Button, Label } from "reactstrap";
import { useState } from "react";
import axios from "axios";
import { useSetAtom } from "jotai";
import { tokenAtom } from "./atoms";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [member, setMember] = useState({ username: "", password: "" });
    const setToken = useSetAtom(tokenAtom);

    const divStyle = {
        margin: "0 auto",
        width: "400px",
        border: "1px solid lightgray",
        borderRadius: "7px",
        padding: "10px",
    };

    const navigate = useNavigate();

    const edit = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const redirectUri = "http://localhost:8080/oauth2/callback/kakao";
    const restAuthKey = "d7025e5c18416e2e0239db5affbce95f";
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${restAuthKey}&redirect_uri=${redirectUri}&response_type=code`;

    const redirect_uri = "http://localhost:8080/oauth2/callback/naver";
    const restAuth_key = "nQOdhXOX9jDuuJZSwGsv";
    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${restAuth_key}&redirect_uri=${redirect_uri}&response_type=code&state=1357`;

    const submit = (e) => {
        let formData = new FormData();
        formData.append("username", member.username);
        formData.append("password", member.password);
        axios
            .post("http://localhost:8080/login", formData)
            .then((res) => {
                console.log(res);
                console.log(res.headers.authorization);
                setToken(res.headers.authorization); //토큰저장
                navigate("/user");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const kakao = () => {};

    return (
        <>
            <div className="header-text">로그인</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td>
                                <Label for="username">아이디</Label>
                            </td>
                            <td>
                                <Input
                                    type="text"
                                    name="username"
                                    id="username"
                                    onChange={edit}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label for="password">비밀번호</Label>
                            </td>
                            <td>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={edit}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Button
                                    color="primary"
                                    style={{ width: "100%" }}
                                    onClick={submit}
                                >
                                    로그인
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label for="kakao">카카오로그인</Label>
                            </td>
                            <td>
                                <a href={kakaoAuthUrl}>
                                    <img
                                        src="/kakao_login_medium_narrow.png"
                                        alt=""
                                        width="200px"
                                    />
                                </a>
                            </td>
                            <td>
                                <Label for="naver">네이버로그인</Label>
                            </td>
                            <td>
                                <a href={naverAuthUrl}>
                                    <img
                                        src="/naver_login.png"
                                        alt=""
                                        width="200px"
                                    />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Login;
