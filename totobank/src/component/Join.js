import { Button, Col, FormGroup, Label, Input, Form } from "reactstrap";
import { useState } from 'react';
import axios from "axios";

export default function Join() {
    // const [member, setMember] =
    //     useState({
    //         id: '', name: '', password: '', nickname: '', postCode: '',
    //         address: '', detailAddress: '',extraAddress:'', email: ''
    //     });

    const [member, setMember] =
        useState({
            id: '', name: '', password: '', nickname: '', address: '', email: ''
        });

    const edit = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        axios.post("http://localhost:8080/join", member)
            .then(res => {
                console.log(res);
                window.location.href = "/login";
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }

    // const daumAddress = (e) => {
    //     new daum.Postcode({
    //         oncomplete: function (data) {
    //             // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

    //             // 각 주소의 노출 규칙에 따라 주소를 조합한다.
    //             // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
    //             var addr = ''; // 주소 변수
    //             var extraAddr = ''; // 참고항목 변수

    //             //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
    //             if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
    //                 addr = data.roadAddress;
    //             } else { // 사용자가 지번 주소를 선택했을 경우(J)
    //                 addr = data.jibunAddress;
    //             }

    //             // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
    //             if (data.userSelectedType === 'R') {
    //                 // 법정동명이 있을 경우 추가한다. (법정리는 제외)
    //                 // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
    //                 if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
    //                     extraAddr += data.bname;
    //                 }
    //                 // 건물명이 있고, 공동주택일 경우 추가한다.
    //                 if (data.buildingName !== '' && data.apartment === 'Y') {
    //                     extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
    //                 }

    //                 // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
    //                 if(extraAddr !== ''){
    //                     extraAddr = ' (' + extraAddr + ')';
    //                 }

    //             } else {
    //                 document.getElementById("sample6_extraAddress").value = '';
    //             }

    //             // 우편번호와 주소 정보를 해당 필드에 넣는다.
    //             setMember({ ...member, postCode: data.zonecode });
    //             setMember({ ...member, address: data.addr });
    //         }
    //     }).open();
    // }

    return (
        <Form>
            <div className="route">
                <h5 className="accTitle">회원가입</h5><br />
                <FormGroup row>
                    <Label for="id" sm={3}>아이디</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" onChange={edit}></Input>
                    </Col>
                    <Col sm={3}>
                        <Button>중복</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" onChange={edit}></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={3}>비밀번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="password" onChange={edit}></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="nickname" sm={3}>닉네임</Label>
                    <Col sm={9}>
                        <Input type="text" name="nickname" onChange={edit}></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="address" sm={3}>주소</Label>
                    <Col sm={9}>
                        <Input type="text" name="address" onChange={edit} />
                        {/* <Input type="button" onclick={daumAddress} value="우편번호 찾기" readOnly /><br />
                    <Input type="text" name="address" value={member.address} placeholder="주소" readOnly /><br />
                    <input type="text" name="detailAddress" value={member.detailAddress} placeholder="상세주소" onChange={edit} />
                    <input type="text" name="extraAddress" id="extraAddress" placeholder="참고항목"/> */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={3}>이메일</Label>
                    <Col sm={9}>
                        <Input type="text" name="email" onChange={edit}></Input>
                    </Col>
                </FormGroup>
                <Button color="primary" onClick={submit}>회원가입</Button>
            </div>
        </Form>
    )
}