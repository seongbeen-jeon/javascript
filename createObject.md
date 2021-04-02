# New Operator

```new```연산자는 사용자 정의 객체 or 내장 객체의 인스턴스를 생성합니다.

```javascript
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}

const mycar = new Car('Eagle', 'Talon TSi', 1993);

console.log(myCar);
// output : Car { make: 'Eagle', model: 'Talon TSi', year: 1993 }
```

### 사용자 정의 객체 생성의 단계
1. 함수를 작성하여 객체 타입을 정의한다. ex) function MyObj(){...}
2. new 연산자로 객체의 인스턴스를 생성한다. ex) var myObj1= new MyObj(); 

new 연산자가 실행 될 때 다음과 같은 일이 발생 합니다.

1. MyObj.prototype을 상속하는 새로운 객체가 생성됩니다.
2. 새로운 객체에 바인드된 this와 new 연산자의 parameter와 함께 생성자 함수가 호출됩니다.
3. 생성자 함수에 의해 리턴된 객체는 전체 new의 결과가 됩니다.


### 객체에 속성 추가

객체가 정의되거나 생성된 이후 언제든 속성을 추가 할 수 있습니다.

- 인스턴스에 속성을 추가 : 
```javascript
    myOjb1.name = '붕붕이';
```
이러한 방식으로 속성을 추가 하면 myObj1 이란 객체에만 속성이 추가됩니다. 같은 객체 타입을 사용하는 객체에 속성을 추가 하려면 prototype 속성을 사용해야 합니다.

- 객체 타입에 속성 추가 : 
```javascript
function Car(){}
car1 = new Car();
car2 = new Car();

console.log(car1.color);
//output : undefined

Car.property.color = "original color";
car1.__proto__.color = "original color";
//car1, car2와 이후에 Car 타입으로 생성될 인스턴스 모두에 적용

car1.color = "red";
//car1 인스턴스에만 덮어 쓰입니다.

console.log(car1.color);
//output : red
console.log(car2.color);
//output : original color
```

# Object.create() method

Object.create() 메서드는 지정된 프로토타입 객체 및 속성을 갖는 새 객체를 만듭니다.
Object.create()는 ES6 이상부터 지원됩니다.

*syntax*
```javascript
Object.create(proto[,proertuesObject]);
//proto가 null이거나 객체가 아닐 경우 TypeError 예외가 발생한다.
```

New 연산자가 있음에도 Object.create가 있는 이유는 New 연산자는 상속을 할 때 내부적으로 문제가 발생합니다. 그러한 문제를 해결한 방법이 Object.create()입니다.

## Reference

[MDN Web Docs - New Operator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new)

[속싶은 자바스크립트 강좌 상속, NEW와 Object.create의 차이](https://unikys.tistory.com/320)
