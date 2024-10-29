import React, {Component} from 'react';
//리액트 컴포넌트는 HTML, CSS, Data(useState) 로 이루어져 있다. 

// class MyComponent extends Component {
//     render() {                                       //React의 Component에 있는 메서드 render()
//         return (
//             <h2>[This is imported Component ]</h2>   //render()함수에서 return 되는 jsx 
//         ) 
//     }
// }

function MyComponent() {    //생성자함수
    return (
        <h2>[This is imported Component ]</h2>
    )
}

export default MyComponent;