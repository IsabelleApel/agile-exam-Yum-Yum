import { randomNum, randomString } from "../Utils/utils.js";
import { getElement } from "../Utils/domUtils.js";

export function displayOrderConfirmation(){
    getETA();
    getOrderNum();
}

function getETA(){
    let estimatedTime = randomNum(10, 20);
    let etaRef = getElement("#orderConfirmationETA");
    etaRef.textContent = `ETA: ${estimatedTime}`;
}

function getOrderNum(){
    let orderNumber = randomString(8);
    let orderNumRef = getElement('#orderConfirmationNum');
    orderNumRef.textContent = `Ordernummer: ${orderNumber}`;
}