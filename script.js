document.addEventListener('DOMContentLoaded', function() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const years = Array.from({length: 65}, (_, i) => 1960 + i);

    const monthMenu = document.getElementById('current-month');
    const yearMenu = document.getElementById('current-year');

    const leftArrow = document.getElementById('left-arrow-month');
    const rightArrowYear = document.getElementById('right-arrow-year');

    const image1 = document.querySelector('.image1');
    const image2 = document.querySelector('.image2');
    const image = document.querySelector('.image');

    let currentMonthIndex = 0;
    let currentYearIndex = 0;
    let currentImage = 0; // 0 for initial image, 1 for image1, 2 for image2

    function updateMonthMenu() {
        monthMenu.textContent = months[currentMonthIndex];
    }

    function updateYearMenu() {
        yearMenu.textContent = years[currentYearIndex];
    }

    function changeMonthAndYear(direction) {
        if (direction === 'left') {
            currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
            currentYearIndex = (currentYearIndex - 1 + years.length) % years.length;
            currentImage = 1; // Set the current image to image1 when left arrow is pressed
        } else {
            currentMonthIndex = (currentMonthIndex + 1) % months.length;
            currentYearIndex = (currentYearIndex + 1) % years.length;
            currentImage = 2; // Set the current image to image2 when right arrow is pressed
        }
        updateMonthMenu();
        updateYearMenu();
        toggleImage();
    }

    function toggleImage() {
        if (currentImage === 0) {
            image.style.display = 'block';
            image1.style.display = 'none';
            image2.style.display = 'none';
        } else if (currentImage === 1) {
            image.style.display = 'none';
            image1.style.display = 'block';
            image2.style.display = 'none';
        } else if (currentImage === 2) {
            image.style.display = 'none';
            image1.style.display = 'none';
            image2.style.display = 'block';
        }
    }

    leftArrow.addEventListener('click', function() {
        changeMonthAndYear('left');
    });

    rightArrowYear.addEventListener('click', function() {
        changeMonthAndYear('right');
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            changeMonthAndYear('left');
        } else if (event.key === 'ArrowRight') {
            changeMonthAndYear('right');
        }
    });

    updateMonthMenu();
    updateYearMenu();
});
