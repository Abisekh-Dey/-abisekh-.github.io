document.addEventListener("contextmenu", (e) => {//contextmenu is the menu that appears when we do right click on the mouse 
  e.preventDefault();//e.preventDefault() works to disable the contextmenu when we do right click on the page
});
document.addEventListener("keydown", function (e) {
  // Prevent Ctrl+U
  if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
  }

  // Prevent Ctrl+Shift+I (Inspect Element)
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
  }

  // Prevent F12 (Developer Tools)
  if (e.key === 'F12') {
      e.preventDefault();
  }

  // Prevent Ctrl+Shift+C (Inspect Element)
  if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
  }

  // Prevent Ctrl+Shift+J (Console)
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
  }

  // Prevent Ctrl+S (Save)
  if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
  }

  // Prevent Ctrl+P (Print)
  if (e.ctrlKey && e.key === 'p') {
      e.preventDefault();
  }
});
if(window.innerWidth>=319 && window.innerWidth<=460){
  ele=document.querySelector("#element-down");
  ele.innerHTML="<h3 id='element-down'>And I'm an </h3><span id='element'></span>"
}
// Typed.js configuration and initialization
const typed = new Typed("#element", {//#element': This specifies the target HTML element where Typed.js will display the typewriting effect. In my HTML file (index.html), I have a span element with the ID "element" (<span id="element"></span>). Typed.js will target this element to display the text strings.
    //By passing '#element' as the first argument to new Typed(), I'm telling Typed.js to target the HTML element with the ID "element" for displaying the typewriting effect. This is where the text strings specified in the strings option will be typed out.
    strings: ["E.T.C Engineer", "Automobile Engineer","GUI Developer","Web Developer","Full-Stack Developer"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true,
  });

//Scroll Reveal//
ScrollReveal({
    distance: "80px",// Specifies the distance elements move when revealed
    duration: 2000,// Specifies the duration of the reveal animation in milliseconds
    delay: 200,// Specifies the delay before the reveal animation starts
})

ScrollReveal().reveal(".home-content,heading",{origin: "top"});// Specifies the direction from which the elements should be revealed; here direction is "top"/Animation will start from the "top"
ScrollReveal().reveal(".home-img,.services-container,.paper-box,.contact form",{origin: "bottom"});// Specifies the direction from which the elements should be revealed; here direction is "bottom"Animation will start from the "bottom"
ScrollReveal().reveal(".home-content h1,.skill-card,.about-img",{origin: "left"});// Specifies the direction from which the elements should be revealed; here direction is "left"Animation will start from the "left"
ScrollReveal().reveal(".home-content p,.about-content",{origin: "right"});// Specifies the direction from which the elements should be revealed; here direction is "right"Animation will start from the "right"
//=============How To Use Scroll Reveal===============//
// Initialization: We can set up default configuration settings that will apply to all reveal animations. This is done by calling ScrollReveal with an object containing the settings.
// Using reveal Method: We can then use the reveal method to target specific elements and apply animations to them. The reveal method takes two parameters:
// The first parameter is a string representing the CSS selector of the elements to animate.
// The second parameter is an object containing the specific settings for the animation of those elements.

// Initialization: Set global settings for all animations.
// Reveal from Top: Target specific elements to reveal from the top.
// Reveal from Bottom: Target specific elements to reveal from the bottom.
// Reveal from Left: Target specific elements to reveal from the left.
// Reveal from Right: Target specific elements to reveal from the right.


let about_btn=document.querySelector("#about-btn");
let about_para=document.querySelector("#about-p");
let about_section=document.querySelector("#about")
about_btn.onclick=(e)=>{
  e.preventDefault();
  if(about_btn.innerText==="Read More"){
    if(window.innerWidth>=250 && window.innerWidth<=318){
      about_section.style.height="2350px";}
    else if(window.innerWidth>=319 && window.innerWidth<=474){
    about_section.style.height="1940px";}
    else if(window.innerWidth>=475 && window.innerWidth<=600){
      about_section.style.height="1650px";}
    else if(window.innerWidth>=601 && window.innerWidth<=768){
      about_section.style.height="1450px";}
    else if(window.innerWidth>=769 && window.innerWidth<=1270){
        about_section.style.height="1500px";}
    else{
      about_section.style.height="1450px";
    }
    about_section.style.transition=".5s ease"
    el=document.querySelector(".about-img");
    el.style.alignItems="center";
    about_para.innerHTML=about_para.innerHTML+`
    <br>
    <h3>Education</h3>
    <hr>
    <ul style='padding-top: 10px;>
      <li>
        <div> 
          <h3 style='font-size: 16px';>BTECH in ELECTRONICS AND COMMUNICATION ENGINEERING [Pursuing: 2022-2025]</h3>
          <p style='font-size: 16px';>HOOGHLY ENGINEERING AND TECHNOLOGY COLLEGE</p>
        </div>
      </li>
      <li>
        <div>
          <h3 style='font-size: 16px';>DIPLOMA in AUTOMOBILE ENGINEERING [2019-2022]</h3>
          <p style='font-size: 16px';>RANAGHAT GOVERNMENT POLYTECHNIC</p>
        </div>
      </li>
      <li>
        <div>
          <h3 style='font-size: 16px';>HIGHER SECONDARY [2017-2019]</h3>
          <p style='font-size: 16px';>BHATPARA AMARKRISHNA PATHSALA (H.S)</p>
        </div>
      </li>
      <li>
        <div>
          <h3 style='font-size: 16px';>SECONDARY [2017]</h3>
          <p style='font-size: 16px';>BHATPARA AMARKRISHNA PATHSALA (H.S)</p>
        </div>
      </li>
    </ul>
    <h3>Internship & Training</h3>
    <hr>
    <p>Will be added soon...</p>
    <h3>Language Proficiency</h3>
    <hr>
    <ol>
      <li><p style='font-size: 16px'>Bengali [Read, Write & Speak]</p></li>
      <li><p style='font-size: 16px'>English [Read, Write & Speak]</p></li>
      <li><p style='font-size: 16px'>Hindi [Speak]</p></li>
    </ol>
    <h3>Experience</h3>
    <hr>
    <p>Fresher</p>
    <h3>Interests</h3>
    <hr>
    <p style='font-size: 16px'>Playing Cricket, Workout, Listening Music & Watching Movies</p>`;
    about_btn.innerText="Read Less";
  }
  else if(about_btn.innerText==="Read Less"){
    about_para.innerText="I am an Electronics and Communication Engineer with a background in Automobile Engineering, now passionately transitioning into the IT and software development field. My diverse technical experience has equipped me with a solid foundation in problem-solving and innovative thinking. I am eager to leverage my engineering skills to contribute to cutting-edge software projects and develop solutions that drive technological advancement.";
    about_btn.innerText="Read More";
    if(window.innerWidth>=250 && window.innerWidth<=318){
      about_section.style.height="1300px";}
    else if(window.innerWidth>=319 && window.innerWidth<=474){
      about_section.style.height="1050px";}
    else if(window.innerWidth>=475 && window.innerWidth<=600){
      about_section.style.height="800px";}
    else if(window.innerWidth>=601 && window.innerWidth<=768){
      about_section.style.height="700px";}
      else if(window.innerWidth>=769 && window.innerWidth<=1270){
        about_section.style.height="850px";}
    else{
      about_section.style.height="700px";
    }
    about_section.style.transition=".5s ease"
    el=document.querySelector(".about-img");
    el.style.alignItems="";//to remove the alignItems property I assigned an empty string
  }
}

let form=document.querySelector("form");
        // let msg=document.querySelector("#msg");
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            let form= e.target;
            let data= new FormData(form);
            // form.style.height="530px";
            // msg.innerText="Sending Message...";
            // msg.style.paddingTop="10px";
            // msg.style.background="none";
            // msg.style.color="white";
            fetch("https://script.google.com/macros/s/AKfycbwB5PYkivIPWUntHGJbl1N5q36MRmH0wJqqQP6y8cIg4a0Lk_Y8fLK-IKsD79cXd7Q2/exec",{
                method: "POST",
                body: data
            })
            .then(response => {
                alert( "Message Sent Successfully....");
                form.reset();
                // setTimeout(function () {
                //      msg.innerText = "";
                //      form.style.height="500px";
                // }, 5000)
           })
        })
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("visibility");//It adds visibility class if the visibility class is not added in the class navbar when anyone click on the menuicon and removes the visibility class when anyone click again on the menuicon
};

