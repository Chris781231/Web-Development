var drums = document.querySelectorAll(".drum");
var drumCount = 0;
// for (var i = 0; i < drums.length; i++) {
//   drums[i].addEventListener("click", function() {
//     alert("I got clicked!");
//   });
// }
drums.forEach((item) => {
  item.addEventListener("click", (drumCount) => {
    alert("I got clicked!");
  });
  drumCount++;
});
console.log(drumCount);
