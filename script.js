"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const businessCard =
        document.querySelector(".business-card");

    if (businessCard) {

        businessCard.style.transition =
            "transform 0.3s ease, box-shadow 0.3s ease";

        businessCard.addEventListener("mouseenter", () => {

            businessCard.style.transform =
                "translateY(-12px)";

            businessCard.style.boxShadow =
                "0 0 28px rgba(254,117,213,0.25), 0 28px 60px rgba(0,0,0,0.55)";
        });

        businessCard.addEventListener("mouseleave", () => {

            businessCard.style.transform =
                "translateY(0)";

            businessCard.style.boxShadow =
                "0 0 20px rgba(254,117,213,0.15), 0 20px 50px rgba(0,0,0,0.45)";
        });
    }

    const copyButton =
        document.querySelector("#copyEmailButton");

    const emailText =
        document.querySelector("#emailText");

    if (copyButton && emailText) {

        copyButton.addEventListener("click", async () => {

            const email =
                emailText.textContent.trim();

            try {

                await navigator.clipboard.writeText(email);

                copyButton.textContent = "완료";

                copyButton.classList.add(
                    "is-completed"
                );

                copyButton.disabled = true;

            } catch (error) {

                console.error(
                    "클립보드 복사 실패:",
                    error
                );

                copyButton.textContent =
                    "실패";
            }
        });
    }

    console.log(
        "웹 명함 카드가 로드되었습니다."
    );
});