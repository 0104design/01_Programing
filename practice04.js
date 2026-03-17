for (var i=1; i<= 20; i++) {
if(i % 3 === 0) {          //3의 배수일 때
    console.log("짝");
} else {
    console.log(i);
}
}

var sum= 0;
for (var i= 1; i <= 100; i++){
    // 1사이클 -> i = 1 -> sum 1
    // 2사이클 -> 1 = 2 -> sum + 2 = 3
    // 3사이클 -> i = 3 -> sum
    sum = sum + i;
    if (sum >= 500){
        console.log(sum);
    break;
    }
}


// 02. 거꾸로
for (var i=10; i>=1; i--) {
    if (i % 2 === 0){
        console.log(i);
    }
}


// 04.
for (var i =1; i <=10; i++){
    if (i == 7) {
        continue;
    }
    console.log(i);
}


// 05.
var text = "Javascript is powerful and fun!";       //31글자
var result = 0;


for (var i =0;  i <text.length; i++) {
    if (text[i] === "o") {
        result = result + 1;
    }
}






// 1번 문제
for (var i = 1; i <= 20; i++) {
    if(i % 2 !== 0){
        console.log(i);
    }
}


for (var i =1; i<= 20; i++) {
    if (i % 2 === 1){
        console.log(i);
    }
}


//2번 문제
for (var i= 1; i <= 9; i++) {
    console.log(`3 * ${i} = ${3*i}`);
}





// 3번 문제

var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
console.log(sum);



// 04

var str ="Javascript";
var result = ""
for (var i=str.length-1; i >= 0; i--){
    result = result + str[i];
}

console.log(result);



//05
var count =0;
for (var i = 1; i<=100; i++) {
    if (i % 4 === 0) {
        count++;
    }
}
console.log(count);