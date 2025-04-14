// This file contains functions that add interactive elements to the webpage.

// Function to update content dynamically
export function updateContent(elementId, newContent) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = newContent;
    }
}

// Function to add a simple animation effect
export function fadeIn(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.opacity = 0;
        let last = +new Date();
        const tick = function() {
            element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
            last = +new Date();
            if (+element.style.opacity < 1) {
                requestAnimationFrame(tick);
            }
        };
        requestAnimationFrame(tick);
    }
}

// Function to toggle visibility of an element
export function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}