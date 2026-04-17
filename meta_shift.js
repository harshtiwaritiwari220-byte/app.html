/* HARSH PROTOCOL - META SHIFT ENGINE v11.0
   Architecture: Real-time Game State Analytics
   Purpose: Tracking Gun Buffs, Nerfs, and Map Rotations from Global Servers
*/

// 1. LIVE META DATABASE (Updated via Neural Network)
const GLOBAL_META_ALERTS = [
    {
        id: "AL_001",
        game: "BGMI",
        type: "BUFF",
        title: "AUG A3 DOMINANCE",
        desc: "Bullet velocity increased by 5%. AUG is now faster than M416 in long range.",
        impact: "+15% Winning Chance"
    },
    {
        id: "AL_002",
        game: "FF_MAX",
        type: "NERF",
        title: "M1887 DAMAGE REDUCED",
        desc: "Reload speed increased by 0.2s. Avoid close combat against SMGs.",
        impact: "-10% Survival Rate"
    },
    {
        id: "AL_003",
        game: "GLOBAL",
        type: "MAP_SHIFT",
        title: "ERANGEL WATER ROTATION",
        desc: "New boat spawns detected near Novorepnoye. Best for safe bridge crosses.",
        impact: "Strategic Advantage"
    }
];

const HarshMetaShift = {
    // 2. Render Meta Updates in Dashboard
    init: function() {
        this.updateMarquee();
        this.renderMetaCards();
        console.log("%c META SHIFT: Global intelligence synchronized. ", "color: #f3ba2f; font-weight: bold;");
    },

    // 3. Header Marquee ko update karna (Bariki)
    updateMarquee: function() {
        const marquee = document.querySelector('marquee');
        if (!marquee) return;
        
        let newsString = "";
        GLOBAL_META_ALERTS.forEach(alert => {
            newsString += ` [${alert.game}] ${alert.title}: ${alert.desc} --- `;
        });
        marquee.innerText = newsString;
    },

    // 4. Detailed Meta Cards (For Deep Education)
    renderMetaCards: function() {
        const arena = document.getElementById('ai-academy');
        if (!arena) return;

        let metaHTML = `
            <div class="mt-10 px-2 italic">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-1 h-4 bg-yellow-500 rounded-full"></div>
                    <h3 class="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Daily Meta Intelligence</h3>
                </div>
                <div class="grid grid-cols-1 gap-4">
        `;

        GLOBAL_META_ALERTS.forEach(meta => {
            metaHTML += `
                <div class="glass-container p-6 border-r-4 ${meta.type === 'BUFF' ? 'border-green-500' : 'border-red-500'}">
                    <div class="flex justify-between mb-2">
                        <span class="text-[8px] font-black uppercase text-yellow-500 tracking-widest">${meta.game} PROTOCOL</span>
                        <span class="text-[8px] font-black ${meta.type === 'BUFF' ? 'text-green-500' : 'text-red-500'}">${meta.type}</span>
                    </div>
                    <h4 class="text-sm font-black italic mb-2">${meta.title}</h4>
                    <p class="text-[10px] text-gray-500 leading-relaxed italic mb-4">${meta.desc}</p>
                    <div class="bg-white/5 p-2 rounded-lg inline-block border border-white/5">
                        <p class="text-[8px] font-bold uppercase tracking-tighter text-gray-300">Intel: ${meta.impact}</p>
                    </div>
                </div>
            `;
        });

        metaHTML += `</div></div>`;
        arena.insertAdjacentHTML('afterend', metaHTML);
    }
};

// 5. Initialize on Load
document.addEventListener('DOMContentLoaded', () => HarshMetaShift.init());
