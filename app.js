//Menu
const divtoShow = 'nav .menu';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.m-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
            document.body.classList.add('menu-visible');
        }
    }, 250);
});

// Automatically close by clicking outside the menu
document.addEventListener('click', (e) => {
    if (!e.target.closest(divtoShow) && e.target !== divTrigger && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show');
        document.body.classList.remove('menu-visible');
    }
});

//search

const sTrigger = document.querySelector('.s-trigger');
const addclass = document.querySelector('.site');
sTrigger.addEventListener('click', () => {
addclass.classList.toggle('showsearch')
})


//Swiper
const sliderThumb = new Swiper('.thumb-nav', {
    spaceBetween: 10,
    slidePerView: 3,
    slidePerGroup: false,
    breakpoints:{
        992:{
            direction:'vertical'
        }
    }
  });

const theSlider = new Swiper('.thumb-big', { 
    slidePerView: 1,
    pagination: {
        el: '.swiper-pagination',
      },

    thumbs: {
        swiper: sliderThumb,
    }
  });
  