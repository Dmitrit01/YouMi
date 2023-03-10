$(document).ready(function() {
    //Бургер
    $('.menu__burger').click(function() {
        $('.menu__burger,.menu__wrapper').toggleClass('active');
        $('body').toggleClass('lock');
    });
    //Акардеон
    $('.item-ask__icon_1').click(function() {
        $('.item-ask__icon_1,.item-ask__text_1').toggleClass('open');
        
    });
    $('.item-ask__icon_2').click(function() {
        $('.item-ask__icon_2,.item-ask__text_2').toggleClass('open');
        
    });
    $('.item-ask__icon_3').click(function() {
        $('.item-ask__icon_3,.item-ask__text_3').toggleClass('open');
        
    });
    $('.item-ask__icon_4').click(function() {
        $('.item-ask__icon_4,.item-ask__text_4').toggleClass('open');
        
    });
    $('.item-ask__icon_5').click(function() {
        $('.item-ask__icon_5,.item-ask__text_5').toggleClass('open');
        
    });
    $('.item-ask__icon_6').click(function() {
        $('.item-ask__icon_6,.item-ask__text_6').toggleClass('open');
        
    });
    //Слайдеры=================================================================================
    //Слайдер-online
    $('.online__slider').slick({
        dots:true,
        arrows:false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                   slidesToShow: 1,
                   dots:true,
                }
            },
        ]
    });
    //Слайдер-together--самопрокрутка
    $('.slider-together').slick({
        dots:false,
        arrows:false,
        slidesToShow: 1,
        infinite: true,
        variableWidth: true,
        rows:2,
        autoplay:true,
        autoplaySpeed:500,
    });
    //Слайдер-specialist
    $('.slider-specialist').slick({
        dots:true,
        arrows:false,
        slidesToShow: 1,
        rows:1,
    });
    //Слайдер-person
    $('.slider-person').slick({
      dots:false,
      arrows:true,
      slidesToShow: 2,
      rows:1,
      responsive: [
        {
            breakpoint: 640,
            settings: {
               slidesToShow: 1,
               
            }
        },
    ]
    });
    //Cлайдер-write--самопрокрутка
    $('.slider-right').slick({
      dots:false,
      arrows:false,
      slidesToShow: 1,
      infinite: true,
      variableWidth: true,
      rows:1,
      autoplay:true,
      autoplaySpeed:500,
    });
    //Слайдер-rates
    $('.rates-slider').slick({
      dots:false,
      arrows:true,
      slidesToShow: 2,
      responsive: [
          {
              breakpoint: 700,
              settings: {
                 slidesToShow: 1,
                 
              }
          },
      ]
    });
    //Слайдер-wait
    $('.slider-wait').slick({
      dots:true,
      arrows:false,
      slidesToShow: 2,
      responsive: [
          {
              breakpoint: 640,
              settings: {
                 slidesToShow: 1,
                 
              }
          },
      ]
    });
    //Слайдер-year
    $('.slider-year').slick({
      dots:true,
      arrows:false,
      slidesToShow: 6,
      asNavFor:'.slider-big',
      responsive: [
          {
              breakpoint: 992,
              settings: {
                 slidesToShow: 5,
                 
              }
          },
          {
            breakpoint: 768,
            settings: {
               slidesToShow: 4,
               
            }
        },
        {
          breakpoint: 640,
          settings: {
             slidesToShow: 2,
             
          }
      },
      {
        breakpoint: 480,
        settings: {
           slidesToShow: 1,
           
        }
    },
      ]
    });
    //Cлайдер-big-year
    $('.slider-big').slick({
      asNavFor:'.slider-year',
      dots:false,
      arrows:true,
      slidesToShow: 1,
    });
});


//Динамический адаптив
class DynamicAdapt {
    constructor(type) {
      this.type = type
    }
  
    init() {
      // массив объектов
      this.оbjects = []
      this.daClassname = '_dynamic_adapt_'
      // массив DOM-элементов
      this.nodes = [...document.querySelectorAll('[data-da]')]
  
      // наполнение оbjects объктами
      this.nodes.forEach((node) => {
        const data = node.dataset.da.trim()
        const dataArray = data.split(',')
        const оbject = {}
        оbject.element = node
        оbject.parent = node.parentNode
        оbject.destination = document.querySelector(`${dataArray[0].trim()}`)
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767'
        оbject.place = dataArray[2] ? dataArray[2].trim() : 'last'
        оbject.index = this.indexInParent(оbject.parent, оbject.element)
        this.оbjects.push(оbject)
      })
  
      this.arraySort(this.оbjects)
  
      // массив уникальных медиа-запросов
      this.mediaQueries = this.оbjects
        .map(({ breakpoint }) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)
        .filter((item, index, self) => self.indexOf(item) === index)
  
      // навешивание слушателя на медиа-запрос
      // и вызов обработчика при первом запуске
      this.mediaQueries.forEach((media) => {
        const mediaSplit = media.split(',')
        const matchMedia = window.matchMedia(mediaSplit[0])
        const mediaBreakpoint = mediaSplit[1]
  
        // массив объектов с подходящим брейкпоинтом
        const оbjectsFilter = this.оbjects.filter(({ breakpoint }) => breakpoint === mediaBreakpoint)
        matchMedia.addEventListener('change', () => {
          this.mediaHandler(matchMedia, оbjectsFilter)
        })
        this.mediaHandler(matchMedia, оbjectsFilter)
      })
    }
  
    // Основная функция
    mediaHandler(matchMedia, оbjects) {
      if (matchMedia.matches) {
        оbjects.forEach((оbject) => {
          // оbject.index = this.indexInParent(оbject.parent, оbject.element);
          this.moveTo(оbject.place, оbject.element, оbject.destination)
        })
      } else {
        оbjects.forEach(({ parent, element, index }) => {
          if (element.classList.contains(this.daClassname)) {
            this.moveBack(parent, element, index)
          }
        })
      }
    }
  
    // Функция перемещения
    moveTo(place, element, destination) {
      element.classList.add(this.daClassname)
      if (place === 'last' || place >= destination.children.length) {
        destination.append(element)
        return
      }
      if (place === 'first') {
        destination.prepend(element)
        return
      }
      destination.children[place].before(element)
    }
  
    // Функция возврата
    moveBack(parent, element, index) {
      element.classList.remove(this.daClassname)
      if (parent.children[index] !== undefined) {
        parent.children[index].before(element)
      } else {
        parent.append(element)
      }
    }
  
    // Функция получения индекса внутри родителя
    indexInParent(parent, element) {
      return [...parent.children].indexOf(element)
    }
  
    // Функция сортировки массива по breakpoint и place
    // по возрастанию для this.type = min
    // по убыванию для this.type = max
    arraySort(arr) {
      if (this.type === 'min') {
        arr.sort((a, b) => {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
              return 0
            }
            if (a.place === 'first' || b.place === 'last') {
              return -1
            }
            if (a.place === 'last' || b.place === 'first') {
              return 1
            }
            return 0
          }
          return a.breakpoint - b.breakpoint
        })
      } else {
        arr.sort((a, b) => {
          if (a.breakpoint === b.breakpoint) {
            if (a.place === b.place) {
              return 0
            }
            if (a.place === 'first' || b.place === 'last') {
              return 1
            }
            if (a.place === 'last' || b.place === 'first') {
              return -1
            }
            return 0
          }
          return b.breakpoint - a.breakpoint
        })
        return
      }
    }
  }