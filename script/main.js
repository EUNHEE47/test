const text = [
  "<h3>안녕하세요. 신입 개발자 박은희 입니다.</h3>",
  "끊임없는 성장과 발전을 추구하며",
  "협업과 커뮤니케이션 능력을 바탕으로",
  "사용자가 원하는 최상의 경험을 제공하기 위해 노력하겠습니다.",
];

text.forEach((text) => {
  let intro = `<div class="intro"><p>${text}</p></div>`;

  $(".main-text").append(intro);
});

//intro-text

const introText = document.querySelectorAll(".intro");

window.onload = () => {
  let timer = 0;
  introText.forEach((item) => {
    item.style.animation = `introFade 500ms ${(timer += 600)}ms forwards`;
  });
};

$(window).scroll(function () {
  if (window.scrollY >= 50) {
    $(".navbar").css("background", "#efeadd");
  } else {
    $(".navbar").css("background", "none");
  }
});

// window.addEventListener(
//   "wheel",
//   function (e) {
//     e.preventDefault();
//   },
//   { passive: false }
// );

// var $html = $("html");

// var page = 1;

// var lastPage = $(".section").length;

// $html.animate({ scrollTop: 0 }, 0);

// $(window).on("wheel", function (e) {
//   if ($html.is(":animated")) return;

//   if (e.originalEvent.deltaY > 0) {
//     if (page == lastPage) return;

//     page++;
//   } else if (e.originalEvent.deltaY < 0) {
//     if (page == 1) return;

//     page--;
//   }
//   var posTop = (page - 1) * $(window).height();

//   $html.animate({ scrollTop: posTop });
// });
