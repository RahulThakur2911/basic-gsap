// You can add GSAP animations here if you want
document.addEventListener('DOMContentLoaded', () => {
    // Example animation for the hero section
    gsap.from('.hero-content', { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: 'power3.out' 
    });
    
    gsap.from('.hero-image', { 
        duration: 2, 
        y: 500, 
        opacity: 0, 
        ease: 'power3.out', 

    });
    
    // Animation for your original boxes
    gsap.to('#box1', {
        duration: 2,
        x: 300,
        rotation: 360,
        ease: 'bounce.out',
        repeat: -1,
        yoyo: true
    });
    
    gsap.to('#box2', {
        duration: 2,
        x: -300,
        rotation: -360,
        ease: 'bounce.out',
        repeat: -1,
        yoyo: true,
        delay: 0.5
    });

    gsap.from('.navbar',{
        y:"-200",
        opacity:0,
        duration:1
    }) 
    
    gsap.from('.hero-content h1',{
        y:"200",
        opacity:0,
        duration:1,
        delay:0.5
    })
    gsap.from('.hero-content p',{
        y:"200",
        opacity:0,
        duration:1,
        delay:1.5
    })
    gsap.from('.hero-features',{
        y:"200",
        opacity:0,
        duration:1,
        delay:2
    })
    gsap.from('.hero-buttons',{
        y:"200",
        opacity:0,
        duration:1,
        delay:3
    })
});