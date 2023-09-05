// const form = document.forms[0]
// const list = document.querySelector('ul')

// list.addEventListener('click', (e) => {
//     console.log('В первом UL в фазе захвата')
//     const propagationControlMethodName =
//         form.elements['propagation-control'].value
//     if (propagationControlMethodName) {
//         e[propagationControlMethodName]()
//     }
// }, true)

// list.addEventListener('click', () => {
//     console.log('Во втором UL в фазе захвата')
// }, true)

// list.addEventListener('click', () => {
//     console.log('В первом UL в фазе всплытия')
// })

// Array.from(list.children).forEach((child) => {
//     child.addEventListener('click', () => {
//         console.log('В каждом LI в фазе всплытия')
//     })
// })





// const checkbox = document.querySelector('input[type=checkbox]')
// checkbox.addEventListener('click', (event) => {
//     console.log(event.target.checked) // true
//     event.preventDefault()
// })





const eventOptions = { bubbles: true, cancelable: true }
const eventa = new Event('click', eventOptions)
eventa.view = window
const mouseEvent = new MouseEvent('click', {
    ...eventOptions,
    view: window,
})
document.addEventListener('click', (event) => {
    console.log(event.isTrusted)
})
const button = document.querySelector('button')
button.dispatchEvent(eventa)
button.dispatchEvent(mouseEvent)
button.click()