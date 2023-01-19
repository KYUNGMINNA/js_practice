
const arr=[1,2,3,4,5,6,7,8,9,10];


// forEach  :단순 소비 --자바의 Consume 개념
arr.forEach(n=>{
    console.log(n);
});


//filter : 조건 콜백함수에 맞게 필터링 -자바의 Predicate
const evenArr=arr.filter(n=>n%2===0);
console.log(evenArr);
// filter는 조건에 맞게 개수가 줄어들 수 있음

//map : 조건 콜백함수에 맞게 새롭게 매핑해서 리턴
const powArr=arr.map(n=>n**2);
console.log(powArr);
//filter는 메서드 수행해도 개수가 줄어 들지 않음
