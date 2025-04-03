projects = [
   {
      id: 1,
      title:"T-Tech Rentals",
      shortDescription:"T-TECH AUTOS is a car rental showcase featuring brands like Toyota, Lexus, and Lamborghini, catering to business, luxury, and adventure needs.",
      githubLink:"https://github.com/Trumptomz01/ttech-rentals",
      liveLink:"https://ttech-rentals.vercel.app/",
      image:"/t-techRentals.png"
   },
   {
      id: 3,
      title:"Company Testimonials",
      shortDescription:"A hands-on tutorial or demo website teaching modern CSS Grid techniques, featuring interactive examples to help users master responsive web layouts.",
      githubLink:"https://github.com/Trumptomz01/",
      liveLink:"https://grid-tutorial-ujqm.vercel.app/",
      image:"/testi.png"
   }
]

let projectSection= "";
projects.map((proj) =>{
   return projectSection += `
      <div>
         <div>
            <div class="project-image-container"><img class="project-img" src="${proj.image}" alt="project-image"></div>
            <h2>${proj.title}</h2>
            <p>
               ${proj.shortDescription}
            </p>
            <div class="project-links">
               <a target="_blank" title="Live link" href="${proj.liveLink}"><i class="fa-solid fa-link"></i></a>
               <a target="_blank" title="github Link" href="${proj.githubLink}"><i class="fa-brands fa-square-github"></i></a>
            </div>
         </div>
      </div>
   `
})
document.querySelector('.grid-projects').innerHTML = projectSection;

const text = "Trumptomz.";
const typewriterEl = document.querySelector(".typewriter");
let i = 0;
let isDeleting = true;
let count = 0;

function type() {
  const currentText = text.substring(0, i);
  typewriterEl.textContent = currentText;
  if (isDeleting && i === 0) {
    isDeleting = false;
    setTimeout(type, 600); 
  } else {
    i += isDeleting ? -1 : 1;
    setTimeout(type, 105);
  }
}

type(); 

const hamburger = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
function toggleMenu() {
   hamburger.classList.toggle('active');
   mobileNav.classList.toggle('show');
   
   document.body.classList.toggle('no-scroll', mobileNav.classList.contains('show'));
}
// toggleMenu();
 
hamburger.addEventListener('click', toggleMenu);
window.addEventListener('resize', () => {
   if (window.innerWidth > 768) {
     hamburger.classList.remove('active');
     mobileNav.classList.remove('show');
     document.body.classList.remove('no-scroll');
   }
});

 document.addEventListener('click', (e) => {
   if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
     hamburger.classList.remove('active');
     mobileNav.classList.remove('show');
     document.body.classList.remove('no-scroll');
   }
});
document.addEventListener('DOMContentLoaded', () => {
   const sections = document.querySelectorAll('.section-animate');
   
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('animate');
       }
     });
   }, { threshold: 0.6 });
 
   sections.forEach(section => observer.observe(section));
 });