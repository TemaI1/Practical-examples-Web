// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const dropdownItem = document.querySelectorAll('.dropdown-item');
dropdownItem.forEach(element => {
    element.classList.add("super-dropdown");
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const btn = document.querySelectorAll('.btn');
btn.forEach(element => {
    if (element.classList.contains("btn-secondary") === true) {
        element.classList.remove("btn-secondary");
    } else {
        element.classList.add("btn-secondary");
    }
});

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menu = document.querySelectorAll('.menu');
menu.forEach(element => {
    if (element.classList.contains("dropdown-menu") === true) {
        element.classList.remove("dropdown-menu");
    }
});

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
const div = document.getElementsByTagName("div");
for (let i = 0; i < div.length; i++) {
    if (div[i].className === "dropdown") {
        div[i].insertAdjacentHTML("afterend", '<a href="#">link</a>');
    }
}

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const dropdownMenuButton = document.querySelector('#dropdownMenuButton');
dropdownMenuButton.id = "superDropdown";

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const ariaLabelledby = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
// ariaLabelledby.children[2].setAttribute("data-dd", "2023");
ariaLabelledby.children[2].dataset.dd = 2023;


// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.removeAttribute("type");
