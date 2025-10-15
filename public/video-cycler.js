document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video-container video');
    let currentVideo = 0;

    function showNextVideo() {
        videos[currentVideo].classList.remove('active');
        currentVideo = (currentVideo + 1) % videos.length;
        videos[currentVideo].classList.add('active');
    }

    setInterval(showNextVideo, 8000); // Change video every 8 seconds
});
