"use strict";

// VARIABLES //

// tableau qui contient 2 objets "en dur"
const items = [
  { name: "tomate", qty: 2 },
  { name: "tabouret", qty: 1 },
];

// FONCTIONS //

function saveItems() {
  // création d'une variable objet
  let item = {};
  // affectation name et qty d'un objet
  item.name = document.querySelector("#name").value;
  item.qty = document.querySelector("#qty").value;
  // on appelle la fonction qui permet de savoir si un item est en double : si non, on push
  let double = isDbl(item);
  if (double == false) {
    items.push(item);
    alert("un nouveau produit a été ajouté");
  }
  displayItems();
}

function isDbl(item) {
  let double = false;
  // on parcourt le tableau : item = line
  items.forEach((line, index) => {
    if (line.name == item.name) {
      // si le nouvel item est égal à un item déjà présent dans la liste, on additionne les deux quantités
      // on retrouve la position de l'item à additionner grâce à son index
      items[index].qty = parseInt(line.qty) + parseInt(item.qty);
      double = true;
      alert("la quantité a été mise à jour");
    }
  });
  return double;
}

function displayItems() {
  let html = "<ul>";
  items.forEach((item, index) => {
    html += `<li data-index="${index}">${item.name} - quantité : ${item.qty}</li>`;
  });
  html += "</ul>";
  document.querySelector("#list").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  displayItems();
  document.querySelector("#save").addEventListener("click", function () {
    saveItems(), displayItems();
  });
});
