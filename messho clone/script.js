
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("count").textContent = cartCount;
  alert("Product added to cart!");
}

function searchProducts() {
  const query = document
    .getElementById("search")
    .value.toLowerCase().trim();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(query) ? "" : "none";
  });
}

function showAll() {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = "";
  });

  document.getElementById("search").value = "";
}