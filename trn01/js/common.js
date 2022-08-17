window.addEventListener("DOMContentLoaded", () => {
  const H1 = document.querySelector("h1");
  const TOGGLE = function () {
    //console.log(this);
    this.classList.toggle("on");
  };
  H1.addEventListener("click", TOGGLE);

  /*H1.innerText = `h2
    tetsdfsd
  `;*/
  // H1.addEventListener("click", function () {
  //   this.style.color = `pink`;
  // });
  /*
    위와 같은경우 아래와 같이 바꿀 수 있음!! 
    addEventListener의 콜백함수에서는 this에 해당 이벤트 리스너가 호출된 
    엘리먼트가 바인딩되도록 정의되어 있습니다.
    이처럼 이미 this의 값이 정해져있는 콜백함수의 경우, 
    화살표 함수를 사용하면 기존 바인딩 값이 사라지고 
    상위 스코프(이 경우엔 전역 객체)가 바인딩되기 때문에 의도했던대로 동작하지 않을 수 있습니다. 
    물론 상위 스코프의 속성들을 쓰려고 의도한 경우라면 사용할 수 있습니다.
    이러한 이유로 아래로 바꿔야함!
  */
  /*H1.addEventListener("click", (e) => {
    e.currentTarget.style.color = `red`;
    console.log(e.currentTarget, e.target);
    핵심은 currentTarget은 이벤트 핸들러가 부착된 것을 가리킨다는 것이다!
    즉, event.target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 
    내가 클릭한 자식 요소를 반환한다. 하지만 currentTarget은 이벤트가 부착된 부모의 위치를 반환한다.    
    
  });*/
  //////////////swiper
  const Item = document.querySelectorAll("figure");
  const Num = document.querySelector(".num");
  const mainSwiper = new Swiper(".mainSwiper", {
    // Optional parameters
    //direction: "vertical",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "fade", // 페이드 효과 사용
    // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    /*on: {
      init: function () {
        console.log("swiper initialized");
      },
    },*/
    on: {
      slideChangeTransitionEnd: function () {
        slideAll = document.querySelectorAll(".swiper-slide");
        realSlid = document.querySelector(".swiper-slide-active");
        CloneSlide = document.querySelectorAll(
          ".swiper-slide-duplicate"
        ).length; //복제품 제거
        //console.log(CloneSlide);
        slideAll.forEach((element, i) => {
          element.classList.remove("on");
        });
        realSlid.classList.add("on");
        //alert(this.realIndex);//현재 인덱스
        Num.innerText = `${this.realIndex + 1} / ${
          this.slides.length - CloneSlide
        }`;
      },
    },
  });
  // mainSwiper.on("slideChange", function () {
  //   console.log("slide changed");
  // });
  const last_c = document.querySelector("main").lastElementChild;
  const last_ch = last_c.offsetTop - 300;
  window.addEventListener("scroll", function () {
    let sct = window.scrollY;
    const SCE_ELE = document.querySelectorAll(".screvent");
    //console.log(sct);
    sct > 0
      ? document.querySelector("header").classList.add("on")
      : document.querySelector("header").classList.remove("on");
    SCE_ELE.forEach((el, index) => {
      const idx = index + 1;
      //el.classList.add("on");
      sct > el.offsetTop - 300
        ? el.classList.add("on")
        : el.classList.remove("on");
    });
    sct >= last_ch ? last_c.classList.add("on") : last_c.classList.remove("on");
  });

  const UL = document.querySelector("nav ul");
  const LI = [...UL.children][1]; //칠드런 나열 - 배열[인덱스번호]
  //console.log(LI);
});

/*
이럴 땐 화살표 함수를 쓰면 안돼요
이렇게 JavaScript의 함수 this 바인딩 문제를 깔끔하게 해결해 준 화살표 함수도 사용해선 안되는 때가 있습니다. 상위 환경의 this를 참조한다는 점이 문제가 될 수도 있거든요. 바로 다음과 같은 경우입니다.

1. 메소드
const cat = {
  name: 'meow';
  callName: () => console.log(this.name);
}

cat.callName();	// undefined
이 같은 경우, callName 메소드의 this는 자신을 호출한 객체 cat이 아니라 함수 선언 시점의 상위 스코프인 전역객체를 가리키게 됩니다. 어차피 일반 함수를 사용해도 메소드로 호출하면 자신을 호출한 객체를 가리키기 때문에 메소드에서 화살표 함수를 쓸 필요는 없겠죠?😉

2. 생성자 함수
const Foo = () => {};
const foo = new Foo()	// TypeError: Foo is not a constructor
화살표 함수를 생성자함수로 사용하면 에러가 납니다. 생성자 함수로는 사용할 수 없게 만들어졌어요!

3. addEventListener()의 콜백함수
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log(this);	// Window
  this.innerHTML = 'clicked';
});

button.addEventListener('click', function() {
   console.log(this);	// button 엘리먼트
   this.innerHTML = 'clicked';
});
*/
