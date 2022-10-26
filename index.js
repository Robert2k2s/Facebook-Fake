let app = document.getElementById("app");
let middle = document.getElementById("main-middle");
let nut = document.getElementById("nut");
let truot = document.getElementById("truot");
let xemthem = document.getElementById("xemthem");
let anbot = document.getElementById("anbot");
let hide = document.getElementById("hide");
let menuNav = document.getElementById("menu-nav");
let mainLeft = document.getElementById("main-left");
let mainRight = document.getElementById("main-right");
let mainGrid = document.getElementById("main-grid");
let like = document.getElementsByClassName("like");
let cmt = document.getElementsByClassName("cmt");
let share = document.getElementsByClassName("share");
let alertPop = document.getElementById("alert-pop");
let moThongBao = document.getElementById("mo_thong_bao");
let moThongBaoIcon = document.querySelector("#mo_thong_bao i");

truot.addEventListener("click", function () {
  app.classList.toggle("hello");
  middle.classList.toggle("hello");
  truot.classList.toggle("truot");
  nut.classList.toggle("mau");
});

xemthem.addEventListener("click", function () {
  hide.classList.toggle("block");
  xemthem.style.display = "none";
});
anbot.addEventListener("click", function () {
  hide.classList.toggle("block");
  xemthem.style.display = "block";
});
menuNav.addEventListener("click", function () {
  mainLeft.classList.toggle("block");
  middle.classList.toggle("hide");
  mainRight.classList.toggle("hide");
  mainGrid.classList.toggle("grid");
});
moThongBao.addEventListener("click", function () {
  alertPop.classList.toggle("hide");
  moThongBaoIcon.classList.toggle("blue");
});

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    like[i].classList.toggle("blue");
  });
}
for (let i = 0; i < cmt.length; i++) {
  cmt[i].addEventListener("click", function () {
    cmt[i].classList.toggle("blue");
  });
}

for (let i = 0; i < share.length; i++) {
  share[i].addEventListener("click", function () {
    share[i].classList.toggle("blue");
  });
}
