const copyEmailBtn = document.getElementById("copyEmailBtn");
const emailText = document.getElementById("email");

copyEmailBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailText.textContent.trim());

    copyEmailBtn.textContent = "완료";

    setTimeout(() => {
      copyEmailBtn.textContent = "복사";
    }, 1200);
  } catch (error) {
    alert("이메일 복사에 실패했습니다.");
  }
});