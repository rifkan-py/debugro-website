export function initializeHoverEffects() {
    const servicesGrid = document.querySelector('.services-grid') as HTMLElement;
    if (!servicesGrid) return undefined;

    let isRunning = false;

    const handleMouseMove = (e: MouseEvent) => {
        if (isRunning) return;
        isRunning = true;

        requestAnimationFrame(() => {
            const cards = Array.from(document.querySelectorAll('.service-card')) as HTMLElement[];
            const cols = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
                    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

                    const index = cards.indexOf(card);
                    cards.forEach(c => c.classList.remove('neighbor-hover'));

                    [
                        index - cols,
                        index + cols,
                        index - 1,
                        index + 1
                    ].forEach(i => {
                        if (i >= 0 && i < cards.length) {
                            if (i === index - 1 && index % cols === 0) return;
                            if (i === index + 1 && index % cols === cols - 1) return;
                            cards[i].classList.add('neighbor-hover');
                        }
                    });
                }
            });

            isRunning = false;
        });
    };

    const handleMouseLeave = () => {
        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => card.classList.remove('neighbor-hover'));
    };

    servicesGrid.addEventListener('mousemove', handleMouseMove);
    servicesGrid.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        servicesGrid.removeEventListener('mousemove', handleMouseMove);
        servicesGrid.removeEventListener('mouseleave', handleMouseLeave);
    };
}
