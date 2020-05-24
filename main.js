const slider = document.querySelector(".slider");
const main = document.querySelector("main");
const socialH = document.querySelector("h1");
const todayH = document.querySelector(".todayH2");
const todayNumber = document.querySelector(".today-number");
const topTabArray = [...document.querySelectorAll(".info-top")];
const botTabArray = [...document.querySelectorAll(".info-bot")];
const botHArray = [...document.querySelectorAll(".today-number")];
const topHArray = [...document.querySelectorAll(".topNum")];

slider.addEventListener("click", function () {
  main.classList.toggle("darkBg");
  socialH.classList.toggle("hColor");
  todayH.classList.toggle("hColor");
  topTabArray.map((tab) => tab.classList.toggle("darkBgTab"));
  topTabArray.map((tab) => tab.classList.toggle("info-hover"));
  topHArray.map((tab) => tab.classList.toggle("hColor"));
  botHArray.map((tab) => tab.classList.toggle("hColor"));
  botTabArray.map((tab) => tab.classList.toggle("darkBgTab"));
  botTabArray.map((tab) => tab.classList.toggle("info-hover"));
});
