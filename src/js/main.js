// Custom scripts

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header").classList.add("_active");
    burgerMenu.classList.add("_scrollColor")
    document.body.classList.add("_top");
  } else {
    document.querySelector(".header").classList.remove("_active");
    document.body.classList.remove("_top");
    burgerMenu.classList.remove("_scrollColor")
  }
}



// swiper
const swiper = new Swiper(".swiper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {},
});

//burger js
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  if (burgerMenu.classList.contains("_active")) {
    document.querySelector(".header__leftNav").classList.add("_active");
    burgerMenu.classList.add("_changeColor");
  } else {
    document.querySelector(".header__leftNav").classList.remove("_active");
    burgerMenu.classList.remove("_changeColor");
  }
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

//tabs
function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='block') {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)
  function hideTabContent() {
      content.forEach(item => {
          item.style.display = 'none'
      });
      tab.forEach(item => {
          item.classList.remove(activeClass)
      });
  }
  function showTabContent(i = 0) {
     content[i].style.display = display
     tab[i].classList.add(activeClass)
  }
  hideTabContent()
  showTabContent()
  header.addEventListener('click', e => {
      const target = e.target
      if (target.classList.contains(tabSelector.replace(/\./, '')) || 
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
          tab.forEach((item, i) => {
              if ( target == item || target.parentNode == item ) {
                  hideTabContent()
                  showTabContent(i)
              }
          });
      }
  })
}


tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
