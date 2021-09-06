const counterValueEl = document.querySelector("#value");
const counterValueStr = counterValueEl.textContent;
let counterValue = Number(counterValueStr);
function decrement() {
    counterValueEl.textContent = counterValue -= 1;
};
function increment() {
    counterValueEl.textContent = counterValue += 1;
};

const counterSubtractEl = document.querySelector('[data-action="decrement"]');
counterSubtractEl.addEventListener("click", decrement);
const counterAddEl = document.querySelector('[data-action="increment"]');
counterAddEl.addEventListener("click", increment);

