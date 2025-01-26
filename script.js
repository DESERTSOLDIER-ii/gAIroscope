// Open Pages
function openPage(pageId) {
    const pages = document.querySelectorAll("main");
    pages.forEach(page => {
        page.classList.remove("active-page");
        page.classList.add("hidden-page");
    });
    document.getElementById(pageId).classLis.remove("hidden-page");
    document.getElementById(pageId).classList.add("active-page");
}

// Show Notification Modal
function showNotidocument.getElementById("notification-modal").style.display = "block";
}

// Close Notification Modal
function closeNotification() {

document.getElementById("notification-modal").style.display = "none";
}

// Toggle Menu (Placeholder for Future)
function toggleMenu() {
    alert("Menu toggled!");
}