# Promise

Promise는 객체의 비동기 작업이 맞이할 미래의 결과값을 나타냅니다.

Javascript의 콜백을 사용하여 코드를 짤 경우 가독성이 떨어지고 굉장히 복잡해 질 수 있습니다.

```javascript
function findAndSave(data){
  data.find({},(err,data)=>{ // 콜백 1
    if(err){
      return console.error(err);
    }
    data.save((err)=>{ // 콜백 2
      if(err){
        return console.error(err);
      }
      data.dosomething((err)=>{ // 콜백 3
        if(err){
          return console.error(err);
        }    
      });
    });
  });   
}
```

promise는 미래의 결과값을 위한 대리자로 비동기 연산이 종료되면 그 결과값을 처리기기에 연결하여 마치 동기 처리인것 처럼 코드를 작성할 수 있습니다.

다만 promise는 최종 결과값을 반환하는 것이 아니라 프로미스를 반환하여 비동기 처리가 완료 될 때 결과를 제공합니다.

## promise 다루기

### 선언부

```javascript
function getPromise(param){
  return new Promise(function(resolve, reject){
    dosomething(err,function(param){ // 비동기 처리

      if(param){ //처리가 성공적으로 완료가 되었을 때
        resolve("해결완료!");

      }else{ // 처리가 실패할 경우
        reject(console.error(err));
      }
    });
  });
}
```

프로미스는 생성 하고 종료될 때까지 몇가지의 상태를 가집니다.

- Pending : 이행하거나 거부되지 않은 상태
- Fulfilled : 이행이 성공적으로 완료 된 상태
- Rejected : 어떠한 이유에서 이행이 실패한 상태

1. **Pending**

```javascript
new Promise()
```
먼저 위와 같이 Promise 객체를 생성하면 Pending 상태가 됩니다.
프로미스 객체는 생성할 때 콜백 함수를 선언할 수 있고, 해당 콜백 함수의 인자로 resolve, reject를 가집니다.

```javascript
new Promise(function(resolve,reject){...});
```

2. **Fulfiiled**

```javascript
new Promise((resolve, reject)=>{
  //dosomething
  resolve();
}))
```
위와 같이 프로미스 객체에 주어진 콜백함수를 실행하여 성공적으로 완료가 되어 resolve를 실행하면 프로미스는 *Fulfilled*상태가 됩니다.


3. **Reject**
```javascript
new Promise((resolve, reject)=>{
  //어떠한 문제가 생겨서 실행이 실패함
  reject();
});
```
프로미스에 주어진 콜백함수가 어떠한 이유에서든 실패하면 reject()를 실행하게 됩니다. 이러한 경우 프로미스는 *reject*상태가 됩니다.

### 실행부

1. **Fulfilled**

프로미스에 주어진 콜백함수가 성공적으로 이행되어 프로미스가 resolve를 실행하면 ```Promise.prototype.then(onFulfilled(), onRejected())```을 이용하여 처리 결과 값을 받을 수 있습니다.

```then()```을 이용하면 실패에 대한 처리도 할 수 있지만 체이닝을 할 때 문제가 발생하므로 성공을 처리할 때만 사용해 주는것이 좋습니다.

```javascript
function getPromise(){
  return new Promise(resolve, reject){
    resolve("이행 완료!");
  }
}

getPromise.then(function(text){
  console.log(text);
}
);
//output : 이행 완료!
```

2. **Rejected**

프로미스에 주어진 콜백함수가 실패하면 ```Promise.prototype.catch(onRejected(reason))```를 통해 처리를 합니다.

프로미스는 체이닝 형태로 여러 then을 연결하여 사용할 수 있습니다. 그러나 중간에 Error가 난다면 다음 then으로 넘어가지않고 onRejected에서 처리가 됩니다.
따라서 실패 처리를 위해서는 ```Promise(null,OnRejected)``` 형태로 사용해주려고 하는데 이것이 ```catch()``` 입니다.

```javascript
function getPromise(){
  return new Promise((resolve,reject)=>{
    reject(new Error());
  })
}

getPromise()
  .then(()=>{ //onFulfilled : 성공시 
    console.log("이행 완료!");
  },(err)=>{ //onRejected : 실패시
    console.log("다음 then으로 넘어가지 않고 실행됩니다.");
  })
  .then(()=>{
    console.log("프로미스 체이닝 성공");
  })
```

## Promise Chaining

프로미스는 콜백함수의 미래의 결과값을 나타낸 후 then을 통해 해당 결과값을 처리기에 연결할 수 있습니다.

```javascript
function getPromise(){
  return new Promise((resolve,rejected)=>{
    //...
  })
}

somePromise()
  .then(()=>{...})
  .then(()=>{...})
  .then(()=>{...});
```
이런식으로 여러개의 처리기를 연결하는 것을 **프로미스 체이닝**이라 합니다.

## Reference
[MDN Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[바보들을 위한 Promise 강의](https://programmingsummaries.tistory.com/325)

[자바스크리트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)