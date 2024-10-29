import React, {Component} from 'react';

class MyComponent1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'hong',
            age:20
        }
    }

    changeName = () => {
        // 화살표 함수는 this가 없기 때문에 밖에 있는 this를 참조함
        
        //this.person.name='song;'
        //console.log(this.person.name); //콘솔에는 song으로 바뀌었지만 다시 렌더링되지는 않음
        
        this.setState({name:'song'});

        // this.state.name = 'song';
        // this.forceUpdate();
    }

    render() {
        return(
            <>
                <h1>Hello React</h1>
                <span>{this.state.name}</span>
                <br/>
                <span>{this.state.age}</span>
                <br/>
                <button onClick={this.changeName}>변경</button>
            </>
        )
    }
}

export default MyComponent1;