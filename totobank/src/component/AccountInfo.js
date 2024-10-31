import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
//default는 함수 function 앞에만 쓸 수 있다.
//App.js에서 import 할 때는 중괄호 없이 바로 함수명으로 import 할 수 있다 
export default function AccountInfo() {
    return (
        <div className="route">
            <h5>계좌 조회</h5>
            <br/>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" id="id" readOnly/>
                    </Col>
                </FormGroup>
                <Button>계좌조회</Button>
            </Form>
            <br/>
            <Form hidden>
            <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" id="id" readOnly/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" id="name" readOnly/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="balance" sm={3}>잔액</Label>
                    <Col sm={9}>
                        <Input type="text" name="balance" id="balance" readOnly/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="type" sm={3}>종류</Label>
                    <Col sm={9}>
                        <Input type="text" name="type" id="type" readOnly/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="grade" sm={3}>등급</Label>
                    <Col sm={9}>
                        <Input type="grade" name="grade" id="grade" readOnly/>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}