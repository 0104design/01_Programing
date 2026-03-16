var a= 10;
var b= 3;

console.log("---산술 연산자 예제---");

console.log("a =", a);
console.log("b =", b);

console.log("a + b =", a + b);          //덧셈
console.log("a - b=",  a - b);          //뺄셈
console.log("a * b =", a * b);          // 곱셈
console.log("a / b =", a / b);          // 나눗셈
console.log("a % b =", a % b);          // 나머지
console.log("a ** b =", a ** b);        // 거듭제곱

console.log(`a % b = ${a % b}`);




console.log ("---- 증강연산자 예제 ----");

var x=5;

console.log("x++ =", x++);          // 5
console.log("x =", x);

console.log("++x =", ++x);          // 5
console.log("x =",x);               // 6

console.log("x-- =", x--);          // 7
console.log("x=", x);               // 7

console.log("--x =", --x);          // 5
console.log("x=", x)                // 5




var num1;
num1 = 10;         // "="은 할당 연산자
num1 += 5;         // x = x + 5;   이걸 줄여서 썼을 뿐

num1 -= 5;         // x - x - 5;



var num2 = 1;
var bool1 = true;

console.log(num2 == bool1);         // 1 == true        // ==는 값만 비교
console.log(num2=== bool1);          // 1 === ture       // === 는 값과 타입이 같은지 비교 ***


// 삼항 연산자
// 사툥법 : (조건식) ? 참일 때 살행되는 코드 : 거짓일 대 사용되는 코드
//          조건식 : 비교 연산자를 사용한 식이 써 져야 함 -> 결과가 true / false로 나오는 식

var result = num2 === bool1 ? "같다" : "다르다";
console.log(result);


var year = 1985;
var result2= year <= 1980 ? "1980 이전" : "1980 이후";
console.log(result2);


var result3 = 10 ? true : false;
console.log(result3);



// 논리합  (||)         => 둘 중에 하나라도 true이면 true
var loginUser="admin";
var gender = "male";

var result4 = loginUser === "admin" || gender === "female";


// 논리곱  (&&)         => 둘 다 true여야t true
var result5 = loginUser === "admin" && gender && "female";


// 부정 ; 연산자 (!)
//

 var result6 = true;       // false
var result7 =!false;      // true
var result8=  !(loginUser === "admin"); // true
var result9 = !loginUser;
var result10 = !!loginUser;    // true : 값이 잇는 지 없는 지 판별 할 떄



// typeof 연산자 => 데이터 타입능 문자열로 반환
console.log(typeof result2);



if (typeof x === "number") {
    x++;
}

var eee= typeof x === "number" ? x++ : x;

var type = typeof x;        // "number"



