const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const item = document.querySelector("#ingredients");

const listElement = ingredients.forEach((el) => {
  let list = document.createElement("li");
  list.textContent = el;
  item.append(list);
});

console.log(item);
