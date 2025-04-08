document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const preloader = document.querySelector(".preloader");

  // Show the preloader
  preloader.style.display = "block";

  // Listen for the video to be ready to play
  video.addEventListener("canplaythrough", function () {
    // Hide the preloader
    preloader.style.display = "none";
    // Show the video
    video.style.display = "block";
    // Play the video
    video.play();
  });

  // Handle video loading errors
  video.addEventListener("error", function () {
    preloader.textContent = "Failed to load video";
  });
});
