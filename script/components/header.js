export function loadHeader(){
    return fetch('header.html')
    .then(response => response.text())
    .catch(error => console.error('Error loading the header:', error));
}