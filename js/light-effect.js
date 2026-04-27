document.addEventListener('DOMContentLoaded', () => {
    const lightEffect = document.querySelector('.light-effect');
    const hero = document.querySelector('.hero');
    const letters = Array.from(document.querySelectorAll('.letter'));

    if (!lightEffect || !hero) {
        return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (prefersReducedMotion || coarsePointer) {
        lightEffect.style.opacity = coarsePointer ? '0.4' : '0.65';
        lightEffect.style.background = 'radial-gradient(620px circle at 50% 24%, rgba(255, 51, 102, 0.18), rgba(255, 107, 107, 0.09), transparent 72%)';
        return;
    }

    const state = {
        currentX: window.innerWidth * 0.5,
        currentY: window.innerHeight * 0.28,
        targetX: window.innerWidth * 0.5,
        targetY: window.innerHeight * 0.28
    };

    function renderLetters(offsetX, offsetY) {
        letters.forEach((letter, index) => {
            const depth = index - (letters.length - 1) / 2;
            const moveX = offsetX * (10 + Math.abs(depth) * 4) + depth * 2.4;
            const moveY = offsetY * (7 + Math.abs(depth) * 2.5);
            const rotate = offsetX * (depth * 2.2);
            const scale = 1 + Math.abs(offsetY) * 0.018;
            letter.style.transform = `translate3d(${moveX}px, ${moveY}px, ${28 + Math.abs(depth) * 14}px) rotate(${rotate}deg) scale(${scale})`;
        });
    }

    function render() {
        state.currentX += (state.targetX - state.currentX) * 0.16;
        state.currentY += (state.targetY - state.currentY) * 0.16;

        const xRatio = state.currentX / window.innerWidth;
        const yRatio = state.currentY / window.innerHeight;
        const offsetX = (xRatio - 0.5) * 2;
        const offsetY = (yRatio - 0.5) * 2;

        lightEffect.style.background = [
            `radial-gradient(720px circle at ${state.currentX}px ${state.currentY}px, rgba(255, 51, 102, 0.28), rgba(255, 107, 107, 0.14) 20%, rgba(255, 160, 122, 0.06) 42%, transparent 72%)`,
            `radial-gradient(340px circle at ${state.currentX + 46}px ${state.currentY - 30}px, rgba(255, 255, 255, 0.1), transparent 68%)`,
            `radial-gradient(180px circle at ${state.currentX - 80}px ${state.currentY + 40}px, rgba(255, 105, 180, 0.08), transparent 75%)`
        ].join(', ');

        hero.style.setProperty('--pointer-x', `${offsetX * 26}px`);
        hero.style.setProperty('--pointer-y', `${offsetY * 22}px`);
        hero.style.setProperty('--rotate-x', `${offsetY * -7}deg`);
        hero.style.setProperty('--rotate-y', `${offsetX * 8.5}deg`);
        hero.style.setProperty('--glow-x', `${xRatio * 100}%`);
        hero.style.setProperty('--glow-y', `${yRatio * 100}%`);

        renderLetters(offsetX, offsetY);
        window.requestAnimationFrame(render);
    }

    document.addEventListener('mousemove', (event) => {
        state.targetX = event.clientX;
        state.targetY = event.clientY;
    });

    document.addEventListener('mouseenter', () => {
        lightEffect.style.opacity = '0.96';
    });

    document.addEventListener('mouseleave', () => {
        lightEffect.style.opacity = '0';
        state.targetX = window.innerWidth * 0.5;
        state.targetY = window.innerHeight * 0.28;
    });

    window.addEventListener('resize', () => {
        state.targetX = window.innerWidth * 0.5;
        state.targetY = window.innerHeight * 0.28;
    });

    render();
});
