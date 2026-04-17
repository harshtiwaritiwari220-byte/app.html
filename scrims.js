/* HARSH PROTOCOL - SCRIMS ENGINE v8.0
   Architecture: Real-time Tournament Scheduling & Entry Management
   Purpose: Live Match Updates, Room ID Allocation & Timer Logic
*/

// 1. TOURNAMENT DATABASE (Krafton-Tier Match Lists)
const LIVE_SCRIMS = [
    {
        id: "MATCH_BGMI_01",
        game: "BGMI",
        title: "TDM 1v1 Invitational",
        prize: 500,
        fee: 10,
        time: "10:30 PM",
        slots: 20,
        filled: 14,
        status: "OPEN"
    },
    {
        id: "MATCH_FF_02",
        game: "FF_MAX",
        title: "Clash Squad Elite",
        prize: 300,
        fee: 10,
        time: "11:00 PM",
        slots: 8,
        filled: 7,
        status: "FULL"
    }
];

// 2. SCRIMS RENDERING ENGINE (Bariki se Match Cards banana)
const HarshScrims = {
    init: function() {
        this.renderScrims();
        console.log("%c SCRIMS ENGINE v8.0: Matchmaking Channels Synchronized ", "color: #22c55e; font-weight: bold;");
    },

    renderScrims: function() {
        const arenaContainer = document.querySelector('#ai-academy'); // Hum Arena section ko target karenge
        if (!arenaContainer) return;

        // Arena UI Update (Harsh Style)
        let scrimsHTML = `
            <div class="mt-8 px-2 italic">
                <h3 class="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em] mb-4">Elite Arena Scrims</h3>
                <div class="space-y-4">
        `;

        LIVE_SCRIMS.forEach(match => {
            const isFull = match.filled >= match.slots;
            scrimsHTML += `
                <div class="glass-container p-5 relative overflow-hidden">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center gap-2">
                            <div class="${isFull ? 'bg-red-500' : 'bg-green-500'} w-2 h-2 rounded-full animate-pulse"></div>
                            <span class="text-[9px] font-black uppercase text-gray-400 italic">${match.status} • ${match.time}</span>
                        </div>
                        <span class="text-[9px] font-black text-[#f3ba2f] border border-[#f3ba2f]/30 px-2 py-0.5 rounded italic">PRIZE: ₹${match.prize}</span>
                    </div>
                    <div class="flex justify-between items-end">
                        <div>
                            <h4 class="text-lg font-black italic uppercase">${match.title}</h4>
                            <p class="text-[9px] text-gray-500 uppercase mt-1">Slots: ${match.filled}/${match.slots} Joined</p>
                        </div>
                        <button onclick="HarshScrims.joinMatch('${match.id}', ${match.fee})" 
                            class="${isFull ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-[#f3ba2f] text-black'} px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter italic">
                            ${isFull ? 'House Full' : 'Join ₹' + match.fee}
                        </button>
                    </div>
                </div>
            `;
        });

        scrimsHTML += `</div></div>`;
        arenaContainer.insertAdjacentHTML('afterend', scrimsHTML);
    },

    // 3. JOIN LOGIC (Paisa + Entry)
    joinMatch: function(matchId, fee) {
        let user = HarshDB.loadUserData();

        if (user.wallet_balance >= fee) {
            if (confirm(`Joining Fee: ₹${fee}. Protocol will deduct credits. Continue?`)) {
                user.wallet_balance -= fee;
                HarshDB.saveUserData(user);
                HarshDB.updateUI();
                
                alert("MATCH JOINED! Room ID and Password will be sent to your inbox 15 mins before start time.");
            }
        } else {
            alert("LOW CREDITS! Please recharge your wallet to enter the Arena.");
            window.location.href = "upi://pay?pa=harshtiwaritiwari220@okaxis&pn=HarshTiwari&cu=INR&am=" + fee;
        }
    }
};

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => HarshScrims.init());
