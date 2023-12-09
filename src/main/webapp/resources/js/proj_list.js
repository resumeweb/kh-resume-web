const MAX_WIDTH = 90;
const MIN_WIDTH = 70;
const MAX_HEIGHT = 35;
const MIN_HEIGHT = 25;

AOS.init();
const init = () => {
    
    // .project-box 요소 
    const projectBoxArr = document.querySelectorAll(".propject-box");
    // 스크롤
    
    // console.log(projectBoxArr);

    for(let projectBox of projectBoxArr) {
        
        console.log("박스 하나")
        console.log(projectBox);
        
        const sizeInfo = getBoxSize();

        console.log(sizeInfo);

        projectBox.style.width = sizeInfo.width + "%";
        projectBox.style.height = sizeInfo.height + "%";
    }
};
const getBoxSize = () => {  
    // 최소값으로 초기화
    let width = MIN_WIDTH;
    let height = MIN_HEIGHT;

    // 너비 구하기
    width = Math.floor(Math.random() * (MAX_WIDTH - MIN_WIDTH + 1)) + MIN_WIDTH;

    // 높이 구하기
    height = Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT + 1)) + MIN_HEIGHT;
    
    return {width: width, height: height}
}

init();

const pageContainerSwiper = new Swiper('#pageContainer', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  mousewheel: {
    forceToAxis: true,
  },
});

const elements = document.querySelectorAll('.project-box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 요소가 화면에 보일 때 AOS 애니메이션 실행
      const element = entry.target;
      const animation = element.getAttribute('data-aos');
      element.classList.add('animated', animation);
    }
  });
}, {
  root: null,
  threshold: 0.5 // 요소가 화면에 50% 이상 보일 때 감지
});

elements.forEach(element => {
  observer.observe(element);
});