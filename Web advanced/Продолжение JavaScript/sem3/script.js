// document.querySelector('#button').onclick = function () {
//   console.log("click");
// }





// const buttons = document.querySelectorAll('button');
// for(const button of buttons) {
//     button.onclick = function () {
//         console.log(`Нажата ${button.textContent}`);
//     }
// }

// buttons.forEach((el) => {
//   el.onclick = function () {
//     console.log(`Нажата ${el.textContent}`);
//   }
// })





// document.querySelector("#button4").addEventListener("mouseover", function () {
//   this.innerText = "Не догонишь меня!!!)))";
//   this.style.backgroundColor = "red";
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   this.style.transform = `translate(${x}px, ${y}px)`
// });

// document.querySelector("#button5").addEventListener("click", function () {
//   this.innerText = "Не догонишь меня!!!)))";
//   this.style.backgroundColor = "red";
//   this.style.transition = "all 1s ease-in-out";
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   this.style.transform = `translate(${x}px, ${y}px)`;
//   this.disabled = true;
// });





// const buttonsData = [
//   { id: "add", text: "Добавить заголовок", clickHandler: addHeding },
//   { id: "remove", text: "Удалить заголовок", clickHandler: removeHeading },
//   {
//     id: "hover",
//     text: "Кнопка с наведением",
//     mouseoverHandler: handleHoverIn,
//     mouseoutHandler: handleHoverOut,
//   },
// ];

// function addHeding() {
//   const heading = document.createElement("h1");
//   heading.textContent = "Новый заголовок";
//   document.body.appendChild(heading);
// }

// function removeHeading() {
//   const heading = document.querySelector("h1");
//   if (heading) {
//     heading.remove();
//   }
// }

// function handleHoverIn() {
//   console.log("Вы навели на данную кнопку");
// }

// function handleHoverOut() {
//   console.log("Вы вы ушли от кнопки");
// }

// function createButtons() {
//   const btnContainer = document.querySelector("div");

//   buttonsData.forEach((el) => {
//     const btn = document.createElement("button");
//     btn.id = el.id;
//     btn.textContent = el.text;
//     btnContainer.appendChild(btn);

//     if (el.clickHandler) {
//       btn.onclick = el.clickHandler;
//     }

//     if (el.mouseoverHandler) {
//       btn.onmouseover = el.mouseoverHandler;
//     }

//     if (el.mouseoutHandler) {
//       btn.onmouseout = el.mouseoutHandler;
//     }
//   });
// }
// createButtons();





document.querySelector("#add").addEventListener("click", addListItem);

document
  .querySelector("#remove")
  .addEventListener("click", removeFirstListItem);

document.querySelector("#addClass").addEventListener("click", addClickClass);

function addListItem() {
  const list = document.querySelector("#list");
  const newItem = document.createElement("li");
  newItem.textContent = "Новый элемент";
  list.appendChild(newItem);
}

function removeFirstListItem() {
  const list = document.querySelector("#list");
  if (list.firstElementChild) {
    list.firstElementChild.remove();
  }
}

function addClickClass() {
  this.classList.add("click");
}