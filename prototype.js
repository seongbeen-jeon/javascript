/**
 * prototype을 실습 하기 위한 파일입니다.
 */

function Person(name,age){
    this.name = name;
    this.age = age;
}

const person1 = new Person('Bob',32);

console.log(person1.prototype);
//output : undefined

console.log(Person.prototype !== Object.prototype);
//output : true

console.log(person1.__proto__);
console.log(Person.prototype);
// __proto__ 는 인스턴스의 prototype을 의미하므로 위 두 코드는 같은 결과값을 return 합니다.
// output : Person {}

console.log(person1.create);
// create method는 Object.prototype에 속한 속성이 아니기 때문에 상속되지 않습니다.
// output : undefined 
console.log(Object.create);
// [function : create]

var person2 = Object.create(person1);
console.log(person2.__proto__);
//output : Person {name : 'Bob', age : 32}

console.log(person2.__proto__ === person1);
// output : true

console.log(Person.prototype.constructor);