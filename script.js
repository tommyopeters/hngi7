$(document).ready(function() {
  let showMore = false;

  let desktopNav = $("#navbar");
  let mobileNav = $("#hamburger");
  let menuToggle = $("#menuToggle input");

  checkWindowSize = () => {
    let windowSize = $(window).width();
    if (windowSize > 1200) {
      desktopNav.show();
      mobileNav.hide();
    } else {
      desktopNav.hide();
      mobileNav.show();
      menuToggle.click(function() {
        if ($(this).is(":checked")) {
          $("header").css("margin-bottom", "20rem");
        } else {
          $("header").removeAttr("style");
        }
      });
    }
  };
  checkWindowSize();
  $(window).resize(() => {
    checkWindowSize();
  });

  $(".show-more-trigger").click(() => {
    if (showMore) {
      $(".show-more").addClass("no-show");
      $(".show-more-trigger").text("View More Photos");
      $(".show-more-trigger").css("margin-top", "-3rem");
      showMore = false;
    } else {
      $(".show-more").removeClass("no-show");
      $(".show-more-trigger").text("View Less Photos");
      $(".show-more-trigger").css("margin-top", "5rem");
      showMore = true;
    }
  });
  const circle = $(".progress-ring__circle");
  const days = $("#days");
  const hours = $("#hours");
  const minutes = $("#minutes");
  const seconds = $("#seconds");
  const daysValue = $("#days-value");
  const hoursValue = $("#hours-value");
  const minutesValue = $("#minutes-value");
  const secondsValue = $("#seconds-value");
  const radius = circle[0].r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  circle.css("strokeDasharray", `${circumference} ${circumference}`);
  circle.css("strokeDashoffset", "circumference");

  function setProgress(element, percent) {
    const offset = (percent / 100) * circumference;
    element.css("strokeDashoffset", `${offset}`);
  }
  function renumber(n) {
    return n > 9 ? "" + n : "0" + n;
  }

  let deadline = new Date("Jan 1, 2020 12:00:00").getTime();
  setInterval(() => {
    var now = new Date().getTime();
    var t = deadline - now;
    var d = Math.floor(t / (1000 * 60 * 60 * 24));
    var h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((t % (1000 * 60)) / 1000);

    if (t < 0) {
      //   clearInterval(x);
      // End
    }

    setProgress(days, (d / 30) * 100);
    setProgress(hours, (h / 24) * 100);
    setProgress(minutes, (m / 60) * 100);
    setProgress(seconds, (s / 60) * 100);

    daysValue.text(renumber(d));
    hoursValue.text(renumber(h));
    minutesValue.text(renumber(m));
    secondsValue.text(renumber(s));
  }, 1000);
});
