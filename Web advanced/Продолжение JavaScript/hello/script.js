const form = document.querySelector('.form');
const ul = document.querySelector('.ul');

form.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
    const name = event.target[0].value;

    const creatUl = document.createElement("li");
    ul.append(creatUl);

    const span = document.createElement("span");
    creatUl.append(span);
    span.textContent = name;

    const button = document.createElement("button");
    creatUl.append(button);
    button.textContent = "delete";

    button.onclick = function () {
        creatUl.remove();
    };

});