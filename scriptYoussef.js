// document.addEventListener("DOMContentLoaded", function () {
//   const fixedBackground = document.getElementById("changingText");
//   const background2 = document.querySelector(".background2");

//   window.addEventListener("scroll", function () {
//     const backgrounds = document.querySelectorAll(".background1, .background2");

//     backgrounds.forEach((background, index) => {
//       const rect = background.getBoundingClientRect();
//       if (rect.top <= 0 && rect.bottom >= 0) {
//         // The background is currently visible
//         switch (index) {
//           case 0:
//             fixedBackground.style.color = "black";
//             break;
//           case 1:
//             fixedBackground.style.color = "white";
//             break;
//           default:
//             fixedBackground.style.color = "black"; // Default color
//         }
//       }
//       // Change color instantly when starting to enter the other div
//       if (rect.top <= window.innerHeight && rect.bottom >= 0) {
//         fixedBackground.style.color = "white";
//       } else {
//         fixedBackground.style.color = "black";
//       }
//     });
//   });
// });
// console.log(window.scrollY);
