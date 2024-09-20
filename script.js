function redirectToWebsite() {
    window.location.href = "https://ss-tech-recruitment.vercel.app/"; // Replace with your actual URL
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    redirectToWebsite();
});