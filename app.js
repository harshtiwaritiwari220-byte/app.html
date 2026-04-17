/* HARSH PROTOCOL - NEURAL ENGINE v9.8
   Logic: Artificial Intelligence & Data Analytics
   Developed for: Global Gaming Ecosystem (1000 Cr. Project)
*/

// 1. NEURAL KNOWLEDGE DATABASE (Deep Intelligence)
const HARSH_AI_DATABASE = {
    weapons: {
        m416: {
            title: "M416 - TACTICAL PRECISION",
            desc: "Best for 6x Spray (Adjusted to 3x). Use Half Grip + Compensator. Recoil Logic: 7-shaped pattern.",
            stats: "Stability: 95% | Power: 82% | Range: S-Tier",
            secret: "Crouch-fire increases stability by 22% on 5-finger claw devices."
        },
        akm: {
            title: "AKM - DEVASTATOR",
            desc: "High vertical kick. Use Compensator + Iron Sight for close range dominance.",
            stats: "Stability: 65% | Power: 96% | Range: A-Tier",
            secret: "Bullet drop is high. Aim 2 inches above the head for 100m shots."
        },
        m249: {
            title: "M249 - BRIDGE CAMP KING",
            desc: "Use Bipod (Prone Position) for Zero Recoil. Massive damage for vehicles.",
            stats: "Stability: 88% | Power: 94% | Capacity: 150",
            secret: "Firing in 5-bullet bursts eliminates horizontal sway completely."
        }
    },
    maps: {
        erangel: "Secret Tip: Bridge camping with M249 is meta. Pochinki rotation should be through the water side for safety.",
        sanhok: "Secret Tip: Boot Camp 3rd floor is the power position. Use suppressed SMGs for jungle stealth.",
    },
    sensi: {
        claw: "5-Finger Claw: ADS 145%, Free Look 120%, Gyro 400% (Non-Gyro 1%).",
        gyro: "Full Gyro Mastery: Always keep tilt sensitivity above 350% for fast jiggles."
    }
};

// 2. CORE NEURAL SCANNER (AI Processing Logic)
function executeNeuralScan() {
    const inputField = document.getElementById('ai-input');
    const consoleBox = document.getElementById('ai-console');
    const query = inputField.value.toLowerCase().trim();

    if (!query) {
        showError("Bhai, kuch toh pucho! System blank hai.");
        return;
    }

    // Add User Message to Console
    addMessage("USER", query, "text-yellow-500");
    inputField.value = "";

    // Simulate AI Thinking (Deep Processing)
    setTimeout(() => {
        let response = "";

        // Intelligent Routing Logic
        if (query.includes('m416')) {
            response = formatAIResponse(HARSH_AI_DATABASE.weapons.m416);
        } else if (query.includes('akm')) {
            response = formatAIResponse(HARSH_AI_DATABASE.weapons.akm);
        } else if (query.includes('m249')) {
            response = formatAIResponse(HARSH_AI_DATABASE.weapons.m249);
        } else if (query.includes('sensi') || query.includes('control')) {
            response = `<b>PRO PROTOCOL:</b> ${HARSH_AI_DATABASE.sensi.claw} <br><br> ${HARSH_AI_DATABASE.sensi.gyro}`;
        } else if (query.includes('map') || query.includes('erangel')) {
            response = HARSH_AI_DATABASE.maps.erangel;
        } else {
            response = "<b>INTEL:</b> Bhai, ye data mere server par naya hai. Harsh ne ise optimize karne ka order diya hai. Tab tak VIP Market check karo!";
        }

        addMessage("HARSH_AI", response, "text-gray-400");
    }, 1000);
}

// 3. HELPER FUNCTIONS (The Bariki)
function addMessage(sender, text, colorClass) {
    const consoleBox = document.getElementById('ai-console');
    const msgDiv = document.createElement('div');
    msgDiv.className = `p-4 rounded-2xl border border-white/5 bg-white/5 italic ${colorClass} animate-pulse`;
    msgDiv.innerHTML = `<b>${sender}:</b> ${text}`;
    
    consoleBox.appendChild(msgDiv);
    consoleBox.scrollTop = consoleBox.scrollHeight;
    
    // Remove pulse after 1s
    setTimeout(() => msgDiv.classList.remove('animate-pulse'), 1000);
}

function formatAIResponse(data) {
    return `<b>${data.title}</b><br>${data.desc}<br><br><span class="text-yellow-500">${data.stats}</span><br><br><i>PRO SECRET: ${data.secret}</i>`;
}

function showError(msg) {
    alert(msg);
}

// 4. MARKETPLACE LOGIC (The Economy)
document.addEventListener('click', (e) => {
    if (e.target.innerText === "BUY NOW") {
        console.log("Transaction Initiated via UPI Gateway...");
        // Yahan tumhara analytics code aa sakta hai
    }
});

// 5. GLOBAL CONSOLE LOG (Esports Style)
console.log("%c HARSH PROTOCOL ONLINE v9.8 ", "background: #f3ba2f; color: #000; font-weight: bold;");
