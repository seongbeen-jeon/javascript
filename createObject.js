/**
 * New와 Object.create의 실습을 위한 파일
 */

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
const myCar = new Car('Eagle', 'Talon TSi', 1993);
myCar.__proto__.color = 'red';  
