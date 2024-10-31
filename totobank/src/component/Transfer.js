import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

export default function Transfer() {
    const [transfer, setTransfer] = useState({sid:'', rid:'', money:''})
    const [isModal, setIsModal] = useState(false);
    const [message, setMessage] = useState("");

    const edit = (e) => {
        setTransfer({...transfer, [e.target.name] : e.target.value});
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/transfer", transfer)
             .then(res => {
                setMessage(`송금 성공 (잔액 : ${res.data}원)`);
                setIsModal(true);
             })
             .catch(err => {
                console.log(err);
                setMessage(`송금 실패 : ${err.response.data}`);
                setIsModal(true);
             })

    }

    return (
        <div className='route'>
            <h5 className='accTitle'>계좌 송금</h5><br/>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={4}>보내는 계좌번호</Label>
                    <Col sm={8}>
                        <Input type="text" name="sid" onChange={edit} value={transfer.sid} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="id" sm={4}>받는 계좌번호</Label>
                    <Col sm={8}>
                        <Input type="text" name="rid" onChange={edit} value={transfer.rid} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="money" sm={4}>송금 금액</Label>
                    <Col sm={8}>
                        <Input type="text" name="money" onChange={edit} value={transfer.money} />
                    </Col>
                </FormGroup>
                <Button color="primary" onClick={submit}>송 금</Button>
            </Form>

            <Modal isOpen={isModal} toggle={() => setIsModal(!isModal)}>
                <ModalHeader toggle={() => setIsModal(!isModal)}>송금확인</ModalHeader>
                <ModalBody>{message}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setIsModal(!isModal)}>확인</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}