const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const titles = ["全栈开发工程师", "开源爱好者", "终身学习者"];
const typewriterEl = document.getElementById("typewriter");
let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = titles[titleIndex];
  typewriterEl.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 120);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 60);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1600);
  } else {
    deleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(type, 400);
  }
}

type();
