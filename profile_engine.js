/* HARSH PROTOCOL - PROFILE ENGINE v12.0
   Architecture: User Identity & Ranking Algorithm
   Purpose: Managing User Levels, Achievement Badges, and Asset Access
*/

const RANK_SYSTEM = [
    { level: 1, name: "Rookie", color: "#9ca3af", icon: "🥉" },
    { level: 5, name: "Elite Guard", color: "#3b82f6", icon: "🥈" },
    { level: 10, name: "Neural Master", color: "#a855f7", icon: "🥇" },
    { level: 20, name: "GOD MODE", color: "#f3ba2f", icon: "👑" }
];

const HarshProfile = {
    // 1. Profile Sync: DB se user ka data lena
    init: function() {
        this.renderProfileSection();
        console.log("%c PROFILE ENGINE: Identity Verified. ", "color: #a855f7; font-weight: bold;");
    },

    // 2. Rank Calculation (Bariki Logic)
    calculateRank: function(searchCount) {
        let currentRank = RANK_SYSTEM[0];
        for (let rank of RANK_SYSTEM) {
            if (searchCount >= rank.level) {
                currentRank = rank;
            }
        }
        return currentRank;
    },

    // 3. Render Profile Dashboard (The UX Design)
    renderProfileSection: function() {
        const user = HarshDB.loadUserData(); // Humne db.js se data liya
        const rank = this.calculateRank(user.ai_search_count || 0);
        
        const profileContainer = document.querySelector('header'); // Header ke niche joddna hai
        if (!profileContainer) return;

        const profileHTML = `
            <div id="user-profile-box" class="px-5 py-6 bg-gradient-to-b from-[#0a0f1a] to-transparent border-b border-white/5">
                <div class="glass-container p-6 flex items-center gap-5 relative overflow-hidden">
                    <div class="relative">
                        <div class="w-16 h-16 rounded-full bg-white/5 border-2 flex items-center justify-center text-3xl shadow-2xl" 
                             style="border-color: ${rank.color}">
                            ${rank.icon}
                        </div>
                        <div class="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-black animate-pulse"></div>
                    </div>

                    <div class="flex-1">
                        <div class="flex justify-between items-start">
                            <h2 class="text-xl font-black italic tracking-tighter uppercase italic">${user.username}</h2>
                            <span class="text-[8px] font-black uppercase px-2 py-0.5 rounded border border-white/10 text-gray-400">UID: ${Math.floor(Math.random() * 1000000)}</span>
                        </div>
                        <p class="text-[10px] font-bold uppercase tracking-[0.3em] italic" style="color: ${rank.color}">
                            Rank: ${rank.name}
                        </p>
                        
                        <div class="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000" 
                                 style="width: ${(user.ai_search_count / 20) * 100}%"></div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-3 mt-4">
                    <div class="bg-white/5 p-3 rounded-2xl text-center border border-white/5">
                        <p class="text-[8px] text-gray-500 font-black uppercase">VIP Codes</p>
                        <p class="text-sm font-black text-[#f3ba2f]">${user.purchased_codes.length}</p>
                    </div>
                    <div class="bg-white/5 p-3 rounded-2xl text-center border border-white/5">
                        <p class="text-[8px] text-gray-500 font-black uppercase">AI Scans</p>
                        <p class="text-sm font-black text-blue-400">${user.ai_search_count || 0}</p>
                    </div>
                    <div class="bg-white/5 p-3 rounded-2xl text-center border border-white/5">
                        <p class="text-[8px] text-gray-500 font-black uppercase">Security</p>
                        <p class="text-sm font-black text-green-500">MAX</p>
                    </div>
                </div>
            </div>
        `;

        // Check if already exists, then update or insert
        const existing = document.getElementById('user-profile-box');
        if (existing) {
            existing.outerHTML = profileHTML;
        } else {
            profileContainer.insertAdjacentHTML('afterend', profileHTML);
        }
    }
};

// 4. Update AI Search Count Logic (Har search par level badhega)
const originalNeuralScan = executeNeuralScan;
executeNeuralScan = function() {
    let user = HarshDB.loadUserData();
    user.ai_search_count = (user.ai_search_count || 0) + 1;
    HarshDB.saveUserData(user);
    HarshProfile.renderProfileSection(); // Profile update
    originalNeuralScan(); // Purana logic chalne do
};

// 5. Initialize
document.addEventListener('DOMContentLoaded', () => HarshProfile.init());
