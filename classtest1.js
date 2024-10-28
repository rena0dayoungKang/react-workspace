class User {
    //자바스크립트는 컴파일 언어가 아니고 스크립트 언어. 
    //컴파일 언어 :  자바는 컴파일하고 나면 .class 파일이 생김
    //스크립트 언어 : 한줄한줄씩 바로 실행 (= 인터프리터언어)
    //                this나 생성자를 수동으로 만들어서 가지고 다녀야 함
    constructor(name) {
        this.name = name;
    } 

    sayHello() {
        console.log(`Hello! ${this.name}`); // ' 아니고 `
    }
}

let user = new User('hong');
user.sayHello();

//위 코드를 function으로 바꿀 수 있음 