window.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  let home = document.querySelector(".home");
  let about = document.querySelector(".about");
  let service = document.querySelector(".services");
  let skill = document.querySelector(".skills");
  let contact = document.querySelector(".contact");
  let paper = document.querySelector(".papers");
  let about_btn = document.querySelector("#about-btn");

  const headerSectionHeight = header.offsetHeight;
  const homeSectionHeight = home.offsetHeight;
  const aboutSectionHeight = about.offsetHeight;
  const serviceSectionHeight = service.offsetHeight;
  const skillSectionHeight = skill.offsetHeight;
  const contactSectionHeight = contact.offsetHeight;
  const paperSectionHeight = paper.offsetHeight;
  const homeSectionHeightReduced=homeSectionHeight - headerSectionHeight ;
  // if(window.innerWidth>=375 && window.innerWidth<=474){
  //   height_increment = about_btn && about_btn.innerText === "Read Less" ? 850 : 0;
  // }
  // else if(window.innerWidth>=475 && window.innerWidth<=600){
  //   height_increment = about_btn && about_btn.innerText === "Read Less" ? 850 : 0;
  // }
  // else if(window.innerWidth>=601 && window.innerWidth<=768){
  //   height_increment = about_btn && about_btn.innerText === "Read Less" ? 750 : 0;
  // }
  // else{
  //   height_increment = about_btn && about_btn.innerText === "Read Less" ? 750 : 0;
  // }
  const sections = [
    { id: "#nav-item-1", start: 0, end: homeSectionHeightReduced},
    { id: "#nav-item-2", start: homeSectionHeightReduced, end: homeSectionHeightReduced + aboutSectionHeight},
    { id: "#nav-item-3", start: homeSectionHeightReduced + aboutSectionHeight, end: homeSectionHeightReduced + aboutSectionHeight + serviceSectionHeight },
    { id: "#nav-item-4", start: homeSectionHeightReduced + aboutSectionHeight + serviceSectionHeight, end: homeSectionHeightReduced + aboutSectionHeight + serviceSectionHeight + skillSectionHeight },
    { id: "#nav-item-5", start: homeSectionHeightReduced + aboutSectionHeight + serviceSectionHeight + skillSectionHeight, end: homeSectionHeightReduced + aboutSectionHeight + serviceSectionHeight + skillSectionHeight + contactSectionHeight },
    { id: "#nav-item-6", start: homeSectionHeightReduced + aboutSectionHeight + serviceSectionHeight + skillSectionHeight + contactSectionHeight, end: Infinity }
  ];

  const yOffset = window.scrollY;//It determines how much scroll occurs
  
  sections.forEach((array_elements) => {//Call back Function
    const el = document.querySelector(array_elements.id);
    if (yOffset >= array_elements.start && yOffset < array_elements.end) {
      el.classList.add("active");//I didn't used setAttribute because it will replace all existing classes on the element el1;So I am just appending the properties of a new class "active" in  the element el1; for more detaile see HTML Tutorial Script3
    } else {
      el.classList.remove("active");
    }
  });

  if (yOffset > 80) {
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("visibility");
  }
});

        // const homeElement = document.querySelector('.home');
        // if(window.innerWidth==601){
        //   homeElement.style.height="1000px";
        // }

        // let menuIcon=document.querySelector("#menu-icon");
        // let navbar=document.querySelector(".navbar");
        
        // menuIcon.onclick=()=>{
            
        //     menuIcon.classList.toggle("fa-xmark");
        //     navbar.classList.toggle("visibility");//It adds visibility class if the visibility class is not added in the class navbar when anyone click on the menuicon and removes the visibility class when anyone click again on the menuicon
        // };

        // window.addEventListener("scroll", () => {
        //   const el1 = document.querySelector("#nav-item-1");
        //     const yOffset1 = window.scrollY;//It determines how much scroll occurs
        //     if (yOffset1 <=570) {
        //         el1.classList.add("active");//I didn't used setAttribute because it will replace all existing classes on the element el1;So I am just appending the properties of a new class "active" in  the element el1; for more detaile see HTML Tutorial Script3
        //     } 
        //     else {
        //         el1.classList.remove("active");
        //     }

        //     const el2 = document.querySelector("#nav-item-2");
        //     let about_btn=document.querySelector("#about-btn");
        //     if(about_btn.innerText==="Read More"){
        //         height_increment=0;
        //     }
        //     else if(about_btn.innerText==="Read Less"){
        //         height_increment=750;
        //     }
        //     const yOffset2 = window.scrollY;
        //     if (yOffset2 >= 570 && yOffset2 <=1270+height_increment) {
        //         el2.classList.add("active");
        //     } 
        //     else {
        //         el2.classList.remove("active");
        //     }

        //     const el3 = document.querySelector("#nav-item-3");
        //     const yOffset3 = window.scrollY;
        //     if (yOffset3 >= 1270+height_increment && yOffset3 < 2020+height_increment) {
        //         el3.classList.add("active");
        //     } 
        //     else {
        //         el3.classList.remove("active");
        //     }

        //     const el4 = document.querySelector("#nav-item-4");
        //     const yOffset4 = window.scrollY;
        //     if (yOffset4 >= 2020 +height_increment&& yOffset4 < 2670+height_increment) {
        //         el4.classList.add("active");
        //     } 
        //     else {
        //         el4.classList.remove("active");
        //     }

        //     const el5 = document.querySelector("#nav-item-5");
        //     const yOffset5 = window.scrollY;
        //     if (yOffset5 >= 2670+height_increment && yOffset5 < 4120+height_increment) {
        //         el5.classList.add("active");
        //     } 
        //     else {
        //         el5.classList.remove("active");
        //     }

        //     const el6 = document.querySelector("#nav-item-6");
        //     const yOffset6 = window.scrollY;
        //     if (yOffset6 >= 4120 +height_increment) {
        //         el6.classList.add("active");
        //     } 
        //     else {
        //         el6.classList.remove("active");
        //     }

        //     if(window.scrollY>80){
        //       menuIcon.classList.remove("fa-xmark");
        //       navbar.classList.remove("visibility");
        //     }
  
        // })

