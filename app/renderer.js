const linksSection = document.querySelector('.links');
const errorMessage = document.querySelector('.error-message');
const newLinkForm = document.querySelector('new-link-form');
const newLinkUrl = document.querySelector('.new-link-url')
const newLinkSubmit = document.querySelector('.new-link-submit');
const clearStorageButton = document.querySelector('.clear-storage');

newLinkUrl.addEventListener('keyup', () => {
    newLinkSubmit.disabled = !newLinkUrl.validty.valid;
});

const clearForm = () => {
    newLinkForm.value = null;
};

newLinkForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const url = newLinkUrl.value;
    fetch(url)
        .then(response => response.text());
})