import { Button, Col, FormGroup, Label, Input, Form, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useState } from 'react';
import axios from "axios";
import DaumPostCode from 'react-daum-postcode';

export default function Join() {
    const [member, setMember] =
        useState({
            id: '', name: '', password: '', nickname: '', postCode: '',
            address: '', detailAddress: '', extraAddress: '', email: ''
        });

    const [isOpen, setIsOpen] = useState(false);
    const [isCheckId, setIsCheckId] = useState(false);

    const edit = (e) => {
        setMember({
            ...member, [e.target.name]: e.target.value
        });
    }

    const editId = (e) => {
        setIsCheckId(false);
        edit(e);
    }

    const submit = (e) => {
        if (!isCheckId) {
            alert("아이디 중복을 체크하세요.");
            return;
        }
        const smember = {
            id: member.id, name: member.name, password: member.password,
            nickname: member.nickname, email: member.email,
            address: member.address + ' ' + member.extraAddress + ' ' + member.detailAddress
        }

        axios.post("http://localhost:8080/join", smember)
            .then(res => {
                console.log(res);
                window.location.href = "/login";
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }


    const onCompletePost = (data) => {
        console.log(data);
        const { address, zoneCode, bname, buildingName } = data;
        setMember({
            ...member, postCode: zoneCode, address: address,
            extraAddress: bname + buildingName !== '' && buildingName
        });
    }

    const checkId = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/checkMemId/${member.id}`)
            .then(res => {
                if (res.data === true) {
                    alert("사용중인 아이디입니다.");
                } else {
                    alert("사용 가능한 아이디 입니다.");
                    setIsCheckId(true);
                }
            })
            .catch(err => {
                console.log(err);
                alert(err.response.data);
            })
    }

    return (
        <div className="route">
            <h5 className="accTitle">회원가입</h5><br />
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>아이디</Label>
                    <Col sm={6}>
                        <Input type="text" name="id" onChange={edit}></Input>
                    </Col>
                    <Col sm={3}>
                        <Button onClick={checkId}>중복</Button>
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
                    <Col sm={6}>
                        <Input type="text" value={member.postCode} readOnly />
                    </Col>
                    <Col sm={3}>
                        <Button onClick={() => setIsOpen(!isOpen)}>주소찾기</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={3} />
                    <Col sm={9}>
                        <Input type="text" value={member.address} readOnly></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={3} />
                    <Col sm={9}>
                        <Input type="text" value={member.extraAddress} readOnly></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={3} />
                    <Col sm={9}>
                        <Input type="text" onChange={edit}></Input>
                    </Col>
                </FormGroup>
                <Button color="primary" onClick={submit}>회원가입</Button>
            </Form>

            <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
                <ModalHeader toggle={() => setIsOpen(!isOpen)}>주소찾기</ModalHeader>
                <ModalBody>
                    {
                        isOpen &&
                        <div>
                            <DaumPostCode onComplete={onCompletePost} onClose={() => setIsOpen(false)} />
                        </div>
                    }
                </ModalBody>
            </Modal>

        </div>
    )
}