/* HARSH PROTOCOL - NOTIFICATION ENGINE v14.0
   Architecture: Toast Alert System & Social Proof Simulation
   Purpose: Showing Winning Alerts, Purchase Updates, and System Messages
*/

const HarshNotifications = {
    // 1. Fake Live Data (Bariki: Isse bheed dikhti hai)
    mockEvents: [
        "User_9921 just unlocked M416 VIP Sensi!",
        "Rahul_Pro won ₹500 in BGMI TDM Scrims!",
        "New Meta Alert: AUG A3 is now S-Tier!",
        "Someone just deposited ₹49 into Wallet.",
        "Legend_Harsh uploaded a new Control Code!"
    ],

    // 2. Notification UI Creation (Design Bariki)
    createToast: function(message, type = "INFO") {
        const toastContainer = document.getElementById('toast-wrapper');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `glass-container p-4 mb-3 flex items-center gap-3 shadow-2xl animate-slide-in border-l-4 ${
            type === "SUCCESS" ? "border-green-500" : "border-yellow-500"
        }`;
        
        toast.innerHTML = `
            <div class="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-xs">
                ${type === "SUCCESS" ? "🏆" : "🔔"}
            </div>
            <div>
                <p class="text-[9px] font-black uppercase text-gray-500 tracking-widest">${type}</p>
                <p class="text-[10px] font-bold text-gray-200 italic">${message}</p>
            </div>
        `;

        toastContainer.appendChild(toast);

        // Auto remove after 5 seconds
        setTimeout(() => {
            toast.classList.add('animate-slide-out');
            setTimeout(() => toast.remove(), 500);
        }, 5000);
    },

    // 3. Social Proof Loop: Har thodi der mein ek naya alert dikhana
    startSocialProof: function() {
        setInterval(() => {
            const randomMsg = this.mockEvents[Math.floor(Math.random() * this.mockEvents.length)];
            this.createToast(randomMsg, "SUCCESS");
        }, 15000); // Har 15 second mein ek alert
    },

    // 4. Initialization
    init: function() {
        // Wrapper element banayein agar nahi hai
        if (!document.getElementById('toast-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.id = 'toast-wrapper';
            wrapper.className = "fixed top-20 right-5 left-5 z-[2000] pointer-events-none";
            document.body.appendChild(wrapper);
        }

        this.startSocialProof();
        console.log("%c NOTIFICATION ENGINE: Social proof active. ", "color: #f3ba2f; font-weight: bold;");
    }
};

// Start the engine
document.addEventListener('DOMContentLoaded', () => HarshNotifications.init());
