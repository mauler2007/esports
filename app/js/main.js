document.addEventListener("DOMContentLoaded", function () {

  // ================start popUpcontentVisibility================
  const btnNoForm = document.querySelectorAll('[data-reg="contentVisibilityBtn"]');
  const popUpcontentVisibility = document.getElementById('popUpcontentVisibility');
  const closepopUpcontentVisibility = document.querySelector('.popUp--contentVisibility .popUp__close');

  btnNoForm.forEach(function (item) {
    item.addEventListener('click', function () {
      popUpcontentVisibility.classList.toggle('show');
    })
  })

  closepopUpcontentVisibility.addEventListener('click', () => {
    popUpcontentVisibility.classList.toggle('show');
  })
  // ================end popUpcontentVisibility================


  //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION
  var swhithLang = document.querySelectorAll(
    ".langCheck__item:not(.selected) input"
  );
  swhithLang.forEach(function (item) {
    item.addEventListener("change", function () {
      var val = item.name;
      location.reload();
      document.cookie = `content_lang=${val}; max-age=3600`;
    });
  });
  //  SWHITCH LOCALISATION  SWHITCH LOCALISATION  SWHITCH LOCALISATION

  function getLangValue() {

    let cookies = document.cookie,
      allCookies = cookies.split(';');

    for (everyCookie of allCookies) {
      let cookie = everyCookie.trim().split('=');

      if (cookie[0] == 'content_lang') {
        langFromCookies = cookie[1];
        return langFromCookies;
      }
    }
    return;
  }

  langFromCookies = getLangValue();
  console.log('langFromCookies', langFromCookies);


});