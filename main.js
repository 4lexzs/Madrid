document.getElementById('navbar-toggle').addEventListener('click', function () {
    var navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('active');
});

var upButton = document.getElementById('upbutton');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        upButton.style.display = 'block';
        upButton.style.opacity = '1';
    } else {
        upButton.style.opacity = '0';
        setTimeout(() => {
            if (window.scrollY < 200) {
                upButton.style.display = 'none';
            }
        }, 300); 
    }
});

upButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.toc a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const asideToggle = document.querySelector('.aside-toggle');
    const aside = document.querySelector('aside');

    asideToggle.addEventListener('click', function() {
        aside.classList.toggle('active');
    });
});
