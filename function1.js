//classtest1.js를 펑션으로 바꿈

function User(name) { //생성자 함수, 대문자로 시작, 반드시 new연산자를 붙여 실행
    this.name = name;
    this.sayHello = () => {
        console.log(`Hello! ${this.name}`)
    }
    //return this; //this가 암묵적으로 반환된다. 생략가능
}

let user = new User('React');
user.sayHello();