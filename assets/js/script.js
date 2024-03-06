const addEventOnElements = (elements, typeen, callback) => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener(typeen, callback);
    }
  };
  
  const navbar = document.querySelector('[data-navbar]');
  const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
  const overlay = document.querySelector('[data-overlay]');
  
  const toggleNavBar = function () {
    navbar.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
    overlay.classList.toggle('active');
  };
  

  addEventOnElements([navToggleBtn, overlay], 'click', toggleNavBar);
  const parallexElements =document.querySelectorAll('[data-parallax]')
  window.addEventListener('mousemove',event=>{
    for (let i = 0; i < parallexElements.length; i++) {
      const moveElX=(event.clientX/window.innerWidth)*Number(parallexElements[i].dataset.parallaxSpeed)
      // console.log(Number(parallexElements[i].dataset.parallaxSpeed))
      const moveElY=(event.clientY/window.innerHeight)*Number(parallexElements[i].dataset.parallaxSpeed)                      
      parallexElements[i].animate({
        transform:`translate(${moveElX}px , ${moveElY}px)`
      },{duration:500,fill:'forwards'})
    }
  })