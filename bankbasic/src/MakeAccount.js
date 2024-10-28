import {Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export const MakeAccount = () => {
    return (
        <div className="route">
            <h4>계좌 개설</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={6}>
                        <Input type="text" name="id"/>
                    </Col>
                    <Col sm={3}>
                        <Button color="success">중복</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="balance" sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type="text" name="balance"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="type" sm={3}>종류</Label>
                    <Col sm={9}>
                        <Input type="radio" id="type" value="일반계좌" name="type"/>&nbsp;일반계좌&nbsp;&nbsp;
                        <Input type="radio" id="type" value="특수계좌" name="type"/>&nbsp;특수계좌&nbsp;&nbsp;
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="grade" sm={3}>등급</Label>
                    <Col sm={9}>
                        <Input type="select" id="grade">
                            <option value="">선택하세요</option>
                            <option value="vip">VIP</option>
                            <option value="gold">Gold</option>
                            <option value="silver">Silver</option>
                            <option value="normal">Normal</option>
                        </Input>
                    </Col>
                </FormGroup>
                <Button color="primary">계좌개설</Button>
            </Form>

            <Modal isOpen={false}>
                <ModalHeader>{}</ModalHeader>
                <ModalBody>{}</ModalBody>
                <ModalFooter>
                    <Button color="primary">확인</Button>
                    <Button color="secondary">취소</Button>
                </ModalFooter>
            </Modal>
        </div>
    )    
}