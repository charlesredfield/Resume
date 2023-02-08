const header = document.querySelector("header");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
  threshold: 0,
rootMargin: "0px 0px -30px 0px"
};
    const appearOnScroll = new IntersectionObserver
    (function(entries, appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
             return;
            } else {
              entry.target.classList.add("appear");
                
            }
        });
    },
    appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    
    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });