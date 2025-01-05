// Filter Functionality
document.querySelectorAll('.filters input').forEach(input => {
    input.addEventListener('change', () => {
        const activeFilters = getActiveFilters();
        filterProducts(activeFilters);
    });
});

function getActiveFilters() {
    const filters = {};
    document.querySelectorAll('.filters .filter-group').forEach(group => {
        const key = group.querySelector('h4').textContent.toLowerCase();
        const values = Array.from(group.querySelectorAll('input:checked')).map(input => input.value);
        filters[key] = values;
    });
    return filters;
}

function filterProducts(filters) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const matches = Object.entries(filters).every(([key, values]) => {
            const productValue = product.dataset[key];
            return values.length === 0 || values.includes(productValue);
        });
        product.style.display = matches ? '' : 'none';
    });
}
// Script for auto-sliding images
const slides = document.querySelector('.slides');
        const images = document.querySelectorAll('.slides img');
        let currentIndex = 0;

        function slideRightToLeft() {
            currentIndex = (currentIndex + 1) % images.length;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        setInterval(slideRightToLeft, 1000);
