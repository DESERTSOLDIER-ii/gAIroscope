// Toggle stack menu visibility
document.getElementById('stackMenu').addEventListener('click', function() {
    const menuItems = document.getElementById('stackMenuItems');
    menuItems.style.display = (menuItems.style.display === 'block') ? 'none' : 'block';
});

// Open full-screen page
function openFullScreen(page) {
    document.getElementById(page + 'Page').style.display = 'flex';
    document.getElementById('homePage').style.display = 'none';
}

// Close full-screen page
function closeFullScreen(page) {
    document.getElementById(page + 'Page').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}

// Save profile information
function saveProfile() {
    const name = document.getElementById('fullName').value;
    const cell = document.getElementById('cellNumber').value;
    const email = document.getElementById('email').value;

    if (name && cell && email) {
        alert('Profile saved!');
    }
}

// Show alert (AI Communication Hub)
function showAlert() {
    alert('AI Alert triggered!');
}

// Search Data (Data Explorer)
function searchData() {
    alert('Searching for data...');
}

// Fetch and display stock data
async function fetchData() {
    try {
        const response = await fetch("https://gairoscope-backend.up.railway.app/data");
        const data = await response.json();

        document.getElementById("vixValue").innerText = data["VIX Index"] || 'N/A';
        document.getElementById("nasdaqValue").innerText = data["NASDAQ"] || 'N/A';
        document.getElementById("us30Value").innerText = data["US30"] || 'N/A';
        document.getElementById("goldValue").innerText = data["Gold/USD"] || 'N/A';
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Run function when page loads
window.onload = function() {
    document.getElementById('homePage').style.display = 'block';
    fetchData();
}