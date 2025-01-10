const mobileMenu = document.getElementById('mobile-menu');
        const navbarMenu = document.querySelector('.navbar-menu');

        mobileMenu.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });
        document.addEventListener('DOMContentLoaded', function() {
            const aboutSection = document.getElementById('about-mountain-oasis');
            aboutSection.style.transition = 'opacity 0.5s';
            aboutSection.style.opacity = 0;
            setTimeout(() => {
                aboutSection.style.opacity = 1;
            }, 100);
        });

function fetchDataFromAPI() {
    fetch('https://api.example.com/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}