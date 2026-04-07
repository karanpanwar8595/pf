document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Lenis Smooth Scroll Setup (Elegant momentum)
    const lenis = new Lenis({
        duration: 1.5, // Slower, more elegant scroll duration
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        smoothWheel: true,
        wheelMultiplier: 0.8
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Stop Lenis while loading
    lenis.stop();

    // 3. Elegant Preloader
    const loadBar = document.getElementById('load-bar');
    const loadText = document.getElementById('load-progress');
    const preloader = document.getElementById('preloader');
    
    let progress = { val: 0 };
    gsap.to(progress, {
        val: 100,
        duration: 2.0,
        ease: "power2.inOut",
        onUpdate: () => {
            loadBar.style.width = `${progress.val}%`;
            loadText.innerText = `${Math.round(progress.val)}%`;
        },
        onComplete: () => {
            gsap.to(preloader, {
                opacity: 0,
                duration: 1.2,
                ease: "power2.inOut",
                onComplete: () => {
                    preloader.style.display = 'none';
                    lenis.start(); // Start scroll
                    playHeroAnimation();
                }
            });
            // Very subtle fade in of background canvas
            gsap.fromTo('#animated-canvas', 
                { opacity: 0 },
                { opacity: 0.2, duration: 3, ease: "power1.inOut" }
            );
        }
    });

    // 4. Hero Animation & Elegant Text Splitting
    function playHeroAnimation() {
        const heroTitle = new SplitType('.hero-title', { types: 'lines, words' });
        const heroSub = new SplitType('.hero-subtitle', { types: 'lines, words' });
        const heroDesc = new SplitType('.hero-text', { types: 'lines' });

        gsap.set('.hero-title, .hero-subtitle, .hero-text, .hero-buttons, .hero-top', { visibility: 'visible' });
        
        const tl = gsap.timeline();
        
        tl.fromTo('.hero-top', 
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        )
        // Formal slide-up from hidden mask
        .from(heroTitle.words, {
            y: "100%",
            stagger: 0.05,
            duration: 1.2,
            ease: "power4.out"
        }, "-=0.8")
        .from(heroSub.words, {
            y: "100%",
            opacity: 0,
            stagger: 0.03,
            duration: 1,
            ease: "power3.out"
        }, "-=0.8")
        .from(heroDesc.lines, {
            opacity: 0,
            y: 10,
            stagger: 0.1,
            duration: 1.2,
            ease: "power2.out"
        }, "-=0.6")
        .fromTo('.hero-buttons', 
            { opacity: 0, y: 15 }, 
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.8"
        )
        .fromTo('.hero-glow',
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 3, ease: "power2.out" },
            "-=2"
        );
    }

    // 5. ScrollTrigger Reveals (Soft Fade-ups)
    gsap.utils.toArray('.gsap-reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 40 },
            {
                opacity: 1, 
                y: 0, 
                duration: 1.5, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                }
            }
        );
    });

    gsap.utils.toArray('.gsap-card').forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 50 },
            {
                opacity: 1, 
                y: 0, 
                duration: 1.2, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 90%",
                }
            }
        );
    });

    // Subtle Parallax background mesh
    gsap.to('.hero-glow', {
        yPercent: 15, // Reduced parallax for subtle formal feel
        ease: "none",
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // 6. Infinite Marquee setup
    const marquees = document.querySelectorAll('.marquee-row');
    marquees.forEach(marquee => {
        const direction = marquee.getAttribute('data-direction') === 'left' ? -1 : 1;
        const speed = 70; // Slower, more readable speed
        
        let contents = marquee.querySelectorAll('.marquee-content, .marquee-content-reverse');
        gsap.to(contents, {
            xPercent: direction * -100,
            repeat: -1,
            duration: speed,
            ease: "none",
        });
    });

    // 7. Experience Accordion Logic
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        const btn = card.querySelector('.accordion-btn');
        if(btn) {
            btn.addEventListener('click', () => {
                const isActive = card.classList.contains('active');
                if(!isActive) {
                    experienceCards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        }
    });

    // 8. Subtle Background Data Network (Non-interactive)
    const canvas = document.getElementById('animated-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = window.innerWidth < 768 ? 30 : 60; // Fewer particles

        class Particle {
            constructor() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.vx = (Math.random() - 0.5) * 0.3; // Slower drift
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 1.5 + 0.5;
            }

            update() {
                // Bounce off edges
                if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
                if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;

                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'; // Soft white/gray
                ctx.fill();
            }
        }

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawNetwork = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'; // Very faint connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < 200) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
                
                particles[i].update();
                particles[i].draw();
            }

            requestAnimationFrame(drawNetwork);
        };

        window.addEventListener('resize', initCanvas);
        initCanvas();
        drawNetwork();
    }
});
