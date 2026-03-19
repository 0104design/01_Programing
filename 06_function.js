// 함수 선언문을 통해 만든 함수

function sayHello() {
    console.log("안녕하세요!");
}
// 그렇게 만든 함수를 "호풀" (실행)
sayHello();

function welcomeUser(name) {
    console.log(`안녕하세요 ${name}님!`)
}
welcomeUser("홍길동");

var name ="홍길동";
function sayHelloToUser(name) {
    console.log(`안녕하세요, ${name}님`);
}
// 변수는 메모리영역에 넣어서 나중에 값을 사용하기 위해 존제
// 함수는 함수 안에서 값을 받아오기 위해 존재. 함수 내부 코드블록 안에서만 통용됨.

var name= "홍길동";
sayHelloToUser(name);

var name2= "율곡이이";
sayHelloToUser(name2);


function add(a, b) {
    return  a + b;
}
var result = add(1, 2);    // return 3이 되니까, result에 3이 들어감

// 표현식으로 함수정의ㅐ, sayHi가 중심이되어 변수호이스킹이 일어남. => 변수 전체 호이스팅됨.
var sayHi = function() {
    console.log("안녕하세요!");
}
sayHi();

//  화살표 함수 변수 호리스탕만 일어남
sayHi2 = () => {
    console.log("안녕하세요!")
}


var getGrade = (score) => {
    if (score >= 90) {
        return "A학점";
    } else {
        return "B학점";
    }
}

var result= getGrade(50);





function workoutCoach(count) {
console.log(`총 ${count}번 반복됩니다`);

for (var i = 1; i <= count; i++) {
    console.log(`${i}번째입니다`)
}

    console.log("종료되었습니다");
}

workoutCoach(2);
workoutCoach("s");