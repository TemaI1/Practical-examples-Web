// ""Получение данных о пользователе""

function getUserData(myId) {
    fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((data) => {
            let user = "";
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === myId) {
                    user = data[i];
                    console.log(user);
                };
            }
            if (user === "") {
                console.log(`Пользователь с id ${myId} не найден`);
            }
        })
};

getUserData(2);
getUserData(39);





// ""Отправка данных на сервер""

function saveUserData(myUser) {
    fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(myUser)
    })
        .then((response) => {
            console.log(response);
        })
        .catch(error => console.error(error));
}

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user);





// ""Изменение стиля элемента через заданное время""

function changeStyleDelayed(id, time) {
    const elem = document.getElementById(id);
    setTimeout(() => { elem.style.border = "2px solid red"; }, time);
}

changeStyleDelayed("myElement", 2000);