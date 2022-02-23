const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const button = document.querySelector("button"); 

//저장할 데이터의 key값 
const LOCAL_DATA = "Contents"; 

//input태그에 이름 입력 후 input 태그를 감추고, 텍스트가 나타나게 해주는 함수 
function hiddenAndGreeting(name) { 
    greeting.style.display = "block";
    form.style.display = "none"; 
    button.style.display = "block"; 
    button.addEventListener("click", onClick); 
    greeting.innerText = `메모: ${name}`; } 
    
//버튼 클릭 시, 데이터 삭제 이벤트 발생 
function onClick() { 
    localStorage.removeItem(LOCAL_DATA); 
    console.log("hi"); 
    loaded(); 
} 

//input태그에 입력 시, lacalStorage의 value 값으로 저장 
function onSubmit(e) {
    e.preventDefault(); 
    localStorage.setItem(LOCAL_DATA, input.value); 
    hiddenAndGreeting(input.value); 
    input.value = ""; 
} 
        
//input태그 보이게 설정, 인사 텍스트와 버튼은 숨김
function askForContents() { 
    form.style.display = "block"; 
    greeting.style.display = "none"; 
    button.style.display = "none"; 
    form.addEventListener("submit", onSubmit); //form에 submit 이벤트 추가 
} 

//브라우저의 localStorage에 데이터가 있을 때와 없을 때를 구분하여 실행 시켜줄 함수
function loaded() { 
    const data = localStorage.getItem(LOCAL_DATA); 
    if (data === null) { // 데이터가 없을 시 
        askForContents(); 
    } else { //데이터가 이미 있을 시 
        hiddenAndGreeting(data); 
    } 
} 

//처음 실행할 init 함수 
function init() { 
    loaded(); 
} 

init();
