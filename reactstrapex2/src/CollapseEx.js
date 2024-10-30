import { useState } from 'react';
import { Collapse, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

export default function CollapseEx() {
    const [collapse, setCollapse] = useState(false);

    return(
        <div>
            <Button color="primary" onClick={() => setCollapse(!collapse)}
                style={{marginBottom:'1rem'}}>Toggle</Button>
            <Collapse isOpen={collapse}>
                <Card>
                    <CardBody>
                        adlkfjalkdjflakjdfldkfjdaklfjldk;kdfja;eiuflkafjdlkfaldkfj;alsdiufwodkfjadkfja;dfk
                    </CardBody>
                </Card>
            </Collapse>
            <br/>
            <Button color="primary" id="toggler" style={{marginBottom:'1rem'}}>Toggle</Button>
            <UncontrolledCollapse toggler='#toggler'>
                <Card>
                    <CardBody>
                        adlkfjalkdjflakjdfldkfjdaklfjldk;kdfja;eiuflkafjdlkfaldkfj;alsdiufwodkfjadkfja;dfk
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>
    )
}