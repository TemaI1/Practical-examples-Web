import { dataCar } from "./data.js";

const data = JSON.parse(dataCar);
console.log(data);

const content = document.querySelector(".content");

data.forEach(({ carMake, modelCar, yearIssue, mileage, color, tax, box, driveUnit, owners, url }) => {
    const boxContent = document.createElement("div");
    content.appendChild(boxContent);

    const carMakeEl = document.createElement("h4");
    carMakeEl.textContent = carMake;
    boxContent.appendChild(carMakeEl);

    const modelCarEl = document.createElement("h6");
    modelCarEl.textContent = modelCar;
    boxContent.appendChild(modelCarEl);

    const yearIssueEl = document.createElement("h6");
    yearIssueEl.textContent = yearIssue;
    boxContent.appendChild(yearIssueEl);

    const mileageEl = document.createElement("h6");
    mileageEl.textContent = mileage;
    boxContent.appendChild(mileageEl);

    const colorEl = document.createElement("h6");
    colorEl.textContent = color;
    boxContent.appendChild(colorEl);

    const taxEl = document.createElement("h6");
    taxEl.textContent = tax;
    boxContent.appendChild(taxEl);

    const boxEl = document.createElement("h6");
    boxEl.textContent = box;
    boxContent.appendChild(boxEl);

    const driveUnitEl = document.createElement("h6");
    driveUnitEl.textContent = driveUnit;
    boxContent.appendChild(driveUnitEl);

    const ownersEl = document.createElement("h6");
    ownersEl.textContent = owners;
    boxContent.appendChild(ownersEl);

});