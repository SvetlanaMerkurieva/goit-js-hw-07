const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onNameInput = inputEl.addEventListener("input", (event) => {
    spanEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        spanEl.textContent = "незнакомец";
    };
    /*Вариант от ментора
    event.currentTarget.value === "" ? spanEl.textContent = "незнакомец" : spanEl.textContent = event.currentTarget.value;*/
});