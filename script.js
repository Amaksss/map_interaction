document.addEventListener('DOMContentLoaded', () => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Array of elements
    const elements = document.querySelectorAll('.element');

    // Loop to create the sequence
    elements.forEach((element, index) => {
        timeline.to(element, { opacity: 1, duration: 1 }, index * 1); // 1 seconds delay between each element appearance
    });

    // Hide all elements after the last one appears
    timeline.to(elements, { opacity: 0, duration: 1 }, elements.length * 1 + 1.5); // Adjust the delay before hiding all elements
});