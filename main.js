var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})
(function ($) {
  $('.nav-tabs').responsiveTabs();
})(jQuery);

@media (min-width:768px) {
  .responsive-tabs .dropdown-arrow {
    display:none;
  }
}
@mediascreen and (max-width:767px) {
  /* styles here */
}
