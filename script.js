// Get elements
const nameInput = document.getElementById('name-input');
const greetingElement = document.getElementById('user-name');
const copyLinkButton = document.getElementById('copy-link');
const shareLinkInput = document.getElementById('share-link');

// Function to update greeting with name from URL if available
function updateGreetingFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    
    if (name) {
        greetingElement.textContent = name;  // Show the user's name in the greeting
    } else {
        greetingElement.textContent = '';  // If no name in URL, show nothing
    }
}

// Event listener for input change
nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    if (name) {
        greetingElement.textContent = name;
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
