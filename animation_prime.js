/* HARSH PROTOCOL - ANIMATION PRIME v18.0
   Architecture: Particle Physics & Canvas Interaction
   Purpose: High-End Visual Feedback & Neon Touch Trails
*/

const HarshVisuals = {
    canvas: null,
    ctx: null,
    particles: [],

    // 1. Setup Canvas (Bariki: Screen ke peeche layer lagana)
    init: function() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none'; // Click block nahi karega
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);

        window.addEventListener('resize', () => this.resize());
        this.resize();

        // Touch aur Mouse ko track karna
        window.addEventListener('mousemove', (e) => this.createParticles(e.x, e.y));
        window.addEventListener('touchmove', (e) => {
            this.createParticles(e.touches[0].clientX, e.touches[0].clientY);
        });

        this.animate();
        console.log("%c VISUAL PRIME: Particle Physics System Engaged. ", "color: #00f2ff; font-weight: bold;");
    },

    resize: function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    // 2. Particle Logic: Bijli ke sparks banana
    createParticles: function(x, y) {
        for (let i = 0; i < 2; i++) {
            this.particles.push({
                x: x,
                y: y,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 5,
                speedY: (Math.random() - 0.5) * 5,
                color: '#f3ba2f', // Neon Gold
                life: 1.0
            });
        }
    },

    // 3. Animation Loop: Sparks ko girana aur mitana
    animate: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            p.life -= 0.02;

            if (p.life <= 0) {
                this.particles.splice(i, 1);
                i--;
                continue;
            }

            this.ctx.globalAlpha = p.life;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Neon Glow Effect
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = p.color;
        }
        
        requestAnimationFrame(() => this.animate());
    }
};

// Start the Visual Engine
document.addEventListener('DOMContentLoaded', () => HarshVisuals.init());
