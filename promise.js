// promise.md를 실습하기 위한 파일입니다.
var _promise = function(param){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      if(param){
        resolve("해결 완료!");
      }else{
        reject("실패!");
      }
    },1000);
  });
};

// fulfiiled / output : 해결완료!
_promise(true)
  .then(function(text){
    console.log(text);
  })
  .catch(function(text){
    console.log(text);
  });

// reject / output : 실패!1
_promise(false)
  .then((text)=>{console.log(text);})
  .catch((text)=>{console.log(text+'1');})
  .catch((text)=>{console.log(text+'2');});