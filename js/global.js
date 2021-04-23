  const mobileMenu = document.querySelector(".mobile-nav");
  const close= document.querySelector('.close');
  const nav= document.querySelector('nav');
  //opening navigation
  mobileMenu.addEventListener('click',function(){

    nav.classList.add('show');

  });
  //close navigation
  close.addEventListener('click',function(){

    nav.classList.remove('show');

  });
// on scroll ticky header
// When the user scrolls the page, execute myFunction
// Get the header
const header =document.querySelector("header");
// Get the offset position of the navbar
const sticky = header.offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

};


  //Accordian js
  //variable decleration
  const accordian = document.querySelectorAll(".accordion");
  const accordianContent =document.querySelectorAll('.accordion-content');
  //looping through list of divs conatianing accordian class and applying click event on the one we are clicking
  for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function() {

      // Toggle between adding and removing the "active" class,
      const activeAccordian=document.querySelectorAll('.active');
      //removing active class
      if(this.classList.contains("active")){
        
        this.classList.remove("active");
      }
      //removing all active classes on all accordian divs and applying only on the one we clicked
      else{
        activeAccordian.forEach(function(el) {
          el.classList.remove('active');;
        });
        this.classList.add("active");
      }
      
      
      // Toggle between hiding and showing the active panel 
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
              panel.style.display = "none";
      } 
      else {
        //hiding other pannels
        
        accordianContent.forEach(function(el) {
          el.style.display = "none";
        });
        panel.style.display = "block";
      }

      
    });
  } 

 

