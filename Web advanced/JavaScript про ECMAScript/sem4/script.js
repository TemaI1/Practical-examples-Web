// function delayedMessage(message, delay){
//     setTimeout(() => { console.log(message); }, delay);
// }

// delayedMessage("Сообщение 1", 2000)
// delayedMessage("Сообщение 2", 1000)
// delayedMessage("Сообщение 3", 3000)





// const tasks = [
//     {name: 'task 1', time: 1000},
//     {name: 'task 2', time: 2000},
//     {name: 'task 3', time: 3000},
//     {name: 'task 4', time: 4000},
//     {name: 'task 5', time: 5000}
// ]

// function tasksSeduler(tusk, delay) {
//     setTimeout(() => console.log(${tusk} - ${delay}), delay);
// }

// let count = 0;

// for (let i = 0; i < tasks.length; i++) {
//     count += tasks[i].time;
//     tasksSeduler(tasks[i].name, count);
// }





// function loadData(url) {
//     const xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (xhr.status != 200) { // если статус не 200, то произошла ошибка
//             console.log(Error ${xhr.status}: ${xhr.statusText});
//         } else {
//             console.log(user: ${xhr.response}); // response - это ответ сервера
//         }
//     };
//     xhr.open('GET', url, true);
//     xhr.send();
// }

// loadData('https://api.github.com/users');





// fetch('https://api.github.com/users')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//     });





// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((elem) => listUser(elem));

// const userListC = document.querySelector('.userList');
// function listUser(elem) {
//     userArr = [];
//     for (let i = 0; i < elem.length; i++) {
//         userArr.push(elem[i].name);
//         userListC.innerHTML += elem[i].name + '<br>';
//     };

//     userArr = userArr.sort();
//     userListC.innerHTML += '<br>';

//     for (let i = 0; i < userArr.length; i++) {
//         userListC.innerHTML += userArr[i] + '<br>';
//     };
// };
