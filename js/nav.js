const menubtn = document.getElementById("hamburger");
const closebtn = document.getElementById("close-btn");
const sidemenu = document.getElementById("sidemenu");
const overlay = document.getElementById("overlay");

// Open Menu
menubtn.addEventListener("click", function () {
    overlay.classList.add("active");
    sidemenu.classList.add("active");
    menubtn.classList.add("active");
});

// Close Menu Function (Reusable)
function closeMenu() {
    overlay.classList.remove("active");
    sidemenu.classList.remove("active");
    menubtn.classList.remove("active");
}

// Close button click
closebtn.addEventListener("click", closeMenu);

// Overlay click
overlay.addEventListener("click", closeMenu);

// 🔥 Close when any menu link is clicked
document.querySelectorAll("#sidemenu a").forEach(link => {
    link.addEventListener("click", closeMenu);
});


document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

