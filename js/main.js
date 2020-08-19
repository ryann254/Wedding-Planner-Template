const homeSection = document.getElementById("home-section");
const aboutSection = document.getElementById("about-services");
const portfolioSection = document.getElementById("portfolio");
const contactSection = document.getElementById("contact");
let underline;

function scroll(offsetTop) {
  window.scrollTo({
    top: offsetTop - 80,
    behavior: "smooth",
  });
}

function moveUnderline(event) {
  $(".active-line").each(function () {
    $(this).removeClass("active");
  });
  if (event !== undefined) {
    underline = event.target.nextElementSibling;
    $(underline).addClass("active");
  }
}

function moveLinkColor(event) {
  $(".nav-link").each(function () {
    $(this).removeClass("nav-active");
  });
  if (event !== undefined) {
    underline = event.target;
    $(underline).addClass("nav-active");
  }
}

$(document).ready(function () {
  $(".nav-item").click(function (event) {
    event.preventDefault();
    if (event.target.id === "home") {
      let offsetTop = homeSection.offsetTop;
      moveLinkColor(event);
      moveUnderline(event);
      scroll(offsetTop);
    } else if (event.target.id === "about") {
      let offsetTop = aboutSection.offsetTop;
      moveLinkColor(event);
      moveUnderline(event);
      scroll(offsetTop);
    } else if (event.target.id === "services-link") {
      let offsetTop = aboutSection.offsetTop;
      moveLinkColor(event);
      moveUnderline(event);
      window.scrollTo({
        top: offsetTop + 750,
        behavior: "smooth",
      });
    } else if (event.target.id === "portfolio-link") {
      let offsetTop = portfolioSection.offsetTop;
      moveLinkColor(event);
      moveUnderline(event);
      scroll(offsetTop);
    } else {
      let offsetTop = contactSection.offsetTop;
      moveLinkColor(event);
      moveUnderline();
      scroll(offsetTop);
    }
  });
});
