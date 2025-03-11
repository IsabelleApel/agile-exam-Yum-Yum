// API-anrop

export async function fetchMenu() {
    try {
        let response = await fetch('https://santosnr6.github.io/Data/yumyumproducts.json');
        let data = await response.json();
        return data.items;
    } catch (error) {
        console.log(error.message);
    }
}