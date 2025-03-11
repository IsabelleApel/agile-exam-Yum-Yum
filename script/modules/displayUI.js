import { createMenu, createDipMenu, createDrinkMenu } from "../components/itemCard.js";
import { fetchMenu } from "./api.js";


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
    }
}
