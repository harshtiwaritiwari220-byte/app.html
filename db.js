/* HARSH PROTOCOL - DATABASE ENGINE v4.2
   Architecture: Persistence Layer (Local Storage & State Management)
   Purpose: Saving User Progress, Wallet, and Purchased Assets
*/

const PRO_DB_VERSION = "9.0";

// 1. Initial State: Agar user pehli baar aaya hai
const INITIAL_USER_DATA = {
    username: "Guest_Player",
    wallet_balance: 50000,
    purchased_codes: [],
    ai_search_count: 0,
    rank: "Rookie",
    last_login: new Date().toISOString()
};

// 2. Data Logic: User ka data load aur save karna
const HarshDB = {
    // Data ko phone ki memory se nikalna
    loadUserData: function() {
        const storedData = localStorage.getItem('harsh_elite_user');
        if (!storedData) {
            this.saveUserData(INITIAL_USER_DATA);
            return INITIAL_USER_DATA;
        }
        return JSON.parse(storedData);
    },

    // Data ko phone ki memory mein pakka save karna
    saveUserData: function(data) {
        data.last_update = new Date().toISOString();
        localStorage.setItem('harsh_elite_user', JSON.stringify(data));
        console.log("%c DATABASE UPDATED: Neural state synchronized. ", "color: #22c55e; font-weight: bold;");
    },

    // Wallet Update Logic (1000 Cr. Bariki)
    updateWallet: function(amount) {
        let user = this.loadUserData();
        user.wallet_balance += amount;
        this.saveUserData(user);
        this.updateUI();
    },

    // UI ko refresh karna bina page reload kiye
    updateUI: function() {
        const user = this.loadUserData();
        const balanceElement = document.getElementById('wallet-balance');
        if (balanceElement) {
            balanceElement.innerText = `₹${user.wallet_balance.toLocaleString()}`;
        }
    },

    // Purchase tracking
    addPurchase: function(codeId) {
        let user = this.loadUserData();
        if(!user.purchased_codes.includes(codeId)) {
            user.purchased_codes.push(codeId);
            this.saveUserData(user);
        }
    }
};

// 3. Initialize: Jab app khulegi toh ye logic activate hoga
document.addEventListener('DOMContentLoaded', () => {
    HarshDB.updateUI();
    console.log(`%c PROTOCOL DB v${PRO_DB_VERSION} ACTIVE `, "background: #f3ba2f; color: #000; padding: 2px 10px; border-radius: 5px;");
});

// User identification logic (Bariki)
function setUsername(name) {
    let user = HarshDB.loadUserData();
    user.username = name;
    user.rank = "Verified Elite";
    HarshDB.saveUserData(user);
}
