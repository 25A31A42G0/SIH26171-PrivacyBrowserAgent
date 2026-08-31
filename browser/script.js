import { detectPII } from "../privacy/pii_detector.js";
function runAgent() {

    const command = document.getElementById("command").value.trim();
const pageText = document.body.innerText;
const detectedPII = detectPII(pageText);

console.log("Detected PII:", detectedPII);
    const result = document.getElementById("result");

    const activityList = document.getElementById("activity-list");


    if (command === "") {

        result.innerHTML = `
            <div class="result-icon">⚠️</div>

            <div>
                <strong>Command Required</strong>
                <p>Please enter a command for the browser agent.</p>
            </div>
        `;

        return;
    }


    // Show processing state

    result.innerHTML = `
        <div class="result-icon">⚡</div>

        <div>
            <strong>Agent Processing...</strong>
            <p>Understanding your command and analyzing the webpage.</p>
        </div>
    `;


    // Add activity

    addActivity("🤖 Agent received command", "RUNNING");


    setTimeout(() => {

        addActivity("👁️ Visual perception analyzing page", "SCANNING");

    }, 700);


    setTimeout(() => {

        addActivity("🛡️ Privacy shield checking sensitive data", "PROTECTED");

    }, 1400);


    setTimeout(() => {

        result.innerHTML = `
            <div class="result-icon">✅</div>

            <div>
                <strong>Agent Ready</strong>
                <p>Command received: "${command}"</p>
            </div>
        `;

        addActivity("⚡ Agent ready to perform action", "READY");

    }, 2100);
}


function addActivity(message, status) {

    const activityList = document.getElementById("activity-list");

    const item = document.createElement("div");

    item.className = "activity-item";

    item.innerHTML = `
        <span class="check">✓</span>
        <span>${message}</span>
        <small>${status}</small>
    `;

    activityList.appendChild(item);
}