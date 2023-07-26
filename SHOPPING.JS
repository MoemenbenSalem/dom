const cart = document.getElementById("cart");
const totalPriceElement = document.getElementById("total-price");
let totalPrice = 0;

// Sample items for demonstration
const items = [
  { id: 1, name: "Item 1", price: 10, quantity: 1, liked: false },
  { id: 2, name: "Item 2", price: 15, quantity: 1, liked: false },
  { id: 3, name: "Item 3", price: 20, quantity: 1, liked: false },
];

// Render the cart with items
function renderCart() {
  cart.innerHTML = "";

  items.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.className = "cart-item";

    const itemDetails = document.createElement("div");
    itemDetails.className = "item-details";

    const itemName = document.createElement("div");
    itemName.className = "item-name";
    itemName.textContent = item.name;

    const itemPrice = document.createElement("div");
    itemPrice.className = "item-price";
    itemPrice.textContent = `$${item.price}`;

    const itemQuantity = document.createElement("input");
    itemQuantity.className = "item-quantity";
    itemQuantity.type = "number";
    itemQuantity.value = item.quantity;
    itemQuantity.min = "1";
    itemQuantity.addEventListener("change", () => updateTotalPrice());

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      removeItem(item.id);
      renderCart();
    });

    const heartIcon = document.createElement("span");
    heartIcon.className = "heart-icon";
    heartIcon.innerHTML = item.liked ? "❤️" : "♡";
    heartIcon.addEventListener("click", () => {
      item.liked = !item.liked;
      renderCart();
    });

    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemPrice);
    itemDetails.appendChild(itemQuantity);

    itemElement.appendChild(itemDetails);
    itemElement.appendChild(deleteButton);
    itemElement.appendChild(heartIcon);

    cart.appendChild(itemElement);
  });

  updateTotalPrice();
}

// Update the total price based on quantity and deletions
function updateTotalPrice() {
  totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Remove an item from the cart
function removeItem(itemId) {
  const itemIndex = items.findIndex(item => item.id === itemId);
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
  }
}

renderCart();




