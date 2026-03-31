const arr= ["cookie", "snack"];
console.log(arr.length)

for (let i= 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr[2] = "juice";       // 새로운 값을 추가하는 건 맞음 , 보통적으로 값을 수정 할 때만 사용.
console.log(arr);

arr.push("cola", "water");      // push 메소드는 배열의 마지막에 값을 추가 할 수 있음. 매개변수에 1개 이상 쓸 수 있음.
console.log(arr);               // push 를 실행 한 결과값 (리턴값)은 해당 배열의 길이 (length)가 반환.

arr.pop();                      // pop는 매개변수 존재하지 않음. 배여르이 마지막에 있는 요소를 빼는 기능. 실행 결과값은 해당 요소의 값을 반롼
console.log(arr);


// 만약 중간에 값을 빼거나 추가하고 싶으면 ?
// 그럴 경우엔 배열을 새로 만들어 덮어써야함. => 자동으로 할 수 있게 만든 메소드가 있음.
arr.unshift("abc");     // 맨 앞에 요소를 추가
console.log(arr);

arr.shift();                 // 맨 앞의 요소를 삭제


// splice( 시작 인덱스, 삭게할 갯수, 추가할 요소)
// splice( 2, 1, "cherry") => 인덱스 1부터, 1개의 요소를 삭제하고 그 자리에 체리 삽입
// splice (1, 4, "cherry", "mango", "apple") => 인덱스 1부터 4개의 요소를 삭제하고 그 자리에 3가지를넣겠다.
// splice(3, 2) => 인덱스 3부터 2개의 요소를 삭제
// splice(2, 0, "cherry") => 인덱스 2부터 0개의 요소를 삭제하고 체리를 넣겠다.
// splice(0, 0 "cherry") => 인덱스 0부터 0개의 요소를 삭제하고 체리를 넣겠다.


// splice(arr.length -1, 0, "cherry") => 마지막 자리에 "cherry"를 넣겠다.


Array.isArray(arr)          // 집어넣은 변수, 값이 배열인지 아닌지 => true/ false
if(Array.isArray(arr)){
    console.log(arr.length);
}

const a = [1, 2, 3];
// 각 배열을 순회하면서 함수를 실행하는 메소드
// 매개변수로는 함수 1개만 씀.
// 함수 : (매개변수 : 그 요소가 받아짐)  => {}
a.forEach(
    (value) => {
        console.log(value);
    }
);

const b = ["abc", "cookie", "snack"];
b.forEach(
    (value) => {             // 매개변수는 현재 순회하는 그 요소를 받아주어야 함수에서 처리가 가능함
        console.log(value);
    }
)

// 매개변수 값의 이름은 자유롭게 지정.
function add(x, y) {
    return x + y;
}

b.forEach((eee) => {
        console.log(eee);
})


//요소의 합계를 구하는 예제
const prices =[1500, 3000, 500, 2000];
let sum= 0;
for(let i = 0; i <= prices.length; i++) {
    //  각 요소의 합을 저장
    let sum = sum + prices[i];
}
// i = 0
// 부모가 갖고있는 sum은 0
// => 0 + prices[0] => 1500 부모가 갖고있는 sum을 1500으로 바꿈

//i=1
// 부모가 갖고있는 sum은 1500
// => 1500+ prices[1] =>  부모가 갖고있는 sum을 4500으로 바꿈

// I = 2
// => 부모가 갖고있는 sum = 4500
//=> 1500+ prices[2] =>  부모가 갖고있는 sum을 5000으로 바꿈

// I = 3
// => 부모가 갖고있는 sum = 5000
//=> 1500+ prices[2] =>  부모가 갖고있는 sum을 7000으로 바꿈

console.log(sum);

sum = 0;
prices.forEach(
    (value)=> {
        sum = sum + value;
    }
)

