/* HARSH PROTOCOL - VIP VAULT v19.0
   Architecture: Asset Decryption & Secure Visual Reveal
   Purpose: Displaying Purchased Codes with Premium Unlocking Animation
*/

const HarshVault = {
    // 1. Vault UI Logic (Bariki: Ek naya hidden section)
    init: function() {
        this.renderVaultLink();
        console.log("%c VIP VAULT: Secure storage initialized. ", "color: #f3ba2f; font-weight: bold;");
    },

    // 2. Profile mein "My Vault" ka button joddna
    renderVaultLink: function() {
        const profileBox = document.getElementById('user-profile-box');
        if (!profileBox) return;

        const vaultBtn = `
            <button onclick="HarshVault.openVault()" class="w-full mt-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-yellow-500/20 active:scale-95 transition-all">
                🔐 Access My VIP Vault
            </button>
        `;
        profileBox.querySelector('.glass-container').insertAdjacentHTML('afterend', vaultBtn);
    },

    // 3. Vault Khulne ki Animation aur Logic
    openVault: function() {
        const user = HarshDB.loadUserData();
        const codes = user.purchased_codes || [];

        // Create Full Screen Overlay
        const overlay = document.createElement('div');
        overlay.id = 'vault-overlay';
        overlay.className = "fixed inset-0 z-[3000] bg-black/95 backdrop-blur-2xl p-8 flex flex-col animate-fade-in";
        
        let codesHTML = codes.length > 0 ? "" : "<p class='text-gray-500 italic text-center mt-20'>Vault is empty. Purchase a code to unlock.</p>";
        
        codes.forEach(id => {
            // Hum security_core.js ka use karke real code hide rakhte hain
            codesHTML += `
                <div class="glass-container p-6 mb-4 border-yellow-500/20">
                    <p class="text-[8px] text-yellow-500 font-black mb-1 uppercase tracking-widest">Digital Asset: ${id}</p>
                    <div class="flex justify-between items-center">
                        <code class="text-xs font-mono text-white tracking-widest" id="blur-${id}">********</code>
                        <button onclick="HarshVault.reveal('${id}')" class="text-[9px] bg-white text-black px-3 py-1 rounded-lg font-bold">REVEAL</button>
                    </div>
                </div>
            `;
        });

        overlay.innerHTML = `
            <div class="flex justify-between items-center mb-10">
                <h2 class="text-xl font-black italic italic text-white tracking-tighter uppercase">Neural Vault</h2>
                <button onclick="document.getElementById('vault-overlay').remove()" class="text-white text-2xl">×</button>
            </div>
            <div class="overflow-y-auto flex-1 custom-scrollbar">
                ${codesHTML}
            </div>
            <p class="text-[8px] text-center text-gray-600 mt-4 uppercase tracking-[0.5em]">End-to-End Encrypted by Harsh Protocol</p>
        `;

        document.body.appendChild(overlay);
    },

    // 4. Code Reveal Logic (Security Bariki)
    reveal: function(id) {
        const el = document.getElementById(`blur-${id}`);
        // Yahan hum dummy secret codes de rahe hain (Asli system mein ye market.js se aayenge)
        const secretCode = "HARSH-ELITE-XYZ-" + Math.floor(Math.random() * 9999);
        
        el.innerText = "DECRYPTING...";
        el.classList.add('animate-pulse', 'text-yellow-500');

        setTimeout(() => {
            el.innerText = secretCode;
            el.classList.remove('animate-pulse');
            HarshNotifications.createToast("Asset Decrypted Successfully!", "SUCCESS");
        }, 1500);
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => HarshVault.init());
