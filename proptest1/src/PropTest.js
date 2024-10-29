import React, {Component} from 'react';

class PropTest extends Component {
    constructor(props) {
        super(props);
        this.name = this.props.name; //props : 부모로부터 가져올 때 사용하는 매개체
        this.age = this.props.age;
    }

    render() {    
        return (
            <>
                <h1>{this.name}</h1>
                <h1>{this.age}</h1>
            </>
        )
    }
}
export default PropTest;