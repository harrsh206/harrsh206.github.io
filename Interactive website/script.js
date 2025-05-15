document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const header = document.querySelector('header');
    if (header) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        header.appendChild(mobileMenuBtn);

        const nav = document.querySelector('nav');

        mobileMenuBtn.addEventListener('click', function() {
            if (nav) {
                nav.classList.toggle('show');
            }
        });
    }

    // News filter functionality
    const newsFilters = document.querySelectorAll('.news-filters button');
    if (newsFilters.length > 0) {
        newsFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                newsFilters.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
                // Here you would filter news items based on the selected category
                const category = this.dataset.category;
                console.log('Filtering news by:', category);
                // Add your logic here to update the displayed news items
            });
        });
    }

    // Review filter functionality
    const platformFilter = document.getElementById('platform');
    const genreFilter = document.getElementById('genre');
    const ratingFilter = document.getElementById('rating');

    if (platformFilter && genreFilter && ratingFilter) {
        [platformFilter, genreFilter, ratingFilter].forEach(filter => {
            filter.addEventListener('change', function() {
                // Here you would filter reviews based on the selected options
                console.log('Filtering by:', {
                    platform: platformFilter.value,
                    genre: genreFilter.value,
                    rating: ratingFilter.value
                });
                // Add your logic here to update the displayed review items
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput) {
                const email = emailInput.value;
                // Here you would typically send the email to your server
                alert('Thanks for subscribing with ' + email);
                this.reset();
            }
        });
    });
});

