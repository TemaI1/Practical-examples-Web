/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

const dish = ["Маргарита", "Пепперони", "Три сыра", "Филадельфия", "Калифорния", "Чизмаки", "Сеякемаки", "Тирамису", "Чизкейк"];

class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

class Manager {

  newOrder(client, ...obj) {
    console.log(`\nКлиент ${client.firstname} заказал:`);
    let cookLine = "";
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].type === "Пицца") {
        cookLine = "Олег"
      } else if (obj[i].type === "Суши") {
        cookLine = "Андрей"
      } else if (obj[i].type === "Десерт") {
        cookLine = "Анна"
      } else {
        cookLine = "неизвестен"
      }
      console.log(`${obj[i].type} "${obj[i].name}" - ${obj[i].quantity}; повар ${cookLine}`);

      if (!dish.includes(obj[i].name)) {
        console.log(`Блюда "${obj[i].name}", в нашем меню нет`);
      }
    }
  };
}

const manager = new Manager();

manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);

const clientPavel = new Client("Павел", "Павлов");

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);