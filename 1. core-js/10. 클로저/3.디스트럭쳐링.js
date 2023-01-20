
//배열 디스트럭쳐링
const arr=['김철수','박영희','홍길동'];
/*
const kim=arr[0];
const park=arr[1];
const hong=arr[2];
*/
//ES6 문법 - kim ,park에 순서대로 데이터 넣어 줌 
const [kim,park]=arr;
//const [kim ,, hone]=arr ; 0번과 2번 인덱스에만 할당 

console.log(`kim:${kim} , park:${park}`);


//객체 디스트럭쳐링
const emp={
    empName:'빡빡이',
    age:29,
    hireDate:'2014-01-01',
    birthDay:'1995-12-31',
};
//순서 상관 없음
const {age,empName,hireDate} =emp;

console.log(`사원의 이름은 ${empName}고
 나이는 ${age}이고 
 입사일자는 ${hireDate}입니다.`);