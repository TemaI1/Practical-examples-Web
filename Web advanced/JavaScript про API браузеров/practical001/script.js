// localStorage.setItem("numSeatsDance", "10");
// localStorage.setItem("numSeatsBoxing", "14");
// localStorage.setItem("numSeatsCrossfit", "12");

let data = [{
    "class": "Танцы",
    "time": "18:00 - 20:00",
    "places": localStorage.getItem("numSeatsDance")
},
{
    "class": "Бокс",
    "time": "10:00 - 12:00",
    "places": localStorage.getItem("numSeatsBoxing")
},
{
    "class": "Кроссфит",
    "time": "14:00 - 15:30",
    "places": localStorage.getItem("numSeatsCrossfit")
},
];

const allTable = document.querySelector('.allTable');
const allInfo = document.querySelector('.allInfo');

for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    allTable.appendChild(tr);

    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.textContent = i + 1;
    tr.appendChild(th);

    let td1 = document.createElement("td");
    td1.textContent = data[i].class;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = data[i].time;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = data[i].places;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-success");
    btn.textContent = "Записаться";
    td4.appendChild(btn);
    tr.appendChild(td4);

    if (data[i].class == "Танцы") {
        btn.addEventListener("click", () => {
            td3.textContent = Number(td3.textContent) - 1;
            localStorage.setItem("numSeatsDance", td3.textContent);
            const newP = document.createElement("p");
            newP.classList.add("mt-3", "ml-2");
            newP.textContent = "Спасибо, вы записались на танцы";
            allInfo.appendChild(newP);

            let newBtn = document.createElement("button");
            newBtn.classList.add("btn", "btn-danger", "mb-5", "ml-3");
            newBtn.textContent = "Удалить запись";
            allInfo.appendChild(newBtn);

            newBtn.addEventListener("click", () => {
                td3.textContent = Number(td3.textContent) + 1;
                localStorage.setItem("numSeatsDance", td3.textContent);
                newP.style.display = "none";
                newBtn.style.display = "none";
            })
        })
    }

    if (data[i].class == "Бокс") {
        btn.addEventListener("click", () => {
            td3.textContent = Number(td3.textContent) - 1;
            localStorage.setItem("numSeatsBoxing", td3.textContent);
            const newP = document.createElement("p");
            newP.classList.add("mt-3", "ml-2");
            newP.textContent = "Спасибо, вы записались на бокс";
            allInfo.appendChild(newP);

            let newBtn = document.createElement("button");
            newBtn.classList.add("btn", "btn-danger", "mb-5", "ml-3");
            newBtn.textContent = "Удалить запись";
            allInfo.appendChild(newBtn);

            newBtn.addEventListener("click", () => {
                td3.textContent = Number(td3.textContent) + 1;
                localStorage.setItem("numSeatsBoxing", td3.textContent);
                newP.style.display = "none";
                newBtn.style.display = "none";
            })
        })
    }

    if (data[i].class == "Кроссфит") {
        btn.addEventListener("click", () => {
            td3.textContent = Number(td3.textContent) - 1;
            localStorage.setItem("numSeatsCrossfit", td3.textContent);
            const newP = document.createElement("p");
            newP.classList.add("mt-3", "ml-2");
            newP.textContent = "Спасибо, вы записались на кроссфит";
            allInfo.appendChild(newP);

            let newBtn = document.createElement("button");
            newBtn.classList.add("btn", "btn-danger", "mb-5", "ml-3");
            newBtn.textContent = "Удалить запись";
            allInfo.appendChild(newBtn);

            newBtn.addEventListener("click", () => {
                td3.textContent = Number(td3.textContent) + 1;
                localStorage.setItem("numSeatsCrossfit", td3.textContent);
                newP.style.display = "none";
                newBtn.style.display = "none";
            })
        })
    }
}