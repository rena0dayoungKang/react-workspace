import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export const Deposit = () => {
    return (
        <div className='route'>
            <h4>입 금</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={6}>
                        <Input type="text" name="id"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="money" sm={3}>입금액</Label>
                    <Col sm={6}>
                        <Input type="text" name="money"/>
                    </Col>
                </FormGroup>
                <Button color="primary">입 금</Button>
            </Form>
        </div>
    )
}

export default Deposit;