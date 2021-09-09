const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-action="render"]');
const btnClearEl = document.querySelector('[data-action="destroy"]');
const mainDivEl = document.querySelector("#boxes");

inputEl.addEventListener("input", () => {});
    function onCreateDivs() {
        const divsArr = [];
        for (let i = 0; i < Number(inputEl.value); i += 1) {
            function getRandomColor(max) {
                return Math.floor(Math.random() * Math.floor(max))
            };
                let r = getRandomColor(255);
                let g = getRandomColor(255);
                let b = getRandomColor(255);
            
            divsArr.push(document.createElement("div"));
            divsArr[i].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            divsArr[i].style.width = `${30 + i * 10}px`;
            divsArr[i].style.height = `${30 + i * 10}px`;
            divsArr[i].style.marginTop = "10px";
        };
        mainDivEl.append(...divsArr);
        console.log(inputEl.value);
    };
    btnCreateEl.addEventListener("click", onCreateDivs);

btnClearEl.addEventListener("click", () => {
    mainDivEl.innerHTML = "";
    inputEl.value = "";
});
