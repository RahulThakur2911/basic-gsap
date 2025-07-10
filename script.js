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
        x: 100, 
        opacity: 0, 
        ease: 'power3.out', 

    });
    gsap.from('.navbar',{
        x:"-100",
        opacity:0,
        duration:1
    }) 
    
    gsap.from('.hero-content h1',{
        x:"-100",
        opacity:0,
        duration:1,
        delay:0.5
    })
    gsap.from('.hero-content p',{
        x:"-100",
        opacity:0,
        duration:1,
        delay:1.5
    })
    gsap.from('.hero-features',{
        x:"-100",
        opacity:0,
        duration:1,
        delay:2
    })
    gsap.from('.hero-buttons',{
        x:"-100",
        opacity:0,
        duration:1,
        delay:3
    })
    let change = gsap.from("#animImage", {
        x:' -700',
        paused: true,
        duration:3
    });

    document.querySelector("#play").onclick = () => {
        change.play();
    };

    document.querySelector("#pause").onclick= ()=>{
        change.pause()
    }
    
    document.querySelector("#resume").onclick= ()=>{
        change.resume()
    }   
    document.querySelector("#reverse").onclick= ()=>{
        change.reverse()
    }   
    document.querySelector("#restart").onclick= ()=>{
        change.restart()
    }
});