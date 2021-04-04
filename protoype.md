# Prototype

Javascript에서는 객체를 상속하기 위하여 프로토타입이라는 방식을 사용합니다.

JavaScript는 **프로토타입 기반 언어(prototype-based language)**입니다. 모든 객체들이 상속을 받기 위한 템플릿으로써 **프로토 타입 객체(prototype object)**를 가진다는 의미 입니다.

프로토 타입 객체도 또 다시 상위 프로토 타입 객체로부터 상속을 받을 수 있는데 이를 **프로토타입 체인(prototype chain)**이라 부릅니다.

정확히 말하자면 상속되는 속성과 메소드들은 각 객체가 아니라 객체의 생성자의 **prototype**이라는 속성에 정의되어 있습니다. 브라우저들은 prototype 속성에서 파생된 ```__proto__``` 속성을 통해 객체 인스턴스를 구현합니다.
->```__proto__``` 는 deprecated 되었습니다.
->```__proto__``` 는 개별 객체의 속성이며 해당 객체의 생성자의 prototype속성을 가르킵니다.  prototype은 생성자의 속성입니다.

## Prototype chain

프로토타입은 객체를 상속 받기 위한 속성입니다. 따라서 객체 안에 존재하는 프로토타입 속성또한 상위 객체의 프로토타입을 상속받습니다.
```javascript
function Person(name, age){
    this.name = name;
    this.age = age;
}

var person1 = new Person('Bob','32');
```
위 코드에서 person1은 Person 타입의 객체 이므로 Person의 속성을 가집니다. 또한 Person의 프로토타입 객체인 Object에 정의된 다른 멤버들을 사용할 수 있습니다.

실제로 Object에 존재하는 valueOf()라는 메서드를 person1에서 호출하면 내부적으로 이러한 과정이 일어납니다.

1. person1 객체가 valueOf()를 가졌는가 체크 합니다.
2. person1 객체에 존재하지 않기 때문에 person1의 prototype 객체 (Person.prototype)에 valueOf()가 존재하는지 체크 합니다.
3. person1의 프로토 타입 객체에 존재하지 않기 때문에 Person의 프로토타입 객체(Object.prototype)에 valueOf()가 존재하는지 체크 합니다. 이곳에 존재하면 호출 합니다.
  -> 프로토타입 체인에서 한 객체(프로토 타입 객체)의 메소드와 속성들이 다른 객체로 __복사 되는것이 아니고__ 체인을 타고 __접근__ 할 수 있게되는 것입니다.
  따라서 ```Person.prototype !== Object.prototype``` 입니다. 

이렇게 프로토타입 객체가 상위 객체의 프로토타입 객체와 연결 되는것을 **프로토타입 체인**이라고 합니다.

## 프로토타입 속성

프로토타입은 객체를 상속하기 위한 속성입니다. prototype을 통해 상속이 진행되므로 prototype에 존재하지 않으면 상속 되지 않습니다.

Object 객체는 많은 변수와 메소드들을 가지고 있지만 Person 객체는 Object의 모든 변수와 메소드를 사용할 수 있는 것은 아닙니다. 그 이유는 Object의 prototype 밖에 있는 속성들은 상속 받지 못하였기 때문입니다.

## Object.create()

ES6부터 객체를 new 연산자 뿐만 아니라 Object.create()를 통한 생성도 가능합니다.

Object.create()가 하는 일은 주어진 객체를 프로토타입 객체로 삼아 새로운 객체를 생성합니다.

```javascript
var person2 = Object.create(person1);

console.log(person2.__proto__ === person1);
// output : true
```

## 생성자 속성 (Constructor)

모든 생성자 함수(생성자 타입)의 프로토타입 객체는 consturtor 속성을 지니고 있습니다. 이 constructor 속성은 원본 생성자 함수 자신을 가리키고 있습니다.

```javascript
person1.constructor
person2.constructor
```

person1은 Person() 실행하여 생성하였고, person2는 person1을 prototype삼아 생성하였느니 원본 생성자를 Person을 가리킵니다.
따라서 둘 모두 Person() 생성자 함수를 반환합니다.

이러한 특징을 이용하여 새로운 객체를 생성하거나 생성자 함수의 이름을 알아낼 수 있습니다.
```javascript
var person3 = new person1.constructor('karen', 30);

person1.constructor.name
// constructor.name은 변경이 될 수 있습니다.(상속, 바인딩 등등..) 따라서 insatanceof 연산자를 사용하는것이 좋습니다.
```

***
출처 :

[MDN_Javascript_Prototype](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes)