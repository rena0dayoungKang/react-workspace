import { useState } from 'react';
import { Tooltip } from 'reactstrap';

export default function TooltipEx() {
    const[tooltipOpen, setTooltipOpen] = useState(false);

    return(
        <>
            <span id="llm"><i>LLM</i></span>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="llm" 
                     toggle={() => setTooltipOpen(!tooltipOpen)}>
                    dlfskjdlkjflasdkfjdflakdjfa;ldkfjaldkfjldkfjla;skdjfl;akdjf
            </Tooltip>
        </>
    )
}