// XHR = XmlHttpRequest
let rides = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
    let domString = ``;
    arrayToPrint.forEach((ride) => {
        domString += `<div class="card col-4 wrap">`;
        domString += `  <h1 class"header">${ride.name}</h1>`;
        domString += `</div>`;
    });
    printToDom('cardsDiv', domString);
};

function executeThisCodeAfterFileLoads() {
    const data = JSON.parse(this.responseText);
    rides = data.rides;
    domStringBuilder(data.rides);
};

function executeThisCodeIfXHRFails() {
    console.error('o shi');
};

const getRidesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/rides.json');
    myRequest.send();
};


const init = () => {
    getRidesData();
};

init();