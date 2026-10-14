// Teaser clips play only while visible and never under prefers-reduced-motion;
// otherwise the poster frame stands in, as it does without JavaScript.
(function () {
  var clips = document.querySelectorAll("video.clip");
  if (!clips.length || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) {
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.25 });
  clips.forEach(function (v) { seen.observe(v); });
})();
