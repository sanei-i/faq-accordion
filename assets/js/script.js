const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const icon = question.querySelector(".faq-question-icon");

    faqItem.classList.toggle("is-open");

    if (faqItem.classList.contains("is-open")) {
        icon.src = "./assets/images/icon-minus.svg";
    } else {
        icon.src = "./assets/images/icon-plus.svg";
    }
  });
});
