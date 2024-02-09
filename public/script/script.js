// Funny thing of off insta
let docTitle = document.title;
window.addEventListener("blur", () =>{
  document.title = "Come back :(";
})
window.addEventListener("focus", () =>{
  document.title = docTitle;
})

// Navbar selectie functie
const aboutTab = document.getElementById('about-tab');
const fullinfoTab = document.getElementById('fullinfo-tab');
const aboutSection = document.querySelector('.about');
const fullinfoSection = document.getElementById('fullinfo-card');

  // Add click event listener to 'Full Info' tab
  fullinfoTab.addEventListener('click', function () {
  aboutSection.style.display = 'none';
  fullinfoSection.style.display = 'block';
  });

  // Add click event listener to 'About' tab
  aboutTab.addEventListener('click', function () {
    aboutSection.style.display = 'block';
    fullinfoSection.style.display = 'none';
  });