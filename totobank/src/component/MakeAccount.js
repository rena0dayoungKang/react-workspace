import { Col, Button, ButtonGroup, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

export const MakeAccount = () => {
    const [acc, setAcc] = useState({ id: '', name: '', balance: 0, type: '일반계좌', grade: '' })
    const [modal, setModal] = useState(false);
    const [isBefore, setIsBefore] = useState(false);
    const [isCheckId, setIsCheckId] = useState(false);
    const [message, setMessage] = useState('');

    const editAcc = (e) => {
        setAcc({ ...acc, [e.target.name]: e.target.value });
    }

    const editAccId = (e) => {
        editAcc(e);
        setIsCheckId(false);
    }

    const confirm = (e) => {
        e.preventDefault();

        //계좌번호 중복확인을 하지 않으면 개설을 하지 못함
        if (!isCheckId) {
            setIsBefore(false);
            setMessage("계좌번호 중복을 확인하세요");
        } else {
            setIsBefore(true);
            setMessage("계좌를 개설하시겠습니까?");
        }

        setModal(true);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(acc);
        setIsBefore(false);
        // 백엔드와 연결하는 axios
        axios.post("http://localhost:8080/makeAccount", acc)
            .then(res => {
                console.log(res);
                if (res.data === true) {
                    setModal(true);
                    setMessage('계좌가 개설되었습니다.')
                    setAcc({ id: '', name: '', balance: 0, type: '일반계좌', grade: '' }) // 계좌 개설 후 보이는 화면을 초기화
                }
            })
            .catch(err => {
                console.log(err)
                setMessage("계좌개설을 실패했습니다.")
            })
    }

    const checkAccId = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/checkAccId/${acc.id}`) //백틱임에 주의
            .then(res => {
                setModal(true);
                if (res.data === true) {
                    setMessage("사용중인 계좌번호 입니다.");
                } else {
                    setMessage("사용 가능한 계좌번호 입니다.");
                    setIsCheckId(true);
                }
            })
            .catch(err => {
                console.log(err);
                setMessage("계좌번호 중복 확인중 오류가 발생했습니다.")
            })
    }

    return (
        <div className="route">
            <h5 className="accTitle">계좌 개설</h5>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={6}>
                        <Input type="text" name="id" value={acc.id} onChange={editAccId} />
                    </Col>
                    <Col sm={3}>
                        <Button onClick={checkAccId}>중복</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" value={acc.name} onChange={editAcc} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="balance" sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type="text" name="balance" value={acc.balance} onChange={editAcc} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="type" sm={3}>종류</Label>
                    <Col sm={9} >
                        <ButtonGroup>
                            <Button color="primary" onClick={() => setAcc({ ...acc, type: '일반계좌', grade: '' })} active={acc.type === '일반계좌'}>일반계좌</Button>
                            <Button color="primary" onClick={() => setAcc({ ...acc, type: '특수계좌' })} active={acc.type === '특수계좌'}>특수계좌</Button>
                        </ButtonGroup>
                        {/* <Input type="radio" id="type" value="일반계좌" name="type"/>&nbsp;일반계좌&nbsp;&nbsp;
                        <Input type="radio" id="type" value="특수계좌" name="type"/>&nbsp;특수계좌&nbsp;&nbsp; */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="grade" sm={3}>등급</Label>
                    <Col sm={9}>
                        <Input type="select" name="grade" onChange={editAcc} value={acc.grade} disabled={acc.type === "일반계좌"}>
                            <option value="">선택하세요</option>
                            <option value="vip">VIP</option>
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                            <option value="normal">Normal</option>
                        </Input>
                    </Col>
                </FormGroup>
                <Button color="primary" onClick={confirm}>계좌개설</Button>
            </Form>

            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>계좌개설</ModalHeader>
                <ModalBody>
                    <div>
                        {/* 계좌에 대한 정보를 모두 모달에 보여주기 */}
                        {isBefore && <Table>
                            <tbody>
                                <tr><th>계좌번호</th><td>{acc.id}</td></tr>
                                <tr><th>이름</th><td>{acc.name}</td></tr>
                                <tr><th>입금액</th><td>{acc.balance}</td></tr>
                                <tr><th>종류</th><td>{acc.type}</td></tr>
                                {
                                    acc.type === "특수계좌" && <tr><th>등급</th><td>{acc.grade}</td></tr>
                                    // 리액트에서 많이 쓰이는 &&연산! 
                                }
                            </tbody>
                        </Table>
                        }
                    </div>
                    {message}
                </ModalBody>
                <ModalFooter>
                    {isBefore === true ?
                        <div>
                            <Button color="primary" onClick={submit}>확인</Button> &nbsp;&nbsp;
                            <Button color="secondary" onClick={() => setModal(!modal)}>취소</Button>
                        </div>
                        : <Button color="primary" onClick={() => setModal(!modal)}>확인</Button>
                    }

                </ModalFooter>
            </Modal>
        </div>
    )
}

export default MakeAccount;