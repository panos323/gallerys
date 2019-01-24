$(document).ready(function() {
    
    $(".stack").lettering();

    //Swiper 3D Coverflow Effect Slide
    var swiper = new Swiper('.FirstSwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination1',
        },
      });
      //Swiper 3D Coverflow Effect Slide


      //Swiper 3D Cube Effect
      var swiper2 = new Swiper('.SecondSwiper', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: '.swiper-pagination2',
        },
      });
      //Swiper 3D Cube Effect


      //Swiper Paganation Progress
      var swiper3 = new Swiper('.ThirdSwiper', {
        pagination: {
          el: '.swiper-pagination3',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      //Swiper Paganation Progress


      //Swiper Vertical Slider
      var swiper = new Swiper('.FourthSwiper', {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination4',
          clickable: true,
        },
      });
      //Swiper Vertical Slider


      //Multiple Slides per view
      var swiper = new Swiper('.FifthSwiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination5',
          clickable: true,
        },
        breakpoints: {
            1064: {
              slidesPerView: 3
            },
            
           984: {
               slidesPerView: 2       
           },

           810: {
               slidesPerView: 2
           },
           
           590: {
            slidesPerView: 2
           },

           473: {
            slidesPerView: 1
           },

           375: {
            slidesPerView: 1
           }
        } //breakpoints

      });
      //Multiple Slides per view


      //3D Flip Effect
      var swiper = new Swiper('.SixthSwiper', {
        effect: 'flip',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination6',
        },
        navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3',
        },
      });
      //3D Flip Effect

  }); //PAGE LOADED