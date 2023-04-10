function getValue() {
    var InputValue = document.getElementById("mayInput").value;
    if (InputValue == "") {
        alert("Пустое значение, повторите попытку!");
    } else {
        alert("Спасибо, данные отправлены!")
    }
}