function scrollToTop() {
            // Smooth scroll behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

    window.onscroll = function() {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        const halfPage = window.innerHeight / 2;
            
        if (window.scrollY > halfPage) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }