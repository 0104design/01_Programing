//number type :
var integer =10;
var double=10.12;
var negative =-20;



var binary = 0b1010;
var octal = 0o127;
var hex = 0xff;


console.log("양수 :" + integer);
console.log("음수 :" + negative);
console.log("소수: " + double);
console.log("2진수 :" + binary);
console.log("8진수 :"+octal);
console.log("16진수"+hex);

console.log(1 / 0);
console.log(-1 / 0);
console.log(Number("abc"));

//string타입
var string;
string = '작은 따옴표를 감싼 문장에서는 "큰 따옴표를 특수기호로 사용 가능"';
console.log(string);
string ="큰 따옴표로 감싼 문자열에서는 '작은 따옴표'를 특수기호로 사용 가능합니다"
console.log(string);

string='작은 따옴표 사이사이에서 또다른 작은 따옴표 사용은\'이렇게\'  \\사용 가능합니다';
console.log(string);

//템플릿 리터럴
var name="김가영";
var age =17;
var height=163
var weight=59;

console.log(`이름 :, 나이:${age}, 키 :${height}, 몸무게 :${weight}`);

//boolean type
var isTrue=true
var isFalse=false;
console.log(isTrue);
console.log(isFalse);



var num1=1
console.log(num1 == isTrue);


var isUndefined;
console.log(isUndefined);

var asUndefined=1;
asUndefined= undefined;
console.log(asUndefined);

asUndefined=null;
console.log(asUndefined);

//null



