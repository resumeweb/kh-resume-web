const MAX_WIDTH = 90;
const MIN_WIDTH = 70;
const MAX_HEIGHT = 35;
const MIN_HEIGHT = 25;
const init = () => {
    // .project-box 요소 
    const projectBoxArr = document.querySelectorAll(".propject-box");
    
    console.log(projectBoxArr);

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

function navigateTo(pageId) {
  // style 속성에 display:none이 없는 요소 가져오기 => 현재 보여지고 있는 페이지
  const currentPage = document.querySelector('.page:not([style*="display: none"])');

  // 파라미터로 받은 id값을 가지고 있는 페이지 요소
  const nextPage = document.getElementById(pageId);

  // 다음 페이지 요소를 화면 위쪽에 숨겨둠
  gsap.set(nextPage, { y: '-100%' });
  nextPage.style.display = 'flex'; // 새 페이지 표시
  nextPage.style.justifyContent = "center"

  // 현재 페이지를 아래쪽으로 숨겨둠
  gsap.to(currentPage, {
    duration: 0.2,
    y: '+100%', // 현재 페이지를 오른쪽으로 밀어 슬라이드 아웃
    onComplete: () => {
      currentPage.style.display = 'none'; // 현재 페이지 숨김
      gsap.to(nextPage, { duration: 0.2, y: '0%' }); // 위에 숨겨둔 페이지를 아래로 밀어 슬라이드 인
    },
  });
}