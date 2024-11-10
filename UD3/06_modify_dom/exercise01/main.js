document.querySelectorAll("article h2")[1].textContent = "Nuevo Título del Segundo H2";

const usernameElement = document.getElementById("username");
console.log(usernameElement);

const firstParagraphsInArticles = document.querySelectorAll("article .first");
firstParagraphsInArticles.forEach((element) => {
    element.style.color = "blue";
});

const liItems = document.querySelectorAll("li.item");
console.log(liItems);

const buttonsInButtonsClass = document.querySelectorAll(".buttons button");
console.log(buttonsInButtonsClass);
const firstParagraph = document.querySelector("p.first");
firstParagraph.style.backgroundColor = "lightgray";

buttonsInButtonsClass.forEach((button) => {
    button.style.color = "white";
});
