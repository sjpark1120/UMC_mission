const $input_name = document.querySelector("#input_name");
const $name_check = document.querySelector("#name_check");
const $input_nickname = document.querySelector("#input_nickname");
const $nickname_check = document.querySelector("#nickname_check");
const $input_email = document.querySelector("#input_email");
const $email_check = document.querySelector("#email_check");
const $input_password = document.querySelector("#input_password");
const $password_check = document.querySelector("#password_check");
const $input_checkpassword = document.querySelector("#input_checkpassword");
const $checkpassword_check = document.querySelector("#checkpassword_check");
const $submit_btn = document.querySelector('#submit_btn');
const $exit_btn = document.querySelector('#exit_btn');
const $wrap_modal = document.querySelector('#wrap_modal');
const $form = document.querySelector('#form');
const email_format = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const password_format = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]/;

let namef = false
let nicknamef = false
let emailf = false
let passwordf = false
let checkpasswordf = false

$input_name.addEventListener('change', ()=>{
  if($input_name.value){
    $name_check.style.color = "green";
    $name_check.innerText = "멋진 이름이네요!";
    namef = true;
  }
  else{
    $name_check.style.color = "red";
    $name_check.innerText = "필수 입력 항목입니다!";
    namef = false;
  }
  allcheck()
})

$input_nickname.addEventListener('change', ()=>{
  if($input_nickname.value.length>1 && $input_nickname.value.length<6){
    $nickname_check.style.color = "green";
    $nickname_check.innerText = "멋진 닉네임이군요!";
    nicknamef = true;
  }
  else{
    $nickname_check.style.color = "red";
    $nickname_check.innerText = "닉네임은 2~5글자로 구성해주세요!";
    nicknamef = false;
  }
  allcheck()
})

$input_email.addEventListener('change', ()=>{
  if(email_format.test($input_email.value)){
    $email_check.style.color = "green";
    $email_check.innerText = "올바른 메일 형식입니다.";
    emailf = true;
  }
  else{
    $email_check.style.color = "red";
    $email_check.innerText = "올바른 메일 형식이 아닙니다.";
    emailf = false;
  }
  allcheck();
})

$input_password.addEventListener('change', ()=>{
  if(password_format.test($input_password.value)){
    $password_check.style.color = "green";
    $password_check.innerText = "안전한 비밀번호입니다.";
    passwordf = true;
  }
  else{
    $password_check.style.color = "red";
    $password_check.innerText = "영어+숫자+특수문자를 조합하여 작성해주세요";
    passwordf = false
  }
  allcheck();
})

$input_checkpassword.addEventListener('change', ()=>{
  if($input_password.value == $input_checkpassword.value){
    $checkpassword_check.style.color = "green";
    $checkpassword_check.innerText = "비밀번호가 일치합니다.";
    checkpasswordf = true;
  }
  else{
    $checkpassword_check.style.color = "red";
    $checkpassword_check.innerText = "비밀번호가 일치하지않습니다.";
    checkpasswordf =false;
  }
  allcheck();
})

function allcheck(){
  if(namef && nicknamef && emailf && passwordf && checkpasswordf){
    $submit_btn.disabled = false;
    $submit_btn.style.backgroundColor = "rgb(75, 75, 75)";
  }
  else{
    $submit_btn.disabled = true;
    $submit_btn.style.backgroundColor = "rgb(175, 175, 175)";
  }
}

$exit_btn.addEventListener('click', ()=>{
  $wrap_modal.style.display = "none";
})

$submit_btn.addEventListener('click', ()=>{
  $wrap_modal.style.display = "flex";
})

$form.addEventListener('submit', (event)=>{
  event.preventDefault();
})