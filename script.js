const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const drawerLinks = document.querySelectorAll('.drawer-links a');
const zoomElem = document.getElementById("zoom-specialist");
const scrollBtn = document.getElementById('scrollToTop');
let progress =0;

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

scrollBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const zoomWords = ["Creative", "Developer", "Designer"];
let zoomIndex = 0;

function zoomChange() {
  zoomElem.style.transform = "scale(0)";
  zoomElem.style.opacity = 0;
  setTimeout(() => {
    zoomElem.textContent = zoomWords[zoomIndex];
    zoomElem.style.transform = "scale(1)";
    zoomElem.style.opacity = 1;
    zoomIndex = (zoomIndex + 1) % zoomWords.length;
  }, 300);
}
setInterval(zoomChange, 2000);
zoomChange();


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
