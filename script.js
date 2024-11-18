function toggleSearch() {
  const searchInput = document.getElementById("searchInput");

  if (searchInput.classList.contains("hidden")) {
      searchInput.classList.remove("hidden", "animate-zoomOut");
      searchInput.classList.add("animate-zoomIn");
      searchInput.focus();
  } else {
      searchInput.classList.remove("animate-zoomIn");
      searchInput.classList.add("animate-zoomOut");
      setTimeout(() => {
          searchInput.classList.add("hidden");
      }, 300); // Cache après 0,3s pour correspondre à la durée de l'animation
  }
}
// Fonction pour afficher/masquer le menu mobile
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
// Sélectionner uniquement les éléments avec la classe "fade-on-scroll"
const elements = document.querySelectorAll(".fade-on-scroll");
// Créer l'observateur d'intersection
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Ajouter la classe Tailwind avec un délai pour chaque élément
      setTimeout(() => {
        entry.target.classList.add("animate-fadeIn");
      }, index * 100); // Latence de 100ms entre chaque élément
    } else {
      // Retirer la classe pour réinitialiser l'animation lorsque l'élément sort du champ de vision
      entry.target.classList.remove("animate-fadeIn");
    }
  });
}, { threshold: 0.10 });

// Observer chaque élément avec la classe "fade-on-scroll"
elements.forEach(element => {
  observer.observe(element);
});
// Créer la barre de progression
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.width = "0";
progressBar.style.backgroundColor = "orange";
progressBar.style.boxShadow = "0 25px 25px black";
progressBar.style.zIndex = "1000";
document.body.appendChild(progressBar);
function up() {
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  const scrollTop = window.scrollY;
  const widthPercentage = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = widthPercentage + "%";
}
window.addEventListener("scroll", up);
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;
    
    const showNextImage = () => {
        // Réinitialiser l'opacité de tous les éléments
        items.forEach(item => {
            item.classList.remove('opacity-100');
            item.classList.add('opacity-0');
        });

        // Montrer l'image suivante
        index = (index + 1) % items.length;
        items[index].classList.remove('opacity-0');
        items[index].classList.add('opacity-100');
    };

    // Afficher la prochaine image toutes les 3 secondes
    setInterval(showNextImage, 3000);
});
  
