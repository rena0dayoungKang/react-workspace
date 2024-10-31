import {Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
//default는 함수 function 앞에만 쓸 수 있다.
//App.js에서 import 할 때는 중괄호 없이 바로 함수명으로 import 할 수 있다 
import { useState } from 'react';
import axios from 'axios';

export default function AccountInfo() {
    const [viewInfo, setViewInfo] = useState(false);
    const [acc, setAcc] = useState({id:'', name:'', balance:'', type:'', grade:''});
    const [isModal, setIsModal] = useState(false);
    const [message, setMessage] = useState("");

    const submit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/accountInfo/${acc.id}`)
             .then(res => {
                console.log(res.data);
                setAcc({... res.data});
                setViewInfo(true);
             })
             .catch(err => {
                console.log(err);
                setMessage("계좌조회 시 오류가 발생했습니다");
                setIsModal(true);
             })
    }

    return (
        <div className="route">
            <h5 className='accTitle'>계좌 조회</h5>
            <br/>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" id="id" onChange={(e) => setAcc({...acc, id:e.target.value})}/>
                    </Col>
                </FormGroup>
                <Button onClick={submit}>계좌조회</Button>
            </Form>
            <br/>
            <Form hidden={!viewInfo}>
            <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" id="id" value={acc.id} readOnly/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" id="name" value={acc.name} readOnly/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="balance" sm={3}>잔액</Label>
                    <Col sm={9}>
                        <Input type="text" name="balance" id="balance" readOnly value={acc.balance}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="type" sm={3}>종류</Label>
                    <Col sm={9}>
                        <Input type="text" name="type" id="type" readOnly value={acc.type}/>
                    </Col>
                </FormGroup>
                {
                    acc.type ==="특수계좌" &&
                    <FormGroup row>
                        <Label for="grade" sm={3}>등급</Label>
                        <Col sm={9}>
                            <Input type="grade" name="grade" id="grade" readOnly value={acc.grade}/>
                        </Col>
                    </FormGroup>
                }
            </Form>

            <Modal isOpen={isModal} toggle={() => setIsModal(!isModal)}>
                <ModalHeader toggle={() => setIsModal(!isModal)}>계좌조회 오류</ModalHeader>
                <ModalBody>{message}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setIsModal(!isModal)}>확인</Button>
                </ModalFooter>
            </Modal>


        </div>
    )
}