$(document).ready(function() {
  let showMore = false;

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
  const radius = circle[0].r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  console.log(radius);
  console.log(circumference);
  circle.css("strokeDasharray", `${circumference} ${circumference}`);
  circle.css("strokeDashoffset", "circumference");

  function setProgressHour(percent) {
    const offset = circumference - (percent / 100) * circumference;
    hours.css("strokeDashoffset", `${offset}`);
  }
  setProgressHour(20);
});
