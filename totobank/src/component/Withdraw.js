import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

export const Withdraw = () => {
    const [withdraw, setWithdraw] = useState({ id: '', money: '' });
    const [isModal, setIsModal] = useState(false);
    const [message, setMessage] = useState("");

    const edit = (e) => {
        setWithdraw({ ...withdraw, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://13.124.129.97:8080/withdraw", withdraw)
            .then(res => {
                console.log(res)
                setMessage(`출금 성공 (잔액 : ${res.data})`);
                setIsModal(true);
            })
            .catch(err => {
                console.log(err);
                setMessage(`출금 실패 : ${err.response.data}`);
                setIsModal(true);
            })
    }


    return (
        <div className='route'>
            <h4>출 금</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={6}>
                        <Input type="text" name="id" onChange={edit} value={withdraw.id}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="money" sm={3}>출금액</Label>
                    <Col sm={6}>
                        <Input type="text" name="money" onChange={edit} value={withdraw.money}/>
                    </Col>
                </FormGroup>
                <Button color="primary" onClick={submit}>출 금</Button>
            </Form>

            <Modal isOpen={isModal} toggle={() => setIsModal(!isModal)}>
                <ModalHeader toggle={() => setIsModal(!isModal)}>출금확인</ModalHeader>
                <ModalBody>{message}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setIsModal(!isModal)}>확인</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default Withdraw;