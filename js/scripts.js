document.addEventListener("DOMContentLoaded", () => {

    // ===== Footer Year & Last Modified =====
    const yearEl = document.querySelector("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const modifiedEl = document.querySelector("#lastModified");
    if (modifiedEl) modifiedEl.textContent = document.lastModified;

    // ===== Responsive Menu =====
    const menuButton = document.querySelector("#menu");
    const nav = document.querySelector(".navigation");
    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    // ===== Greeting Message =====
    const greetingEl = document.querySelector("#greeting");
    if (greetingEl) {
        const hour = new Date().getHours();
        let greeting;
        if (hour < 12) greeting = "Good Morning, welcome to Ethiopian Guenet CMC Local Church.";
        else if (hour < 18) greeting = "Good Afternoon, welcome to Ethiopian Guenet CMC Local Church.";
        else greeting = "Good Evening, welcome to Ethiopian Guenet CMC Local Church.";
        greetingEl.textContent = greeting;
    }

    // ===== Countdown to Next Sunday Service =====
    const countdownEl = document.querySelector("#countdown");
    function getNextSundayService() {
        const now = new Date();
        const sunday = new Date(now);
        sunday.setDate(now.getDate() + (7 - now.getDay()));
        sunday.setHours(9, 0, 0, 0); // Sunday 9:00 AM
        return sunday;
    }
    function updateCountdown() {
        if (!countdownEl) return;
        const diff = getNextSundayService() - new Date();
        if (diff <= 0) {
            countdownEl.textContent = "Service is happening today.";
            return;
        }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        countdownEl.textContent = `${days}d ${hours}h ${minutes}m`;
    }
    updateCountdown();
    setInterval(updateCountdown, 60000);

    // ===== Announcement Popup =====
    const popup = document.querySelector("#announcement");
    const closeBtn = document.querySelector("#closePopup");
    if (popup && closeBtn) {
        setTimeout(() => {
            popup.style.display = "block";
        }, 1500);
        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

});
