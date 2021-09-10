const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", () => {
    if (Number(dataLength) === inputEl.value.length) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    };
   /*Вариант от ментора 
    Number(dataLength) === inputEl.value.length 
    ? inputEl.classList.add("valid") & inputEl.classList.remove("invalid") 
    : inputEl.classList.add("invalid") & inputEl.classList.add("invalid");*/
});