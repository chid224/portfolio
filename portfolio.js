// const typed = new typed(".multiple-text",{
//     strings:["Web Designer", "Graphics Designer", "Web Developer"
// ],
// typedSpeed: 100,
// backSpeed: 100,
// backDelay: 1000,
// loop: true
// })
// alert("hello")
document.addEventListener("DOMContentLoaded", function () {
    const options = {
      strings: ['DEVELOPER', 'UIUX DESIGNER', 'GRAPHIC DESIGNER' ],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    };
  
    const multiTextElement = document.querySelector('.multiple-text');
    let currentTextIndex = 0;
    let currentText = '';
    let isDeleting = false;
  
    function type() {
      const fullText = options.strings[currentTextIndex];
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }
  
      multiTextElement.textContent = currentText;
      let typeSpeed = options.typeSpeed;
    if (isDeleting) {
      typeSpeed /= 5; // Faster when deleting
    }

    if (!isDeleting && currentText === fullText) {
      typeSpeed = options.backDelay;
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % options.strings.length;
    }

    setTimeout(type,typeSpeed);
}
type()

})
;
let lastscrollY = 0
const navbar = document.querySelector(".header")
window.addEventListener("scroll", () =>{
  const currentScrollY = window.scrollY
  if(currentScrollY > lastscrollY){
    navbar.classList.add("hide")
  }
  else{
    navbar.classList.remove("hide")
  }
  lastscrollY = currentScrollY
})

     const Mackkas = document.querySelectorAll('.project1 img');
     Mackkas.forEach(img => {
        let video = document.getElementById("mackkas_vid");
        img.addEventListener('mouseenter', () => {
            video.play();
            video.style.opacity = 1;
        });
        img.addEventListener('mouseleave', () => {
            video.pause();
            video.style.opacity = 0;
        });
    });
