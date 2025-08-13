var highlightSkull = function (color) {
  var neutral = document.querySelector(".skull");
  var highlight = document.querySelectorAll(".skull-highlight." + color)[0];
  highlight.classList.toggle("skull-highlight-active");
  neutral.classList.add("neutral");
}

var resetSkull = function () {
  var neutral = document.querySelectorAll(".skull.neutral")[0];
  var highlight = document.querySelectorAll(".skull-highlight-active")[0];
  neutral.classList.remove("neutral");
  highlight.classList.toggle("skull-highlight-active");
}

var changeActiveDate = function (e) {
  e.preventDefault();

  var currentDate = document.querySelector(".timeline-container .timeline-dates .bullet-active");
  currentDate.classList.remove("bullet-active");
  var currentContent = document.getElementById(currentDate.textContent);
  currentContent.classList.remove("content-active");

  var chosenDate = e.target;
  chosenDate.classList.add("bullet-active");
  var chosenContent = document.getElementById(chosenDate.textContent);
  chosenContent.classList.add("content-active");
}

window.addEventListener("DOMContentLoaded", () => {
  var listings = document.querySelectorAll(".timeline-container li");
  listings.forEach(function (item) {
    item.addEventListener("mouseover", () => { highlightSkull(item.classList[0]); });
    item.addEventListener("mouseout", () => { resetSkull(); });
  })

  var dateEntries = document.querySelectorAll(".timeline-container .timeline-dates .date-entry");
  dateEntries.forEach(function (entry) {
    entry.addEventListener("click", (e) => { changeActiveDate(e); })
  })
});
