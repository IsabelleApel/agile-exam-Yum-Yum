
import { createMenu, createDipMenu, createDrinkMenu, createFoodtruckCard } from "../components/itemCard.js";
import { fetchMenu } from "./api.js";
import { randomNum, randomString } from "../Utils/utils.js";
import { getElement } from "../Utils/domUtils.js";
import { buttonClick } from "./eventHandlers.js";
import { oData } from "../data/data.js";

export async function displayMenu() {
    try {
        let products = await fetchMenu();

        // Hittar rätt container
        let wontonContainer = document.getElementById('wontonContainer');
        let dipContainer = document.getElementById('dipContainer');
        let drinkContainer = document.getElementById('drinkContainer');

        // Rensa innehållet först
        wontonContainer.innerHTML = "";
        dipContainer.innerHTML = "";
        drinkContainer.innerHTML = "";

        // Filtrera produkter
        let wontons = products.filter(product => product.type === 'wonton');
        let dips = products.filter(product => product.type === 'dip');
        let drinks = products.filter(product => product.type === 'drink');

        // Lägg till wontons som individuella kort
        wontons.forEach(product => {
            let menuCard = createMenu(product);
            wontonContainer.appendChild(menuCard);
        });

        // Lägg till dips (alla i ett kort)
        let dipMenuCard = createDipMenu(dips);
        if (dipMenuCard) {
            dipContainer.appendChild(dipMenuCard);
        }

        // Lägg till drycker (alla i ett kort)
        let drinkMenuCard = createDrinkMenu(drinks);
        if (drinkMenuCard) {
            drinkContainer.appendChild(drinkMenuCard);
        }

    } catch (error) {
        console.error("Fel vid hämtning av meny:", error);



export function displayOrderConfirmation(){
    getETA();
    getOrderNum();
    buttonClick('#newOrder', './menu.html');
    // behöver veta namn på html-fil för kvittot(nedan)
    buttonClick('#receipt', './receipt.html'); 
}


// vet inte riktigt vart det är passande att ha getETA() och getOrderNum()(vilken script-fil)
function getETA(){
    let estimatedTime = randomNum(10, 20);
    let etaRef = getElement("#orderConfirmationETA");
    etaRef.textContent = `ETA ${estimatedTime} MIN`;
}

function getOrderNum(){
    let orderNumber = randomString(11);
    let orderNumRef = getElement('#orderConfirmationNum');
    orderNumRef.textContent = `#${orderNumber}`;
}

export function displayFoodtruckList(){
    const listRef = getElement('#foodtrucksList');
    for(let place of oData.foodtruckStops){
        let card = createFoodtruckCard(place);
        listRef.appendChild(card);

    }
}
