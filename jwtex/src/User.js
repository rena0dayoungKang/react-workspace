import { useState, useEffect } from "react";
import { Table, Label, Input } from "reactstrap";
import axios from "axios";
import { useAtom } from "jotai";
import { tokenAtom } from "./atoms";

const User = () => {
    const [member, setMember] = useState();
    const [token, setToken] = useAtom(tokenAtom);

    const divStyle = {
        margin: "0 auto",
        width: "400px",
        border: "1px solid lightgray",
        borderRadius: "7px",
        padding: "10px",
    };

    useEffect(() => {
        request(token)
    }, []);

    const request = (ptoken) => {
        axios
            .get("http://localhost:8080/user", {
                headers: { Authorization: ptoken },
            }) //백엔드가 토큰을 가지고 알아서 정보를 가져옴
            .then((res) => {
                console.log(res.data);

                //토큰이 만료되어 백엔드에서 토큰을 다시 만들어줌, 받은 토큰을 갱신하고 사용자 정보를 다시 요청해야 함
                if (res.data === "token") {
                    setToken(res.headers.authorization);
                    request(res.headers.authorization);
                } else {
                    setMember({ ...res.data });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="header-text">회원정보</div>
            {member != null && (
                <div style={divStyle}>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <td>
                                    <Label>username</Label>
                                </td>
                                <td>
                                    <Input
                                        type="text"
                                        readOnly
                                        value={member && member.username}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Label>email</Label>
                                </td>
                                <td>
                                    <Input
                                        type="text"
                                        readOnly
                                        value={member && member.email}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            )}
        </>
    );
};
export default User;
