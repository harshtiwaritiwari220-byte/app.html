/* HARSH PROTOCOL - MARKET ENGINE v7.0
   Architecture: Dynamic P2P Trading & Asset Management
   Role: Handling Real-time Item Lists, Pricing & Transactions
*/

// 1. GLOBAL INVENTORY (Duniya ki sabse mehengi gaming assets)
const GLOBAL_MARKET_ITEMS = [
    {
        id: "SENSI_001",
        name: "GodL_Jonny_Clone",
        category: "BGMI",
        price: 49,
        seller: "Elite_Harsh",
        sales: 1240,
        rating: 4.9,
        desc: "Zero Recoil 6x Spray Logic (5-Finger Claw/Non-Gyro)"
    },
    {
        id: "LAYOUT_002",
        name: "Full_Control_iPad_View",
        category: "GLOBAL",
        price: 29,
        seller: "Harsh_Tiwari_09",
        sales: 850,
        rating: 4.8,
        desc: "Increases POV to 110. Fixes Jiggle Lag in close combat."
    },
    {
        id: "SCRIPT_003",
        name: "One-Tap_Neural_Headshot",
        category: "FF_MAX",
        price: 19,
        seller: "Legend_Harsh",
        sales: 3200,
        rating: 5.0,
        desc: "Sensitive touch logic for fast drag headshots."
    }
];

// 2. MARKET RENDERING ENGINE (Bariki se UI banana)
const HarshMarket = {
    renderMarket: function() {
        const marketContainer = document.getElementById('market-list');
        if (!marketContainer) return;

        marketContainer.innerHTML = ""; // Clear existing list

        GLOBAL_MARKET_ITEMS.forEach(item => {
            const itemHTML = `
                <div class="glass-container p-6 flex justify-between items-center group mb-4">
                    <div class="flex gap-4 items-center">
                        <div class="w-14 h-14 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                            ${item.category === 'BGMI' ? '🔫' : '💎'}
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="bg-yellow-500 text-black text-[7px] font-black px-2 py-0.5 rounded italic">HOT SELLER</span>
                                <h4 class="text-sm font-black italic tracking-wide">${item.name}</h4>
                            </div>
                            <p class="text-[9px] text-gray-500 mt-1 uppercase tracking-tighter">
                                Seller: ${item.seller} • ⭐ ${item.rating} • ${item.sales} Sales
                            </p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-sm font-black text-green-500 italic">₹${item.price}</p>
                        <button onclick="HarshMarket.initiatePurchase('${item.id}', ${item.price})" 
                            class="bg-white text-black text-[9px] font-black px-4 py-2 mt-2 rounded-xl block uppercase tracking-tighter shadow-xl hover:bg-yellow-500 transition-colors">
                            Buy Access
                        </button>
                    </div>
                </div>
            `;
            marketContainer.insertAdjacentHTML('beforeend', itemHTML);
        });
    },

    // 3. TRANSACTION LOGIC (Paisa katne ka system)
    initiatePurchase: function(itemId, price) {
        let user = HarshDB.loadUserData(); // Humne db.js use kiya

        if (user.wallet_balance >= price) {
            // Confirmation alert (App style)
            if (confirm(`Confirm Transaction for ₹${price}? Protocol will unlock the code instantly.`)) {
                user.wallet_balance -= price;
                user.purchased_codes.push(itemId);
                HarshDB.saveUserData(user);
                HarshDB.updateUI();
                
                alert("PROTOCOL UNLOCKED: Code has been sent to your Profile Section.");
            }
        } else {
            alert("INSUFFICIENT CREDITS: Deposit ₹49 via UPI to unlock VIP Marketplace.");
            window.location.href = "upi://pay?pa=harshtiwaritiwari220@okaxis&pn=HarshTiwari&cu=INR&am=" + price;
        }
    }
};

// 4. Initialize Market on Load
document.addEventListener('DOMContentLoaded', () => {
    HarshMarket.renderMarket();
    console.log("%c MARKET ENGINE v7.0: All Trading Channels Open ", "color: #00d2ff; font-weight: bold;");
});
