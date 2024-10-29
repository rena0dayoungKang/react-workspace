//props= {name:'song', age:30, nick:'송송이'}

//특정 객체를 변수에 담는 방법 
// let {name, age, nick} = props;
function Person({name, age, nick}) {
    return(
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{nick}</h2>
        </div>
    )
}
export default Person;