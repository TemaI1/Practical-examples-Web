import { dataCar } from "./data.js";

const data = JSON.parse(dataCar);
console.log(data);

const content = document.querySelector(".content");

data.forEach(({ carMake, modelCar, yearIssue, mileage, color, tax, box, driveUnit, owners, url }) => {
    const boxContent = document.createElement("div");
    content.appendChild(boxContent);
    boxContent.setAttribute('class', 'boxStyle');

    const imgEl = document.createElement("img");
    imgEl.src = url;
    boxContent.appendChild(imgEl);
    imgEl.setAttribute('class', 'img');

    const carMakeEl = document.createElement("h4");
    carMakeEl.textContent = carMake;
    boxContent.appendChild(carMakeEl);

    const modelCarEl = document.createElement("p");
    modelCarEl.textContent = modelCar;
    boxContent.appendChild(modelCarEl);
    modelCarEl.setAttribute('class', 'textStyle');
    modelCarEl.textContent = `Модельный ряд: ${modelCar}`;

    const yearIssueEl = document.createElement("p");
    yearIssueEl.textContent = yearIssue;
    boxContent.appendChild(yearIssueEl);
    yearIssueEl.setAttribute('class', 'textStyle');
    yearIssueEl.textContent = `Год выпуска: ${yearIssue}`;

    const mileageEl = document.createElement("p");
    mileageEl.textContent = mileage;
    boxContent.appendChild(mileageEl);
    mileageEl.setAttribute('class', 'textStyle');
    mileageEl.textContent = `Пробег: ${mileage}`;

    const colorEl = document.createElement("p");
    colorEl.textContent = color;
    boxContent.appendChild(colorEl);
    colorEl.setAttribute('class', 'textStyle');
    colorEl.textContent = `Цвет: ${color}`;

    const taxEl = document.createElement("p");
    taxEl.textContent = tax;
    boxContent.appendChild(taxEl);
    taxEl.setAttribute('class', 'textStyle');
    taxEl.textContent = `Налог: ${tax}`;

    const boxEl = document.createElement("p");
    boxEl.textContent = box;
    boxContent.appendChild(boxEl);
    boxEl.setAttribute('class', 'textStyle');
    boxEl.textContent = `Коробка: ${box}`;

    const driveUnitEl = document.createElement("p");
    driveUnitEl.textContent = driveUnit;
    boxContent.appendChild(driveUnitEl);
    driveUnitEl.setAttribute('class', 'textStyle');
    driveUnitEl.textContent = `Привод: ${driveUnit}`;

    const ownersEl = document.createElement("p");
    ownersEl.textContent = owners;
    boxContent.appendChild(ownersEl);
    ownersEl.setAttribute('class', 'textStyle');
    ownersEl.textContent = `Владельцы: ${owners}`;
});