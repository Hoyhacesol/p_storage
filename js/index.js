$(function () {
  function loadPage(page) {
    $.get("pages/" + page, function (data) {
      $(".content").html(data).show().removeClass().addClass("content animate__animated animate__fadeIn");
      $("body")
        .removeClass()
        .addClass(page.replace(".html", "") + "-bg");
    });
  }

  // 첫 메뉴 선택 → 메뉴판 사라지고 사이드 + 컨텐츠 등장
  $(".GameList a").on("click", function (e) {
    e.preventDefault();
    const page = $(this).data("page");

    $(".GameListBox")
      .addClass("animate__fadeOutDown")
      .one("animationend", function () {
        $(this).hide();
        $(".appWrapper").fadeIn();
        loadPage(page);
      });
  });

  // 사이드 메뉴 내 페이지 이동
  $(".nav a").on("click", function (e) {
    e.preventDefault();
    const page = $(this).data("page");

    if (page) {
      $(".content").fadeOut(300, function () {
        loadPage(page);
      });
    } else {
      // 홈으로 돌아가기
      $(".appWrapper").fadeOut(function () {
        $(".GameListBox").show().removeClass("animate__fadeOutDown").addClass("GameList animate__animated animate__fadeIn");
      });
    }
  });

  // 아스테리아1.6.3 다운
  $(document).on("click", ".map02download", function (e) {
    e.preventDefault();
    window.open("https://drive.google.com/uc?export=download&id=1UrtzA8k0ai4iiJiyWN8G_rjbb-7TJ2f-", "_blank");
  });
});
