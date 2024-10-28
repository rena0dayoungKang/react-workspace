//classtest3.js를 function으로 바꿈
//그러나 상속과 관련되서 사용할 때는 Class를 사용함

function Person(name, age) {
    this.name = name;
    age = age;  //지역변수로 생성
    this.info = () => {
        //this.를 안붙이면 지역변수라서 외부에서 사용못함
        return `이름:${name}, 나이:${age}`; 
    }
}

let person = new Person('hong', 20);
console.log(person.info());
console.log(person.name);
console.log(person.age); //undefined로 출력안됨