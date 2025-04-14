// events.js

// Function to set up event listeners
export function setupEventListeners() {
    const form = document.querySelector('form');
    const button = document.querySelector('#submit-button');

    // Event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle form submission logic
        console.log('Form submitted!');
    });

    // Event listener for button click
    button.addEventListener('click', () => {
        // Handle button click logic
        console.log('Button clicked!');
    });
}

// Call the setup function to initialize event listeners
setupEventListeners();