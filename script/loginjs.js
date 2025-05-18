document.getElementById("signupForm").addEventListener("submit", function (e) {
  const birthInput = document.getElementById("birth");
  const idInput = document.getElementById("userId");
  const pwInput = document.getElementById("password");

  const birth = birthInput.value.trim();
  const userId = idInput.value.trim();
  const password = pwInput.value;

  const date = new Date(birth);
  const today = new Date();

  const isValidBirthFormat = /^\d{4}-\d{2}-\d{2}$/.test(birth);
  const isRealDate = !isNaN(date.getTime());
  const isPast = date <= today;

  const isValidId = /^[a-zA-Z0-9]{4,12}$/.test(userId); // 공백X, 4~12자
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isValidPw = password.length >= 6 && hasSpecial && !/\s/.test(password);

  // 생년월일 검사
  if (!isValidBirthFormat || !isRealDate || !isPast) {
    alert("❌ 올바른 생년월일을 입력해주세요 (예: 2000-01-01)");
    birthInput.focus();
    e.preventDefault();
    return;
  }

  // 아이디 검사
  if (!isValidId) {
    alert("❌ 아이디는 영어/숫자 조합 4~12자, 공백 없이 입력해주세요.");
    idInput.focus();
    e.preventDefault();
    return;
  }

  // 비밀번호 검사
  if (!isValidPw) {
    alert("❌ 비밀번호는 특수문자를 포함해 6자 이상, 공백 없이 입력해주세요.");
    pwInput.focus();
    e.preventDefault();
    return;
  }
});
