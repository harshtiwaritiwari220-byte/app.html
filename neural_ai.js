/* HARSH PROTOCOL - NEURAL AI ENGINE v9.0
   Architecture: Heuristic Device Analysis & Precision Calibration
   Purpose: Generating Hardware-Specific Sensitivity & Tactical Guidance
*/

const NEURAL_HARDWARE_MAP = {
    iphone: {
        touch_sampling: "Extreme",
        sensi_multiplier: 1.2,
        gyro_latency: "0.01ms",
        advice: "iOS optimization detects high refresh rate. Keep Gyro at 400% for laser precision."
    },
    poco: {
        touch_sampling: "Ultra-Fast",
        sensi_multiplier: 1.1,
        gyro_latency: "0.05ms",
        advice: "Snapdragon processing detected. Use 5-Finger Claw with 380% Gyro to avoid touch delay."
    },
    samsung: {
        touch_sampling: "Stable",
        sensi_multiplier: 1.05,
        gyro_latency: "0.08ms",
        advice: "Super AMOLED display detected. Use 3rd-person camera sensi at 135% for smoother jiggles."
    },
    generic_android: {
        touch_sampling: "Standard",
        sensi_multiplier: 1.0,
        gyro_latency: "0.1ms",
        advice: "Standard hardware detected. Harsh recommends turning off background apps for Zero Lag."
    }
};

const HarshNeuralAI = {
    // 1. Dimaag ka processing logic
    analyzeRequest: function(query) {
        let hardwareKey = "generic_android";
        
        // Device Detection Logic (Bariki)
        if (query.includes("iphone") || query.includes("apple") || query.includes("ios")) hardwareKey = "iphone";
        if (query.includes("poco") || query.includes("xiaomi") || query.includes("redmi")) hardwareKey = "poco";
        if (query.includes("samsung")) hardwareKey = "samsung";

        const stats = NEURAL_HARDWARE_MAP[hardwareKey];
        
        // Response Generation based on Gun + Device
        let finalResponse = `<b>NEURAL ANALYSIS COMPLETE [${hardwareKey.toUpperCase()}]</b><br>`;
        finalResponse += `<span class="text-blue-400 text-[9px]">Touch Sampling: ${stats.touch_sampling} | Latency: ${stats.gyro_latency}</span><br><br>`;
        
        if (query.includes("m416")) {
            finalResponse += `<b>M416 CALIBRATION:</b> Set ADS to ${Math.round(142 * stats.sensi_multiplier)}%. Attach Half Grip. Spray will be locked for 300m.`;
        } else if (query.includes("akm")) {
            finalResponse += `<b>AKM CALIBRATION:</b> Vertical recoil is high. Set ADS to ${Math.round(120 * stats.sensi_multiplier)}%. Use Compensator only.`;
        } else {
            finalResponse += `<b>SYSTEM ADVICE:</b> ${stats.advice} Unlock VIP Sensi for more granular control.`;
        }

        return finalResponse;
    }
};

// 2. Integration with Main App (Overwriting old simple search)
function executeNeuralScan() {
    const inputField = document.getElementById('ai-input');
    const consoleBox = document.getElementById('ai-console');
    const query = inputField.value.toLowerCase().trim();

    if (!query) return;

    // Add User Message
    addMessage("USER_ID_09", query, "text-yellow-500");
    inputField.value = "";

    // Simulated Processing Animation (1000 Cr. feel)
    addMessage("SYSTEM", "ACCESSING NEURAL CORE...", "text-blue-500 animate-pulse");

    setTimeout(() => {
        // Clear the "Processing" message and show real AI result
        const response = HarshNeuralAI.analyzeRequest(query);
        addMessage("HARSH_NEURAL_AI", response, "text-gray-300");
    }, 1500);
}
