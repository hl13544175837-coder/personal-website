document.addEventListener('mousemove', (e) => {
    const lightEffect = document.querySelector('.light-effect');
    if (!lightEffect) return;
    
    const x = e.clientX;
    const y = e.clientY;
    
    lightEffect.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 51, 102, 0.15), rgba(255, 107, 107, 0.08), rgba(255, 160, 122, 0.04), transparent 70%)`;
});

document.addEventListener('mouseleave', () => {
    const lightEffect = document.querySelector('.light-effect');
    if (!lightEffect) return;
    lightEffect.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    const lightEffect = document.querySelector('.light-effect');
    if (!lightEffect) return;
    lightEffect.style.opacity = '0.7';
});
