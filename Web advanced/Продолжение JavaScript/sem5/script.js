// const outerDiv = document.querySelector(".outer");
// const innerDiv = document.querySelector(".inner");
// const button1 = document.querySelector("#myButton1");
// const button2 = document.querySelector("#myButton2");

// outerDiv.addEventListener("click", function (event) {
//   console.log("Внешний div");
// });

// innerDiv.addEventListener("click", function (event) {
//   console.log("Внутренний div");
//   event.stopImmediatePropagation()
// });

// button1.addEventListener("click", function (event) {
//   console.log("Кнопка 1");

// });

// button2.addEventListener("click", function (event) {
//   console.log("Кнопка 2");
//   event.stopPropagation()
// });





import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);

const content = document.querySelector(".content");

data.forEach(({ id, name, age, url }) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.style.display = 'inline-block';
  div.style.marginRight = '10px'
  content.appendChild(div);

  const img = document.createElement("img");
  img.classList.add("card-top");
  img.src = url;
  img.width = 300;
  div.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  div.appendChild(cardBody);

  const idPara = document.createElement("p");
  idPara.classList.add("card-text");
  idPara.textContent = `id: ${id}`;
  cardBody.appendChild(idPara);

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = name;
  cardBody.appendChild(title);

  const subtitle = document.createElement("h6");
  subtitle.classList.add("card-subtitle");
  subtitle.textContent = age;
  cardBody.appendChild(subtitle);
});