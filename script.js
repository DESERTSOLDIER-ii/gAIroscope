let currentPage = null; // Track the currently open page
let previousChart = null; // Track the previously opened chart
let chartInstance = null; // Chart.js instance
let chartData = {
    Nasdaq: [],
    US30: [],
    Gold_vs_USD: [],
    VIX75: [],
};
let updateInterval = 1000; // Default to 1 second

// Toggle Stack Menu
function toggleStackMenu() {
    const menu = document.getElementById('stackMenuItems');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Close menu when a link is clicked
function closeMenu() {
    document.getElementById('stackMenuItems').style.display = 'none';
}

// Open a new page
function openPage(page, chartName = null) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(pageElement => {
        pageElement.style.display = "none";
    });

    // Show the new page
    document.getElementById(page + 'Page').style.display = 'block';
    currentPage = page;

    // If opening a chart, set the title and render the chart
    if (page === 'chart' && chartName) {
        document.getElementById('chartTitle').textContent = chartName;
        renderDummyChart(chartName);
    }

    // Hide top section on non-home pages
    if (page !== 'home') {
        document.querySelector('.logo-container').style.display = 'none';
        document.querySelector('.app-name').style.display = 'none';
        document.getElementById('notificationIcon').style.display = 'none';
    } else {
        document.querySelector('.logo-container').style.display = 'block';
        document.querySelector('.app-name').style.display = 'block';
        document.getElementById('notificationIcon').style.display = 'block';
    }

    // Close the menu when a link is clicked
    closeMenu();
}

// Close the current page
function closePage(page) {
    document.getElementById(page + 'Page').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';

    // Show top section when returning to home page
    document.querySelector('.logo-container').style.display = 'block';
    document.querySelector('.app-name').style.display = 'block';
    document.getElementById('notificationIcon').style.display = 'block';
}

// Render a dummy chart for the selected index
function renderDummyChart(indexName) {
    const ctx = document.getElementById('dummyChart').getContext('2d');
    if (chartInstance) chartInstance.destroy(); // Destroy existing chart

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 10 }, (_, i) => i + 1), // 10 time points
            datasets: [{
                label: 'Price',
                data: chartData[indexName], // Use index-specific data
                borderColor: '#00ffff', // Cyan for bullish
                fill: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { color: '#fff' } },
                y: { grid: { color: '#fff' } },
            },
            plugins: {
                legend: { display: false },
            },
        }
    });
}

// Toggle timeframe menu
function toggleTimeframeMenu() {
    const menu = document.getElementById('timeframeMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Change timeframe for the chart
function changeTimeframe(timeframe) {
    switch (timeframe) {
        case '1s':
            updateInterval = 1000; // 1 second
            break;
        case '5s':
            updateInterval = 5000; // 5 seconds
            break;
        case '1m':
            updateInterval = 60000; // 1 minute
            break;
        case '5m':
            updateInterval = 300000; // 5 minutes
            break;
        case '1h':
            updateInterval = 3600000; // 1 hour
            break;
        case '4h':
            updateInterval = 14400000; // 4 hours
            break;
        case 'daily':
            updateInterval = 86400000; // 1 day
            break;
        case 'monthly':
            updateInterval = 2592000000; // 1 month (approx)
            break;
        case 'yearly':
            updateInterval = 31536000000; // 1 year (approx)
            break;
    }

    clearInterval(priceUpdateInterval); // Clear the existing interval
    priceUpdateInterval = setInterval(updatePrices, updateInterval); // Set new interval
    alert(`Timeframe changed to ${timeframe}`);
    renderDummyChart(document.getElementById('chartTitle').textContent);
}

// Update prices and chart data
function updatePrices() {
    const indices = ["nasdaqPrice", "us30Price", "goldPrice", "vixPrice"];
    const indexNames = ["Nasdaq", "US30", "Gold_vs_USD", "VIX75"];

    indices.forEach((id, i) => {
        const priceElement = document.getElementById(id);
        let price = parseFloat(priceElement.textContent.replace(/[^0-9.-]/g, ''));
        price += (Math.random() - 0.5) * 10; // Random price fluctuation
        priceElement.textContent = `$${price.toFixed(2)}`;

        // Update chart data for the current index
        if (currentPage === 'chart' && chartInstance) {
            const indexName = indexNames[i];
            chartData[indexName].push(price); // Add new price to the chart
            if (chartData[indexName].length > 10) chartData[indexName].shift(); // Keep only the last 10 data points
            chartInstance.update(); // Refresh the chart
        }
    });
}

let priceUpdateInterval = setInterval(updatePrices, 1000); // Start with 1-second updates

// Add Index
function addIndex(indexName) {
    const indexList = document.getElementById("indexList");
    const newIndex = document.createElement("div");
    newIndex.className = "indexCard";
    newIndex.innerHTML = `
        <div class="indexName">${indexName}</div>
        <div class="indexPrice">$0.00</div>
        <button class="remove-button" onclick="removeIndex(this)">Remove</button>
    `;
    indexList.appendChild(newIndex);
    alert(`Added ${indexName} to the home page!`);
}

// Remove Index
function removeIndex(button) {
    const indexCard = button.parentElement;
    indexCard.remove();
}

// Search Index
function searchIndex() {
    const searchTerm = document.getElementById("searchIndexInput").value;
    const searchResults = document.getElementById("searchResults");

    // Simulate search results
    const results = [
        "CAC 40",
        "Hang Seng",
        "ASX 200",
        "IBEX 35"
    ].filter(index => index.toLowerCase().includes(searchTerm.toLowerCase()));

    searchResults.innerHTML = results.map(index => `
        <div class="index-item" onclick="addIndex('${index}')">${index}</div>
    `).join("");
}

// Initialize
window.onload = function() {
    document.getElementById("homePage").style.display = "block";
    updatePrices(); // Initialize prices
    loadMarketNews(); // Load market news

    // Close menu when a link is clicked
    const menuLinks = document.querySelectorAll("#stackMenuItems a");
    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
};