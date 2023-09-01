let count = 0;
const click = function () {
    console.log("click for js");
    count++;
    console.log(`click count: ${count}`);
}

const buttonEl = document.querySelector('.button');
buttonEl.addEventListener('click', click);





const onceListener = () => {
    console.log('Будет вызван только один раз с включённой опцией "once"');
};

const onceListenerManual = (event) => {
    console.log('Будет вызван только один раз и удалён вручную через вызов removeEventListener');
    event.target.removeEventListener('click', onceListenerManual);
};

const buttonElTwo = document.querySelector('.buttonTwo');

buttonElTwo.addEventListener('click', onceListener, { once: true });
buttonElTwo.addEventListener('click', onceListenerManual);





const buttonEls = document.querySelectorAll('.buttons');

buttonEls.forEach(element => {
    element.addEventListener('click', function (event) {
        console.log(event.target);
    });
});





const nameFunction = (element) => {
    console.log(element.target, element.currntTarget);
}

const menuEl = document.querySelector('.menu');

menuEl.addEventListener("click", nameFunction);