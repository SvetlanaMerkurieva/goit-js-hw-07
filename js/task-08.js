const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-action="render"]');
const btnClearEl = document.querySelector('[data-action="destroy"]');
const mainDivEl = document.querySelector("#boxes");


function getBackgroundColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

inputEl.addEventListener("input", () => {
    function onCreateDivs() {
        const divsArr = [];
        let widthDiv = 30;
        let heightDiv = 30;

        for (let i = 0; i < Number(inputEl.value); i += 1) {
            divsArr.push(document.createElement("div"));
            divsArr[i].style.backgroundColor = "red";
            divsArr[i].style.width = "30px" /*`${widthDiv} + 10`*/;
            divsArr[i].style.height = "30px" /*`${heightDiv} + 10`*/;
            divsArr[i].style.marginTop = "10px";
        };
        mainDivEl.append(...divsArr);
        console.log(inputEl.value);
    };
    btnCreateEl.addEventListener("click", onCreateDivs);
});
btnClearEl.addEventListener("click", () => {
    mainDivEl.innerHTML = "";
});
