(function () {
  var root = document.documentElement;

  // Theme toggle
  var btn = document.querySelector(".theme-toggle");
  if (btn) {
    var current = function () {
      var set = root.getAttribute("data-theme");
      if (set) return set;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Language switch: remember the choice and keep the current section
  var sw = document.querySelector(".lang-switch");
  if (sw) {
    var base = sw.getAttribute("href");
    if (location.protocol === "file:") base += "index.html";
    sw.addEventListener("click", function (e) {
      e.preventDefault();
      try { localStorage.setItem("lang", sw.getAttribute("data-lang")); } catch (err) {}
      location.href = base + location.hash;
    });
  }
})();
