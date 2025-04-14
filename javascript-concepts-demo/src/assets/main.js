// Entry point for the JavaScript code
import { setupEventListeners } from './js/events.js';
import { validateForm } from './js/validation.js';
import { addInteractiveElements } from './js/interactive.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    addInteractiveElements();
});