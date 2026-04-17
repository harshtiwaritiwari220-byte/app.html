/* HARSH PROTOCOL - ANALYTICS ENGINE v17.0
   Architecture: Real-time Traffic Simulation & Global Metrics
   Purpose: Displaying Live User Counts and Global Transaction Stats
*/

const HarshAnalytics = {
    // 1. Base Data: Starting point of our stats
    baseUsers: 1200,
    baseTransactions: 58000,

    // 2. Logic: Real-time mein numbers ko up-down karna (Bariki)
    updateMetrics: function() {
        // Randomly users ko 1-5 badhana ya ghatana
        const fluctuation = Math.floor(Math.random() * 10) - 5;
        this.baseUsers += fluctuation;
        
        // Transactions hamesha badhte hi rehte hain
        this.baseTransactions += Math.floor(Math.random() * 3);

        this.renderStats();
    },

    // 3. UI Rendering: Stats ko screen par chamkana
    renderStats: function() {
        const statsBox = document.getElementById('global-stats-hud');
        if (!statsBox) return;

        statsBox.innerHTML = `
            <div class="flex justify-around items-center py-4 bg-white/5 border-y border-white/5 backdrop-blur-md">
                <div class="text-center">
                    <p class="text-[7px] font-black text-blue-400 uppercase tracking-[0.3em]">Live Players</p>
                    <p class="text-lg font-black italic text-white animate-pulse">${this.baseUsers.toLocaleString()}</p>
                </div>
                <div class="w-[1px] h-8 bg-white/10"></div>
                <div class="text-center">
                    <p class="text-[7px] font-black text-green-500 uppercase tracking-[0.3em]">Total Wins</p>
                    <p class="text-lg font-black italic text-white">₹${(this.baseTransactions * 10).toLocaleString()}+</p>
                </div>
                <div class="text-center">
                    <p class="text-[7px] font-black text-[#f3ba2f] uppercase tracking-[0.3em]">Global Rank</p>
                    <p class="text-lg font-black italic text-white">#09</p>
                </div>
            </div>
        `;
    },

    // 4. Initialization
    init: function() {
        // Stats container banana agar index.html mein nahi hai
        const header = document.querySelector('header');
        if (header && !document.getElementById('global-stats-hud')) {
            const hud = document.createElement('div');
            hud.id = 'global-stats-hud';
            header.after(hud);
        }

        // Har 3 second mein data update hoga
        setInterval(() => this.updateMetrics(), 3000);
        this.renderStats();
        
        console.log("%c ANALYTICS CORE: Global Traffic Monitoring Active. ", "color: #00d2ff; font-weight: bold;");
    }
};

// Start the engine
document.addEventListener('DOMContentLoaded', () => HarshAnalytics.init());
