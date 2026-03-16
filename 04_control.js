var score= 95;
// if문
if ( score >= 90) console.log(" 합격입니다! ");

if (score < 90) console.log("불합격입니다.");

// if-else문
if(score >= 90) {
    console.log("합격입니다!");
} else {
    console.log("불합격입니다!");
}

var age=15;

if(age >= 19) {
    console.log("성인입니다");
}
if (age >= 13 && age < 19) {
    console.log("청소년입니다");
}
if (age < 13) {
    console.log("어린이 입니다");
}

if (age >= 19) {
    console.log("성인입니다");
} else if(age >=13 && age < 19) {
    console.log("청소년입니다");
}else{
    console.log("어린이입니다");
}


var dustLevel=120;      //미세먼지 수치

if (dustLevel > 150) {
    console.log("경고");
} else if (dustLevel > 80) {
    console.log("주의");
}


if (dustLevel > 80) {
    if (dustLevel > 150) {
        console.log("경고");
    } else {
        console.log("주의");
    }
}

switch (true) {
    case dustLevel > 150:
        console.log("경고");
        console.log("마스크를 꼭 착용해주세요");
        break;
    case dustLevel > 80:
        console.log("주의");
}

var fruit="apple";
switch (fruit) {
    case "apple":
        console.log("사과입니다.");
        break;
    case "banana":
        console.log("바나나입니다.");
        break;
    case "melon":
        console.log("멜론입니다");
        break;
}

var  day ="수요일"

switch (day) {
    case "월요일":
    case "화요일":
    case "수요일":
    case "목요일":
    case "금요일":
        console.log("평일입니다 학원에 나오세요");
        break;
    case "토요일":
    case "일요일":
        console.log("주말입니다 휴식하세요");
}


var color=2;

switch(color) {
    case 1:
        console.log("빨간색");
    case 2:
        console.log("주황색");
        break;
    case 3:
        console.log("노란색");
        break;
    default:
        console.log("모르겠어요");
    case 5:
        console.log("파란색");
}

// for 문의 브레이크
for (var  i=0; i <=3; i++){
    console.log(i + "출력")
    if (i == 2) {
        break;
    }
}

for (var  i=0; i <=3; i++){
    console.log(`이 사이클은 ${i} 사이클`)
    if (i == 2) {
        continue;
    }
    console.log(i + "출력");
}

for (var i =1; ;i++) {  //조건식은 생략 할 수 있음 -> 무한 루프
    console.log(i);
    if (i > 100) {                  // i가 100보다 커지면 break
        break;
    }
}

var num =5;
for (;;) {                          // 아예 다 생략 가능
    if(num == 5) {
        break;
    }
}


for (var i =2; i <= 9; i++) {
    // ㅑrk 2일 떄 부터 9일 때 까지 반복작업 -> 10인 사이클에서 탈락
    for (var j = 2; j <= 9 ; j++) {
        // j 가 2일 때부터, 9일 때 까지 반복작업 -> 10인사이클에서 탈락
        console.log(`${i} * ${j} = ${ i * j}`)
    }
}


for (var k = 10; k < 30 ; k++) {            // 포아이 (for) (i)단축키

}







// 4. 특정 문자 네외하고 출력
for (var  i=0; i <=10; i++){
    if (i == 7) {
        continue;
    }
    console.log(i + "출력");
}


// 01. 369문제







