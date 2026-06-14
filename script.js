const copyEmailBtn = document.getElementById("copyEmailBtn");
const emailText = document.getElementById("email");
const callBtn = document.getElementById("callBtn");

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

callBtn.addEventListener("click", () => {
  window.location.href = "tel:010-8859-0506";
});