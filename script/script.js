// import { fetchMenu } from "./modules/api.js";
// import { createMenu } from "./components/itemCard";
import { displayMenu } from "./modules/displayUI.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/menu.html') {
    console.log('menu.html');
    displayMenu();
}
// } else if(window.location.pathname === '/movie.html') {
//     console.log('movie.html');

// } else if(window.location.pathname === '/search.html') {
//     console.log('search.html');
// }