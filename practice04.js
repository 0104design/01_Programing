for (var i=1; i<= 20; i++);
if(i % 3 === 0) {          //3의 배수일 때
    console.log("짝")
} else {
    console.log(i);
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
for (var i=10; 1>=1; i--) {
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