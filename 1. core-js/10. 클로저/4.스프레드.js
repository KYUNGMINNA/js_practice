
//스프레드 : 안전한 객체,배열 복사
const foodList=['짜장면','볶음밥','탕수육'];

//const copyFoodList=foodList;//값 복사가 아니라 주소 복사임 

//값 복사 하려면
// const copyFoodList2=[foodList[0],foodList[1],foodList[2]];

// const copyFoodList3=[];
// for( let f of foodList){
//     copyFoodList3.push(f);
// }

//ES6
const copyFoodList=[...foodList,'떡볶이','파스타'];
//데이터 복사 +데이터 추가  : 복사만 하려면 ... 문법 사용 

//foodList[1]='짬뽕';
//copyFoodList[2]='깐풍기';

console.log('원본:'+foodList);
console.log('사본:'+copyFoodList);


const emp={
    empName:'빡빡이',
    age:29,
    hireDate:'2014-01-01',
    birthDay:'1995-12-31',
};

//객체 복사 + 데이터 추가 + 데이터 수정 가능 
const copyEmp={
    ...emp,
    isCopy:true,
    age:50};
console.log(copyEmp);