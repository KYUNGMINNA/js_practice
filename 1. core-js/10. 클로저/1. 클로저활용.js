/*
//카운팅 변수
let num=0; // 전역 변수

//카운트 숫자 상태 변경 함수
const increase=()=>++num;

console.log(increase());
num=999; -->중간에 값 변경 가능성 존재
console.log(increase());
*/

////////////////////////////////////////////////////////
/*
const increase=()=>{
    let num=0;   //상태변수를 지역변수 처리
    return ++num;
};
console.log(increase());
console.log(increase());
console.log(increase());
*/

///////////////////////////////////////////////////////////
const increaseClosure=()=>{
    let num=0; //상태 변수(지역변수)
    
    //Inner 함수 
    function increase(){
        return ++num;
    }

    return increase; // increase() 괄호 안 붙이면 함수 자체를 리턴
    //() 붙이면  호출하라는 의미로  return ++num; 이 됨.
};

const result=increaseClosure(); 
// increaseClosure()가 increase라는 함수를 리턴 해서

//result로 함수를 호출 할 수 있음 
console.log(result());
console.log(result());
num=999;// 아무리 바꾸려 해도 영향 안 받음 
console.log(result());

console.log("------------------------------------");

//즉시 실행 함수 : 한 번만 사용될 거라 함수명 불 필요하고,바로 호출하는 방법
(function(){}());

const result2=(function(){
    let num=0;
    return ()=>++num;
}());

console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());


