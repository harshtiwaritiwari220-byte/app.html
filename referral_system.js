/* HARSH PROTOCOL - REFERRAL ENGINE v15.0
   Architecture: Social Viral Loop & Reward Attribution
   Purpose: Tracking Shared Links, Referral Bonuses, and Network Growth
*/

const HarshReferral = {
    // 1. Referral Configuration
    REWARD_AMOUNT: 50, // Har successful referral par ₹50 bonus
    
    // 2. Generate Unique Referral Link (Bariki)
    generateLink: function() {
        const user = HarshDB.loadUserData();
        const baseUrl = window.location.origin + window.location.pathname;
        const refId = btoa(user.username).substring(0, 8); // Base64 unique ID
        return `${baseUrl}?ref=${refId}`;
    },

    // 3. Share Logic: WhatsApp/Social Media Integration
    shareProtocol: function() {
        const link = this.generateLink();
        const text = `🚀 *HARSH PROTOCOL v9.5* 🚀\n\nDuniya ka sabse advanced Gaming AI Hub! \n✅ Get Zero Recoil Codes\n✅ Win Real Cash in Scrims\n\nJoin using my link and get ₹50 Bonus instantly: \n${link}`;
        
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        
        // Log the share attempt in Neural History
        console.log("%c REFERRAL: Sharing link to network... ", "color: #34d399; font-weight: bold;");
        window.open(whatsappUrl, '_blank');
    },

    // 4. Check Referral: Jab koi naya user link se aaye (Bariki)
    processReferral: function() {
        const urlParams = new URLSearchParams(window.location.search);
        const refCode = urlParams.get('ref');
        
        if (refCode && !localStorage.getItem('referral_processed')) {
            // Naye user ko bonus dena
            let user = HarshDB.loadUserData();
            user.wallet_balance += this.REWARD_AMOUNT;
            HarshDB.saveUserData(user);
            HarshDB.updateUI();
            
            // Mark as processed taaki ek hi link se baar baar bonus na mile
            localStorage.setItem('referral_processed', 'true');
            
            // AI Console mein welcome message
            setTimeout(() => {
                HarshNotifications.createToast("REFERRAL BONUS: ₹50 Added to Wallet!", "SUCCESS");
            }, 2000);
        }
    },

    // 5. Render Referral UI
    renderReferralBox: function() {
        const arena = document.getElementById('ai-academy');
        if (!arena) return;

        const refHTML = `
            <div class="mt-8 px-2">
                <div class="glass-container p-6 border-dashed border-2 border-yellow-500/30">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xs font-black uppercase tracking-widest text-[#f3ba2f] italic">Viral Growth Program</h3>
                        <span class="text-[8px] bg-yellow-500 text-black px-2 py-0.5 rounded font-bold">EARN ₹50</span>
                    </div>
                    <p class="text-[10px] text-gray-400 mb-6 leading-relaxed italic">
                        Bhai, Harsh Protocol ko apne dosto ke saath share karo. Har ek successful join par tumhe aur tumhare dost ko <b>₹50 Neural Credits</b> milenge!
                    </p>
                    <button onclick="HarshReferral.shareProtocol()" 
                        class="w-full bg-green-500 text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 active:scale-95 transition-all">
                        <span>📲</span> Share on WhatsApp
                    </button>
                </div>
            </div>
        `;
        arena.insertAdjacentHTML('afterend', refHTML);
    }
};

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    HarshReferral.processReferral();
    HarshReferral.renderReferralBox();
});
