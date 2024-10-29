import React, {Component} from 'react';

class PropTest2 extends Component {
    constructor(props) {
        super(props);
        this.per = props.per;
    }

    render() {
        return(
            <div>
                <h1>{this.per.name}</h1>
                <h1>{this.per.age}</h1>
                <h1>{this.per.nick}</h1>
            </div>
        )
    }
}

export default PropTest2;