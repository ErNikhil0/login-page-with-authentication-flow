window.onload = function() {
    const fullscreenImage = document.getElementById('fullscreenImage');
    const loginContainer = document.getElementById('loginContainer');
    const imageContainer = document.getElementById('imageContainer');
    
    // Wait for the square animation to complete, then split the image and show the login page
    setTimeout(() => {
        fullscreenImage.style.animation = "slideRight 2s forwards";
        
        // Show login and image containers
        loginContainer.style.display = 'flex';
        imageContainer.style.display = 'flex';
    }, 2000);
};
