// function downloadCV() {
//     const link = document.createElement("a");
//     link.href = "Resume.pdf";
//     link.download = "Resume.pdf";
//     link.click();
//   }
  
 
//   // Toggle the mobile menu visibility
//   menuButton.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
//   });
// document.getElementById('downloadCvBtn').addEventListener('click', function () {
//     // Replace 'path/to/Mark-Junior-CV.pdf' with the actual file path
//     window.location.href = 'Resume.pdf';
//   });
document.getElementById('downloadCvBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'Resume.pdf'; // Update this with the correct path
    link.download = 'Resume.pdf'; // File name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  
  !(function() {
    var analytics = (window.analytics = window.analytics || []);
    if (!analytics.initialize)
      if (analytics.invoked)
        window.console &&
          console.error &&
          console.error("Segment snippet included twice.");
      else {
        analytics.invoked = !0;
        analytics.methods = [
          "trackSubmit",
          "trackClick",
          "trackLink",
          "trackForm",
          "pageview",
          "identify",
          "reset",
          "group",
          "track",
          "ready",
          "alias",
          "debug",
          "page",
          "once",
          "off",
          "on"
        ];
        analytics.factory = function(t) {
          return function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(t);
            analytics.push(e);
            return analytics;
          };
        };
        for (var t = 0; t < analytics.methods.length; t++) {
          var e = analytics.methods[t];
          analytics[e] = analytics.factory(e);
        }
        analytics.load = function(t, e) {
          var n = document.createElement("script");
          n.type = "text/javascript";
          n.async = !0;
          n.src =
            "https://cdn.segment.com/analytics.js/v1/" +
            t +
            "/analytics.min.js";
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(n, a);
          analytics._loadOptions = e;
        };
        analytics.SNIPPET_VERSION = "4.1.0";
        analytics.load("FQ5NJmRc6LrFKVAC6ofHlSU7WIwGAdj5");
        analytics.page();
      }
  })