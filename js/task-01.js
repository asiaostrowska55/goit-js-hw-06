const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

const listElement = list.forEach((element) => {
  let title = element.querySelector("h2").textContent;
  let listItem = element.querySelector("ul").children.length;
  console.log(`Category: ${title}\nElements: ${listItem}`);
});
