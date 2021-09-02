const itemsEl = document.querySelectorAll(".item");
console.log(`В списке ${itemsEl.length} категории`);

    const listCategories = itemsEl.forEach
(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
},
);