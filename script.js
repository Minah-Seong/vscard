"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const businessCard = document.querySelector(".business-card");
    const emailLink = document.querySelector('a[href^="mailto:"]');

    if (businessCard) {
        businessCard.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

        businessCard.addEventListener("mouseenter", () => {
            businessCard.style.transform = "translateY(-12px)";
            businessCard.style.boxShadow =
                "0 0 28px rgba(254, 117, 213, 0.25), 0 28px 60px rgba(0, 0, 0, 0.55)";
        });

        businessCard.addEventListener("mouseleave", () => {
            businessCard.style.transform = "translateY(0)";
            businessCard.style.boxShadow =
                "0 0 20px rgba(254, 117, 213, 0.15), 0 20px 50px rgba(0, 0, 0, 0.45)";
        });
    }

    if (emailLink) {
        emailLink.addEventListener("click", async (event) => {
            event.preventDefault();

            const email = emailLink.dataset.email || emailLink.textContent.trim();
            const originalText = emailLink.textContent;

            try {
                await navigator.clipboard.writeText(email);
                emailLink.textContent = "이메일이 복사되었습니다";

                setTimeout(() => {
                    emailLink.textContent = originalText;
                }, 1500);
            } catch (error) {
                console.error("클립보드 복사 실패:", error);
                emailLink.textContent = "복사에 실패했습니다";

                setTimeout(() => {
                    emailLink.textContent = originalText;
                }, 1500);
            }
        });
    }

    console.log("웹 명함 카드가 로드되었습니다.");
});