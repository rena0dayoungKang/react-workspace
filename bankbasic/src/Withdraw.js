import {Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export const Withdraw = () => {
    return (
        <div className='route'>
            <h4>출 금</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={6}>
                        <Input type="text" name="id"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="money" sm={3}>출금액</Label>
                    <Col sm={6}>
                        <Input type="text" name="money"/>
                    </Col>
                </FormGroup>
                <Button color="primary">출 금</Button>
            </Form>
        </div>
    )
}