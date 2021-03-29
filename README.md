# javascript
Javascript 공부 정리

## index

1. 새로운 Object 표기법 in ES6
2. Prototype vs Class
3. Promises

### 2. Prototype vs Class

Javascript에서는 객체를 상속하기 위하여 프로토타입이라는 방식을 사용합니다.

프로토 타입 체인이 동작하는 방식을 알아보고, 이미 존재하는 생성자에 메소드를 추가하기 위해 프로토타입 속성을 사용하는 법을 알아봅니다.

JavaScript는 **프로토타입 기반 언어(prototype-based language)**입니다. 모든 객체들이 상속을 받기 위한 템플릿으로써 **프로토 타입 객체(prototype object)**를 가진다는 의미 입니다.

프로토 타입 객체도 또 다시 상위 프로토 타입 객체로부터 상속을 받을 수 있는데 이를 **프로토타입 체인(prototype chain)**이라 부릅니다.

정확히 말하자면 상속되는 속성과 메소들은 각 객체가 아니라 객체의 생성자의 **prototype**이라는 속성에 정의되어 있습니다.

```

```
***
출처 :

[MDN_Javascript_Prototype](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes)