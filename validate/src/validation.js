const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');
const pwdError = document.getElementById('pwdError');
const checkError = document.getElementById('pwdCheckError');

submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); // 폼의 기본 제출 동작 방지

    const nameValue = document.getElementById("name").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const ageValue = document.getElementById("age").value.trim();
    const pwdValue = document.getElementById("pwd").value.trim();
    const pwdCheckValue = document.getElementById("pwdCheck").value.trim();

    // 이름 유효성 검사
    if (nameValue.length === 0) {
        nameError.innerText = '필수 입력 항목입니다.';
        nameError.classList.add('active', 'red');
        nameError.classList.remove('green');
    } else {
        nameError.innerText = '멋진 이름이네요!';
        nameError.classList.add('active', 'green');
        nameError.classList.remove('red');
    }

    // 이메일 유효성 검사
    if (emailValue.length === 0 || !emailValue.includes('@')) {
        emailError.innerText = '올바른 이메일 형식이 아닙니다.';
        emailError.classList.add('active', 'red');
        emailError.classList.remove('green');
    } else {
        emailError.innerText = '올바른 이메일 형식입니다!!';
        emailError.classList.add('active', 'green');
        emailError.classList.remove('red');
    }

    // 나이 유효성 검사
    if (ageValue.length === 0 || isNaN(ageValue) || parseInt(ageValue) <= 0) {
        ageError.innerText = '나이는 숫자이고, 양수여야 합니다.';
        ageError.classList.add('active', 'red');
        ageError.classList.remove('green');
    } else if (parseInt(ageValue) < 19) {
        ageError.innerText = '우리 영화 사이트는 19살 이
