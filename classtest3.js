class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `이름:${this.name}, 나이:${this.age}`;
    }
}

//상속도 된다 
class Student extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    info() {
        return super.info() + `, 학과: ${this.subject}`;
    }
}


let person = new Person('hong', 20);
console.log(person.info());

let student = new Student('song', 30, '축구');
console.log(student.info());
