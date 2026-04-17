/* HARSH PROTOCOL - VOICE ENGINE v16.0
   Architecture: Neural Speech-to-Text Recognition
   Purpose: Hands-free AI Navigation and Voice-Activated Commands
*/

const HarshVoiceAI = {
    recognition: null,
    isListening: false,

    // 1. Voice Engine Setup (Bariki logic)
    init: function() {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (window.SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.lang = 'hi-IN'; // Hindi/English support
            this.recognition.interimResults = false;

            this.recognition.onstart = () => {
                this.isListening = true;
                this.updateVoiceUI(true);
            };

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                console.log("%c VOICE_INTEL: " + transcript, "color: #f3ba2f");
                this.processSpeech(transcript);
            };

            this.recognition.onend = () => {
                this.isListening = false;
                this.updateVoiceUI(false);
            };

            this.renderVoiceButton();
        } else {
            console.log("PROTOCOL_ERROR: Browser doesn't support Neural Voice.");
        }
    },

    // 2. Processing Speech: Bolte hi search trigger karna
    processSpeech: function(text) {
        const inputField = document.getElementById('ai-input');
        if (inputField) {
            inputField.value = text;
            HarshNotifications.createToast(`Neural Recognition: "${text}"`, "INFO");
            executeNeuralScan(); // Automatically trigger the AI scan
        }
    },

    // 3. UI Integration: Mic button chamkana
    renderVoiceButton: function() {
        const inputContainer = document.querySelector('#ai-academy .flex.gap-2');
        if (!inputContainer) return;

        const micBtn = document.createElement('button');
        micBtn.id = 'voice-trigger';
        micBtn.className = "bg-white/5 text-white px-4 rounded-2xl border border-white/10 transition-all active:scale-90";
        micBtn.innerHTML = "🎙️";
        micBtn.onclick = () => this.toggleListening();
        
        inputContainer.prepend(micBtn);
    },

    // 4. Toggle Listening Mode
    toggleListening: function() {
        if (this.isListening) {
            this.recognition.stop();
        } else {
            this.recognition.start();
        }
    },

    // 5. Visual Feedback: Jab AI sun raha ho
    updateVoiceUI: function(active) {
        const btn = document.getElementById('voice-trigger');
        const consoleBox = document.getElementById('ai-console');
        
        if (active) {
            btn.classList.add('animate-pulse', 'border-yellow-500', 'bg-yellow-500/10');
            if (consoleBox) {
                consoleBox.innerHTML += `<p id="voice-status" class="text-yellow-500 text-[10px] italic animate-pulse">Neural Core is listening...</p>`;
            }
        } else {
            btn.classList.remove('animate-pulse', 'border-yellow-500', 'bg-yellow-500/10');
            const status = document.getElementById('voice-status');
            if (status) status.remove();
        }
    }
};

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => HarshVoiceAI.init());
