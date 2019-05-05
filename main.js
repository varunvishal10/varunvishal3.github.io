// Side Menu
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});

    // Slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });

    // Scrollspy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});

    // Material Boxed
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});

    // Auto Complete
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
          "Leh-Ladakh": null,
          "North Sikkim": null,
          "Kashmir": null,
          "Rameshwaram": null,
          "Marine Drive": null,
          "Shimla": null,
          "Manali": null,
          "Kanyakumari": null,
        }
      });

    $(document).ready(function () {
  $('.menu-toggler').on('click',function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
});
