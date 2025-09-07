// DOM Elments
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const drawerLinks = document.querySelectorAll('.drawer-links a');
const zoomElem = document.getElementById("zoom-specialist");
const scrollBtn = document.getElementById('scrollToTop');

// Variable
let progress =0;
let zoomIndex = 0;

// Scroll Progress
window.addEventListener('scroll', () => {
  const homeSectionHeight = document.getElementById('home').offsetHeight;
  const scrollPos = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  progress = (scrollPos / docHeight) * 100;

  // Update background fill
  scrollBtn.style.background = `conic-gradient(#002546 ${progress}%, #919191 ${progress}%)`;

  // Show only after leaving home
  if (scrollPos > homeSectionHeight - 50) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
});
  // Scroll To Top Button
scrollBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

  // Zooming Text
const zoomWords = ["Creative", "Developer", "Designer"];


function zoomChange() {
  zoomElem.classList.remove("visible");
  zoomElem.classList.add("hidden");
  setTimeout(() => {
    zoomElem.textContent = zoomWords[zoomIndex];
    zoomElem.style.transform = "scale(1)";
    zoomElem.style.opacity = 1;
    zoomIndex = (zoomIndex + 1) % zoomWords.length;
  }, 300);
}
setInterval(zoomChange, 2000);
zoomChange();

  // Hamburger Menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  drawer.classList.toggle('active');
});

drawerLinks.forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('active');
    hamburger.classList.remove('active');
  });
});
