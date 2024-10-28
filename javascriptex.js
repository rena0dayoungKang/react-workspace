let obj = {age:10, name:"hong"};
console.log(obj);
let objstr = JSON.stringify(obj); //key에 쌍따옴표가 붙어있는 JSON형태 
console.log(objstr)
//자바스크립트 언어를 스프링으로 보낼 때 json 형태로 보내야 함. <JSON약속>

console.log(obj.age);
console.log(objstr.age); //undefined 되어 있는 상태

let reobj = JSON.parse(objstr);  //다시 JOSN형태로 Parse해주어야함
console.log(reobj.age);