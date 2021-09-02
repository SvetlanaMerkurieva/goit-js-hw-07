const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector("ul");
const items = ingredients.map(
    item => {
        const liEl = document.createElement("li");
        liEl.textContent = item;
        return liEl;
    }
);
ingredientsEl.append(...items);

