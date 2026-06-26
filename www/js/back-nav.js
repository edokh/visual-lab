(function () {
  'use strict';

  function goHome() {
    window.location.href = 'index.html';
  }

  document.addEventListener('deviceready', function () {
    document.addEventListener('backbutton', function (e) {
      e.preventDefault();
      goHome();
    }, false);
  }, false);
})();
