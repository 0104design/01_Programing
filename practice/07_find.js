const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"}
];

const findUser = users.find((value) => {
    return value.id ===2;
});
console.log(findUser);


// 2.
const products = [
    {name: "키보드", price: 50000 },
    {name: "마우스", price: 30000 },
    {name: "모니터", price: 100000 }
];

// 내가 한 거
const a = products.find((value) => {
    return value.price >= 50000;
});
console.log(a);

// 답안지
const foundProducts = products.find((value) => {
    return value.price >= 50000;
});


const teams = [
    {teamName: "A", leader:{name: "KIm", age: 30}},
    {teamName: "B", leader:{name: "Lee", age: 25}},
    {teamName: "C", leader:{name: "Park", age: 35}}
];


const foundTeams = teams.find((value) => {
    return value.leader.age <= 30;
});

// 4.
const posts = [
    {id: 101, title: "자바스크립트 기초"},
    {id: 102, title: "리액트 가이드"},
    {id: 103, title: "Node.js 심화"}
];

const foundPosts = posts.find((value) => {
    return value.title.includes("리액트");         // string에 붙는 include() 메소드
                                                 // 매개변수에 적어준 글자가 포함됨 -> TRUE (아니면 false)
});
console.log(foundPosts);

//문자열로 ㅅ
const document = [
    {id: "DOC_2024_01", title: "연간보고서"},
    {id: "MEMO_2024_05", title: "회의록"},
    {id: "DOC_2024_02", title: "분기 실적"}
];

// Prefix ()
const foundDocument = document.find((value) => {
    return value.id.startsWith("DOC");              // 점두사 (Prefix)로 시작되면 true, 아니면 false
});

console.log(foundDocument);

//6. 문자열로 끝나는 항목 찾기

const files = [
    {name: "info.mp4", type: "video"},
    {name: "main_banner.png", type: "image"},
    {name: "resume.pdf", type: "document"},
    {name: "logo.png", type: "image"}
];

// 파일이 " 연긴보고서" 로 끝나는 첫 번째 이미지 찾기.      => 접미사 (suffix)

foundFiles = files.find((value) => {
    return value.name.endsWith(".png");         //접미사 (suffix) 으로 끜ㅌ나면 true, 아닌면false
});

console.log(foundFiles);

//7.
const warehouse = [
    {id: 101, status: "품절"},
    {id: 102, status: "입고"},
    {id: 103, status: "품절"},
    {id: 104, status: "품절"},
];

const  foundWarehouse = warehouse.find((value, index) => {
    return index >= 2 && value.status === "품절";
});


// 8
const inventory = [
    {name: "볼펜", category: "문구", stock: 5 },
    {name: "노트", category: "문구", stock: 0 },
    {name: "키보드", category: "전자", stock: 10 },
    {name: "마우스", category: "전자", stock: 2 }
];

const foundInventory = inventory.find((value) => {
   if(inventory.category === "전자") {
       return inventory.stock >= 5 && inventory.name
   }
});

const result1 = inventory.find((value) => {
    return value.category === "전자" && value.stock >= 5 && value.name.length > 2;
});


const result2 = inventory.find((value) => {
    return value.category === "전자" && (value.stock >= 5 || value.name.length >2 );
});



