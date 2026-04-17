/* HARSH PROTOCOL - FINAL BOOTSTRAP v20.0
   Architecture: Master System Orchestrator
   Role: Final Integration, Performance Optimization, and Live Launch
*/

const HarshMaster = {
    version: "9.5.0-PRO",
    status: "BOOTING",

    // 1. System Health Check: Kya saari files active hain?
    checkIntegrity: function() {
        const criticalSystems = [
            { name: "Security Core", obj: window.HarshSecurity },
            { name: "Neural Database", obj: window.HarshDB },
            { name: "Market Engine", obj: window.HarshMarket },
            { name: "AI Brain", obj: window.HarshNeuralAI },
            { name: "Wallet System", obj: window.HarshWallet }
        ];

        console.log("%c HARSH PROTOCOL: INTEGRITY CHECK STARTING... ", "background: #000; color: #f3ba2f; font-weight: bold;");

        let systemsReady = 0;
        criticalSystems.forEach(sys => {
            if (sys.obj) {
                console.log(`%c [OK] ${sys.name} Linked.`, "color: #22c55e");
                systemsReady++;
            } else {
                console.error(`%c [CRITICAL ERROR] ${sys.name} missing!`, "color: #ef4444");
            }
        });

        return systemsReady === criticalSystems.length;
    },

    // 2. Production Launch: Website ko "Ready" state mein daalna
    launch: function() {
        if (this.checkIntegrity()) {
            this.status = "LIVE";
            this.showLaunchAnimation();
            
            // Final Optimization: Garbage collection aur memory clean
            localStorage.setItem('protocol_last_boot', new Date().getTime());
            
            console.log(`%c 🚀 HARSH PROTOCOL IS NOW LIVE (v${this.version}) `, "background: #f3ba2f; color: #000; font-weight: 900; padding: 10px; border-radius: 5px;");
        }
    },

    // 3. Final Launch UI: Screen par "System Ready" ka jhatka
    showLaunchAnimation: function() {
        const splash = document.createElement('div');
        splash.className = "fixed inset-0 z-[9999] bg-[#020408] flex flex-col items-center justify-center animate-fade-out";
        splash.style.animationDelay = "2.5s";
        
        splash.innerHTML = `
            <div class="text-center">
                <div class="w-20 h-20 bg-white rounded-3xl flex items-center justify-center font-black text-4xl text-black mx-auto mb-6 shadow-[0_0_50px_rgba(255,255,255,0.2)]">H</div>
                <h2 class="text-white font-black italic tracking-[0.5em] uppercase text-xs animate-pulse">Neural Core Booting...</h2>
                <div class="mt-8 w-48 h-1 bg-white/5 rounded-full overflow-hidden mx-auto">
                    <div class="h-full bg-yellow-500 animate-progress-load"></div>
                </div>
            </div>
        `;

        document.body.appendChild(splash);

        // Remove splash after animation
        setTimeout(() => splash.remove(), 3000);
    }
};

// 4. Production Style CSS for Launch
const style = document.createElement('style');
style.innerHTML = `
    @keyframes progress-load {
        0% { width: 0%; }
        100% { width: 100%; }
    }
    .animate-progress-load { animation: progress-load 2s ease-in-out forwards; }
    .animate-fade-out { animation: fadeOut 0.5s ease-in forwards; }
    @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; pointer-events: none; } }
`;
document.head.appendChild(style);

// 5. THE FINAL TRIGGER
window.addEventListener('load', () => {
    setTimeout(() => HarshMaster.launch(), 500);
});
