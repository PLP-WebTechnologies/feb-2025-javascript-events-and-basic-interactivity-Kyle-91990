import { validateForm } from '../src/js/validation.js';
import { setupEventListeners } from '../src/js/events.js';
import { addInteractiveElements } from '../src/js/interactive.js';

describe('Form Validation', () => {
    test('should return true for valid input', () => {
        const input = { name: 'John Doe', email: 'john@example.com' };
        expect(validateForm(input)).toBe(true);
    });

    test('should return false for empty name', () => {
        const input = { name: '', email: 'john@example.com' };
        expect(validateForm(input)).toBe(false);
    });

    test('should return false for invalid email', () => {
        const input = { name: 'John Doe', email: 'john@.com' };
        expect(validateForm(input)).toBe(false);
    });
});

describe('Event Listeners', () => {
    beforeEach(() => {
        document.body.innerHTML = `<button id="testButton">Click me</button>`;
        setupEventListeners();
    });

    test('should trigger click event', () => {
        const button = document.getElementById('testButton');
        const clickHandler = jest.fn();
        button.addEventListener('click', clickHandler);
        button.click();
        expect(clickHandler).toHaveBeenCalled();
    });
});

describe('Interactive Elements', () => {
    test('should add interactive elements correctly', () => {
        document.body.innerHTML = `<div id="interactiveArea"></div>`;
        addInteractiveElements();
        const interactiveArea = document.getElementById('interactiveArea');
        expect(interactiveArea.children.length).toBeGreaterThan(0);
    });
});