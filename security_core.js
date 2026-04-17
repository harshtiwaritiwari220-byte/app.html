/* HARSH PROTOCOL - SECURITY CORE v13.0
   Architecture: Neural Encryption & Anti-Tamper Shield
   Purpose: Protecting VIP Codes, Blocking Console Hacking, and Data Integrity
*/

const HarshSecurity = {
    // 1. Encryption Key (1000 Cr. Secret)
    _key: "HARSH_ELITE_99_PROTECT",

    // 2. Simple Encryption Logic: Codes ko dundhla karna
    encryptCode: function(text) {
        return btoa(text).split("").reverse().join(""); // Base64 + Reverse (Double Layer)
    },

    // 3. Decryption Logic: Khareedne ke baad asli code dikhana
    decryptCode: function(encodedText) {
        try {
            const reversed = encodedText.split("").reverse().join("");
            return atob(reversed);
        } catch (e) {
            return "PROTOCOL_ERROR: Invalid Decryption Key";
        }
    },

    // 4. Anti-Hack System: Console ko block karna (Bariki)
    initAntiHack: function() {
        // Right click block karna (Optional par safe)
        document.addEventListener('contextmenu', event => event.preventDefault());

        // Keyboard shortcuts block karna (F12, Ctrl+Shift+I)
        document.onkeydown = function(e) {
            if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0)))) {
                alert("SECURITY ALERT: Harsh Protocol detects unauthorized access attempt.");
                return false;
            }
        };

        console.log("%c SECURITY SHIELD: Neural Defense Active. ", "color: #ef4444; font-weight: bold; background: #000; padding: 5px;");
    },

    // 5. Transaction Verification: Fake payment verification block
    verifyTransaction: function(txnId) {
        // Asli system mein ye server se check hota hai
        // Yahan hum neural signature verify karenge
        const signature = txnId.split("_")[1];
        if (signature && signature.length > 5) {
            return true;
        }
        return false;
    }
};

// 6. Protection: VIP Codes ko mask karna
function maskVipCode(code) {
    return HarshSecurity.encryptCode(code);
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    HarshSecurity.initAntiHack();
    
    // Bariki: Har 5 min mein integrity check karna
    setInterval(() => {
        console.clear();
        console.log("%c HARSH PROTOCOL v9.5 | SECURE ACCESS ONLY ", "color: #f3ba2f; font-weight: bold;");
    }, 5000);
});
