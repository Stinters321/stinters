export const handleSmoothScroll = (e, route, closeMenuCallback) => {
    e.preventDefault();
    const targetElement = document.querySelector(route);
    if (targetElement) {
        const navbarHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    if (closeMenuCallback) {
        closeMenuCallback(false);
    }
};