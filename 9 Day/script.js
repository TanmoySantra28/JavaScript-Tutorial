const mySubmit = document.getElementById("mySubmit");
const subCheckbox = document.getElementById("subCheckbox");
const visaCard = document.getElementById("visaCard");
const masterCard = document.getElementById("masterCard");
const rupayCard = document.getElementById("rupayCard");
const printCheckbox = document.getElementById("printCheckbox");
const printRadio = document.getElementById("printRadio");

mySubmit.onclick = function() {
    if(subCheckbox.checked) {
        printCheckbox.textContent = `You have subscribed`;
    }
    else {
        printCheckbox.textContent = `You have not subscribed`;
    }

    if(visaCard.checked) {
        printRadio.textContent = `Prefered card is Visa`;
    }
    else if(masterCard.checked) {
        printRadio.textContent = `Prefered card is MasterCard`;
    }
    else if(rupayCard.checked) {
        printRadio.textContent = `Prefered card is Rupay`;
    }
    else {
        printRadio.textContent = `No Card is selected`;
    }
}
