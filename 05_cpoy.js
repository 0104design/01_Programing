var num1=10;
var str="hello";
var bool1 =true;


var pCopy =1;
var pCopy2 = str;
var pCopy3 = bool1;

// 참조 자료형인 녀석들은 복사 할때 신곃써야 함
// 실제로 Heap 메모리에 저장되는 값은 실제 값이 아닌 주소값이기 때문
// 실제 값은 stack영역 안에 건물을 짓고 저장됨

var originalUser = {
    name: "김철수",
    age: 25,
    sex: "male",
};
var sCopyUser= originalUser;            // originalUser의 값을 복사해서 sCopy에게 복사하면 주소값이 복사됨.

originalUser.name = "홍길동";
console.log(sCopyUser.name);                // 얕은 복사 (swallow copy)

var dCopyUser = {                       // 딥 카피 (Deep copy)
    name: originalUser.name,                 // 객체를 새로 만들고 그 안의 값을 복사하는 방식
    age: originalUser.age,
    sex: originalUser.sex,
}

originalUser.name= "율곡이이"
console.log(`originalUser.name은 ${originalUser.name}`);
console.log(`dCopyUser.name은 ${dCopyUser.name}`);


var dCopyUser2 = {
    ...originalUser,                            // ...문법 : 스프레드 문법 : original 유저 변수 안에있는 프로퍼티를 '나열하겠다' 라는 의미
};


var oUser2 = {
    name: "김철수",
    age: 25,
    address: {
        city: "서울",
        zipCode: "04524"
},
}

var dUser2 ={
    ...oUser2,
};


// var dUser2 ={
//  name: oUser.name,
//  age: oUser.age,
//  address: oUser.address,
// }
oUser2.address.city="안산시";
console.log(`dUser.address.city는 ${dUser2.address.city}`)

// 깊은 복사
var dUser3 = {
    ...oUser2,
    address: {
        ...oUser2.address,
    }
}

// var dUser3 ={
//     name: oUser2.name,              // 객체 안에 동일한 Key를 갖고 있는 프로퍼티가 있다면 덮어쓰기 됨.
//     age: oUser2.age,
//     address: oUser2.address,
//     address: {
//         ...oUser2.address,
//     }
// };