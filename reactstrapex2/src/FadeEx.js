import { useState } from 'react';
import { Button, Fade } from 'reactstrap';
export default function FadeEx() {
    const [fade, setFade] = useState(false);
    return(
        <div>
            <Button color="primary" onClick={() => setFade(!fade)}>Toggle Fade</Button>
            <Fade in={fade} tag="div" className="mt-3">
                This content will fade in and out as the button is pressed
            </Fade>
        </div>
    )
}