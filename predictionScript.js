const BASE = "http://localhost:2083"; // change when deployed
const POLL_MS = 12_000;

// Redirect if not logged in
if (!localStorage.getItem("authToken")) {
  window.location.href = "login-register.html";
}

async function fetchLatest() {
  try {
    const token = localStorage.getItem("authToken");
    const res = await fetch(`${BASE}/api/latest`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const j = await res.json();

    if (!j.ok || !j.prediction) {
      document.getElementById("label").textContent = "No prediction yet";
      clearFields();
      return;
    }

    const p = j.prediction;

    document.getElementById("label").textContent = p.label || "-";
    document.getElementById("direction").textContent = p.direction || "-";
    document.getElementById("conf").textContent = p.confidence != null ? (p.confidence * 100).toFixed(1) + "%" : "-";
    document.getElementById("hold").textContent = p.holdMinutes ? p.holdMinutes + " min" : "-";
    document.getElementById("lastClose").textContent = p.lastClose ?? "-";
    document.getElementById("analysisTime").textContent = p.analysisTime ?? "-";

    // Fill reasons
    const reasonsList = document.getElementById("pred-reasons");
    reasonsList.innerHTML = "";
    if (p.reasons && p.reasons.length > 0) {
      p.reasons.forEach(r => {
        const li = document.createElement("li");
        li.textContent = r;
        reasonsList.appendChild(li);
      });
    } else {
      reasonsList.innerHTML = "<li>No model reasons available</li>";
    }

    // Gemini explanation
    document.getElementById("pred-gemini-reason").textContent =
      p.aiReason || "No AI explanation available.";
  } catch (err) {
    console.error("Fetch latest failed", err);
    document.getElementById("label").textContent = "Offline";
    clearFields();
  }
}

function clearFields() {
  document.getElementById("direction").textContent = "-";
  document.getElementById("conf").textContent = "-";
  document.getElementById("hold").textContent = "-";
  document.getElementById("lastClose").textContent = "-";
  document.getElementById("analysisTime").textContent = "-";
  document.getElementById("pred-reasons").innerHTML = "";
  document.getElementById("pred-gemini-reason").textContent = "";
}

fetchLatest();
setInterval(fetchLatest, POLL_MS);

// ===== Matrix Falling Code Effect =====
const matrix = document.getElementById("matrix");
const chars = "01$¥€£Ξ₿∆ΣΩ";
for (let i = 0; i < 80; i++) {
  const span = document.createElement("span");
  span.textContent = chars[Math.floor(Math.random() * chars.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (5 + Math.random() * 10) + "s";
  span.style.animationDelay = Math.random() * -20 + "s";
  matrix.appendChild(span);
}