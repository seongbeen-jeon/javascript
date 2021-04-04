const json = '{"result" : "true", "count" : "42"}';
const obj = JSON.parse(json);

console.log(json);
console.log(obj);
console.log(obj.count === 42); // 문자열로 들어오면 string으로 해석되어 === 연산자를 사용하면 다르게 나옵니다.

const json2 = '{"result" : true, "count" : 43}'
const obj2 = JSON.parse(json2);
console.log(json2);
console.log(obj2);
console.log(obj2.count === 43); // 숫자 형식으로 들어오면 숫자로 해석 됩니다.