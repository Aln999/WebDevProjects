// Select all watch item images
const watchImages = document.querySelectorAll('.items .img1 img');

// Loop through each image and add click event listener
watchImages.forEach(image => {
    image.addEventListener('click', function() {
        // Redirect to watches.html
        window.location.href = 'watches.html';
    });
});
