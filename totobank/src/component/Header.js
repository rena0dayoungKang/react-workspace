import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, ListGroup, ListGroupItem } from 'reactstrap';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <Navbar color="faded" style={collapsed === true ? { backgroundColor: "#ffef6b" } : { backgroundColor: "white" }}>
                <NavbarBrand href="/" className="mr-auto"><i>toto<b>bank</b></i></NavbarBrand>
                <NavbarToggler onClick={() => setCollapsed(!collapsed)} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <ListGroup>
                        <ListGroupItem tag="a" href="/makeAccount">계좌개설</ListGroupItem>
                        <ListGroupItem tag="a" href="/deposit">입금</ListGroupItem>
                        <ListGroupItem tag="a" href="/withdraw">출금</ListGroupItem>
                        <ListGroupItem tag="a" href="/accountInfo">계좌조회</ListGroupItem>
                        <ListGroupItem tag="a" href="/allAccountInfo">전체계좌조회</ListGroupItem>
                    </ListGroup>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Header; 