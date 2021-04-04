# JSON 

JSON은 Javascript 문법을 따른 표준 포멧입니다.

모든 속성을 쌍 따움표 ("")로 표현하고 객체나 배열을 속성값으로 가질 수 있습니다.

ES6부터 JSON 객체를 사용하여 데이터를 다룰 수 있게 됩니다.

## 사용해보기

이름 : 
나이 :
지역 : 
전화번호 :
가족들 :
기술들 :

--------------
{
  "name" : "seongbeen jeon",
  "age" : 24,
  "location" : "Ansan, Republic of Korea",
  "phoneNumber" : "010-0000-0000",
  "member" : {
      "" : "",
      "" : "",
      "" : ""
  },
  "skills" : {
    "lang" : [
      "Javascript",
      "Java",
      "C",
      "Python",
      "C++"
    ],
    "Position" : "Web Backend"
  }
}

---------------
User.name : seongbeen jeon
User["name"] : seongbeen jeon
User.skills["lang"][2] : C


## JSON Method in ES6

### JSON.parse()

```JSON.parse()``` 메서드는 JSON 문자열을 분석하고 그 결과를 Js값이나 객체로 생성합니다.

```javascript
const json = '{"result" : "true", "count" : "42"}';
const obj = JSON.parse(json);

console.log(json);
console.log(obj);
```

