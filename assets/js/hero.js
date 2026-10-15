// Home page reel: plays while on screen, pauses when scrolled away, and keeps
// each scene's caption in step with the video (a caption switches at the middle
// of the crossfade into its scene). Under prefers-reduced-motion, or without
// JavaScript, the poster frame and the first caption stay.
(function () {
  var v = document.querySelector("video.reel");
  if (!v) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var caps = v.parentNode.querySelectorAll(".reel-caption");
  var scene = parseFloat(v.dataset.scene) || 6;
  var fade = parseFloat(v.dataset.fade) || 0;
  v.addEventListener("timeupdate", function () {
    var i = Math.floor(((v.currentTime + fade / 2) % (caps.length * scene)) / scene);
    for (var k = 0; k < caps.length; k++) caps[k].classList.toggle("is-active", k === i);
  });
  function play() {
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) play(); else v.pause(); });
    }, { threshold: 0.2 }).observe(v);
  } else {
    play();
  }
})();
