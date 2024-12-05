// Get elements
const nameInput = document.getElementById('name-input');
const greetingElement = document.getElementById('user-name');
const copyLinkButton = document.getElementById('copy-link');
const shareLinkInput = document.getElementById('share-link');

// Function to update greeting with name from URL if available
function updateGreetingFromURL() {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');  // Get the 'name' query parameter
    
    if (name) {
        // If name is found in URL, display it
        greetingElement.textContent = name + " wishes you";
    } else {
        // If no name, display empty or default message
        greetingElement.textContent = '';
    }
}

// Event listener for input change (updates greeting based on input)
nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    if (name) {
        greetingElement.textContent = name + " wishes you";
    } else {
        greetingElement.textContent = '';
    }
});

// Function to generate the shareable link
function generateShareLink() {
    const name = nameInput.value.trim();
    const baseUrl = window.location.href.split('?')[0]; // Get the base URL without any query parameters
    const shareUrl = `${baseUrl}?name=${encodeURIComponent(name)}`;

    shareLinkInput.value = shareUrl;
}

// Event listener to copy the link to clipboard
copyLinkButton.addEventListener('click', () => {
    generateShareLink();
    shareLinkInput.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});

// Update greeting when the page is loaded and the URL has the name parameter
window.onload = updateGreetingFromURL;
