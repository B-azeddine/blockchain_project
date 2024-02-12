//hiding nav after scolling
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;
  const nav = document.querySelector("nav");
  const logofixed = document.getElementById("logofixed");
  if (currentScrollTop > 0) {
    nav.classList.add("bg-white");
  } else {
    nav.classList.remove("bg-white");
  }

  if (currentScrollTop == 0) {
    logofixed.classList.add("hidden");
  } else {
    logofixed.classList.remove("hidden");
  }

  if (currentScrollTop > lastScrollTop) {
    nav.classList.add("scroll-hide");
    logofixed.classList.remove("hidden");
  } else {
    logofixed.classList.add("hidden");
    nav.classList.remove("scroll-hide");
  }
  lastScrollTop = currentScrollTop;
});

//the fating text
document.addEventListener("DOMContentLoaded", function () {
  let fadingText = document.getElementById("fadingText");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let fadeFactor = 0.002;
    let opacity = 1 - scrollPosition * fadeFactor;

    fadingText.style.opacity = opacity > 0 ? opacity : 0;
  });
});

//loading
let loader = document.querySelector("#loading-page");
window.addEventListener("load", () => {
  loader.style.display = "none";
});
// revealer
ScrollReveal().reveal(".headline", { duration: 3000 });
for (let i = 0; i <= 21; i++) {
  const selector = `.word${i}`;
  const delay = i * 100;
  ScrollReveal().reveal(selector, { delay: delay });
}

ScrollReveal().reveal(".nass1", { duration: 3000 });
ScrollReveal().reveal(".nass2", { duration: 5000 });
ScrollReveal().reveal(".nass3", { duration: 7000 });

for (let i = 1; i <= 3; i++) {
  ScrollReveal().reveal(`.rev${i}`, {
    duration: 3000,
    beforeReveal: (domEl) => {
      if (domEl.classList.contains("video-element")) {
        domEl.play();
      }
    },
  });
}

// video

const video = document.querySelector(".video-container video");

video.addEventListener("mouseenter", function () {
  video.play();
});

video.addEventListener("mouseleave", function () {
  video.pause();
});

// video section mehdi

const mvideo = document.getElementById("video-mehdi");
// When the video ends, execute the loop function
mvideo.addEventListener("ended", function () {
  mvideo.currentTime = mvideo.duration - 2.3;
  mvideo.play();
});

// youssef part

window.addEventListener("scroll", function () {
  let sticky = document.getElementById("sticky");
  let bgblack = document.getElementById("bg-black");
  let ussefimg = document.getElementById("ussefimg");
  let scrollPosition = window.scrollY;

  if (scrollPosition >= 4700) {
    sticky.style.position = "relative";
    bgblack.style.display = "block";
    bgblack.classList.remove = "hidden";
    sticky.classList.remove("sticky");
    ussefimg.classList.remove("hidden");
  } else {
    bgblack.style.display = "";
    bgblack.classList.add = "hidden";
    sticky.style.position = "";
    sticky.classList.add("sticky");
    ussefimg.classList.add("hidden");
  }
});

// color to use #077370

let calcScrollValue = () => {
  const scrollEl = document.querySelector(".cup");
  let pos = document.documentElement.scrollTop;
  if (pos > 100) {
    scrollEl.style.display = "block";
  } else {
    scrollEl.style.display = "none";
  }
  scrollEl.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
