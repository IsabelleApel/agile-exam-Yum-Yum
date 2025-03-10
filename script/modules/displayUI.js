import { randomNum, randomString } from "../Utils/utils.js";
import { getElement } from "../Utils/domUtils.js";
import { buttonClick } from "./eventHandlers.js";

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