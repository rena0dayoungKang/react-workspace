import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

export const Deposit = () => {
    const [deposit, setDeposit] = useState({ id: '', money: '' });
    const [isModal, setIsModal] = useState(false);
    const [message, setMessage] = useState("");

    const edit = (e) => {
        setDeposit({ ...deposit, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/deposit", deposit)
            .then(res => {
                console.log(res)
                setMessage(`입금 성공 (잔액 : ${res.data})`);
                setIsModal(true);
            })
            .catch(err => {
                console.log(err);
                setMessage(`입금 실패 : ${err.response.data}`);
                setIsModal(true);
            })
    }

    return (
        <div className='route'>
            <h4>입 금</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={6}>
                        <Input type="text" name="id" onChange={edit} value={deposit.id} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="money" sm={3}>입금액</Label>
                    <Col sm={6}>
                        <Input type="text" name="money" onChange={edit} value={deposit.money} />
                    </Col>
                </FormGroup>
                <Button color="primary" onClick={submit}>입 금</Button>
            </Form>

            <Modal isOpen={isModal} toggle={() => setIsModal(!isModal)}>
                <ModalHeader toggle={() => setIsModal(!isModal)}>입금확인</ModalHeader>
                <ModalBody>{message}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setIsModal(!isModal)}>확인</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default Deposit;