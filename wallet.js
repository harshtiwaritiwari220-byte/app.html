/* HARSH PROTOCOL - WALLET ENGINE v10.0
   Architecture: Transactional Ledger & UPI Gateway Integration
   Purpose: Managing Deposits, Withdrawals, and Financial Logs
*/

const HarshWallet = {
    // 1. Transaction History Database (Local Persistence)
    getHistory: function() {
        const history = localStorage.getItem('harsh_wallet_history');
        return history ? JSON.parse(history) : [];
    },

    // 2. Add Transaction Record (Bariki)
    addLog: function(type, amount, status) {
        let history = this.getHistory();
        const entry = {
            id: "TXN_" + Date.now(),
            date: new Date().toLocaleString(),
            type: type, // 'DEPOSIT' or 'PURCHASE'
            amount: amount,
            status: status // 'SUCCESS' or 'PENDING'
        };
        history.unshift(entry); // Naya transaction upar dikhega
        localStorage.setItem('harsh_wallet_history', JSON.stringify(history.slice(0, 10))); // Top 10 saves
        this.renderHistory();
    },

    // 3. Deposit Logic (Parimatch Style)
    initiateDeposit: function() {
        const amount = prompt("Enter Deposit Amount (Minimum ₹49):", "49");
        
        if (amount && parseInt(amount) >= 49) {
            // Direct UPI Link Construction
            const upiUrl = `upi://pay?pa=harshtiwaritiwari220@okaxis&pn=HarshTiwari&cu=INR&am=${amount}`;
            
            // Log entry as Pending
            this.addLog('DEPOSIT', amount, 'PENDING');
            
            alert("REDIRECTING TO UPI GATEWAY... After payment, protocol will verify within 5 mins.");
            window.location.href = upiUrl;
        } else {
            alert("PROTOCOL ERROR: Minimum deposit is ₹49 for VIP Activation.");
        }
    },

    // 4. Render History UI (App Feel)
    renderHistory: function() {
        const historyContainer = document.getElementById('ai-console'); // Reuse console for logs
        const history = this.getHistory();
        
        if (history.length === 0) return;

        let logHTML = `<div class="mt-4 border-t border-white/5 pt-4">
                        <p class="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-3">Recent Transactions</p>`;
        
        history.forEach(log => {
            logHTML += `
                <div class="flex justify-between items-center bg-white/5 p-3 rounded-xl mb-2 border border-white/5">
                    <div>
                        <p class="text-[10px] font-black italic">${log.type}</p>
                        <p class="text-[7px] text-gray-500">${log.date}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] font-black ${log.type === 'DEPOSIT' ? 'text-green-500' : 'text-red-500'}">
                            ${log.type === 'DEPOSIT' ? '+' : '-
