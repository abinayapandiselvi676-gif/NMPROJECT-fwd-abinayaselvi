// Mobile menu toggle

const btn = document.querySelector('.menu-btn');

const nav = document.getElementById('navLinks');

btn?.addEventListener('click', () => nav.classList.toggle('open'));

// Active link on scroll

const links = [...document.querySelectorAll('.nav-links a')];

const sections = links.map(a => document.querySelector(a.getAttribute('href')));

const onScroll = () => {

const y = window.scrollY + 120; 
  
  
// offset for sticky header

  let idx = 0;

  sections.forEach((sec, i) => {

    if (sec && sec.offsetTop <= y) idx = i;

  });

  links.forEach((a, i) => a.classList.toggle('active', i === idx));

};

document.addEventListener('scroll', onScroll, { passive: true });

onScroll();

// Button 1 (Certificate 1)

document.getElementById("downloadBtn1").addEventListener("click", () => {
  window.open("ABINAYA SELVI.A.pdf");
  downloadCertificate("ABINAYA SELVI.A", "AI_Certificate.pdf");
  
});

// Button 2 (Certificate 2)

document.getElementById("downloadBtn2").addEventListener("click", () => {
   window.open("A.ABINAYA SELVI (2).pdf");
  downloadCertificate("certificate2.pdf", "Python basics");

});// Button 3 (Certificate 3)

document.getElementById("downloadBtn3").addEventListener("click", () => {
   window.open("A.ABINAYA SELVI (3).pdf");
  downloadCertificate("certificate3.pdf", "UI/UX");

});

// Button 4 (Certificate 4)

document.getElementById("downloadBtn4").addEventListener("click", () => {
   window.open("IBMDesign20250807-29-c4iv15.pdf");
  downloadCertificate("certificate4.pdf", "Web Development");

});


//Resume pdf
// Button 5 (Certificate 5)

document.getElementById("downloadBtn5").addEventListener("click", () => {
   window.open("Resume pdf.pdf");
  downloadCertificate("Resume5.pdf", "Resume");

});