// let header=document.querySelector(".header");
// const headerSectionHeight = header.offsetHeight;
// console.log('Height of .home section:', headerSectionHeight);//
        

// let home=document.querySelector(".home");
// const homeSectionHeight = home.offsetHeight;
// console.log('Height of .home section:', homeSectionHeight);//689

// let about=document.querySelector(".about");
// const aboutSectionHeight = about.offsetHeight;
// console.log('Height of .about section:', aboutSectionHeight);//662

// let service=document.querySelector(".services");
// const serviceSectionHeight = service.offsetHeight;
// console.log('Height of .services section:', serviceSectionHeight);//685

// let skill=document.querySelector(".skills");
// const skillSectionHeight = skill.offsetHeight;
// console.log('Height of .skills section:', skillSectionHeight);//1097

// let contact=document.querySelector(".contact");
// const contactSectionHeight = contact.offsetHeight;
// console.log('Height of .contact section:', contactSectionHeight);//1378

// let paper=document.querySelector(".papers");
// const paperSectionHeight = paper.offsetHeight;
// console.log('Height of .papers section:', paperSectionHeight);//720

// window.addEventListener("scroll",()=>{
//   if(window.pageYOffset>=0 && window.pageYOffset<=685){
//     el1=document.querySelector("#nav-item-1");
//     el1.style.color="red";
//   }
// })