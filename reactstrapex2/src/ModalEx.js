import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ModalEx() {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    return (
        <>
            <Button color="primary" onClick={toggle}>Modal Test</Button>
            <Modal isOpen={modal} toggle={toggle}> {/*  toggle={toggle} 이 있어야 모달 밖을 클릭했을때 모달이 닫힘 */}
                <ModalHeader toggle={toggle}>계좌 개설</ModalHeader>
                <ModalBody>
                    계좌를 개설하시겠습니까?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>개설</Button>&nbsp;
                    <Button color="secondary" onClick={toggle}>취소</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}