document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");
    const checkoutButton = document.querySelector(".checkout");
  
    let cart = [];
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const product = button.parentElement;
        addToCart(product);
      });
    });
  
    function addToCart(product) {
      const productId = product.dataset.id;
      const productName = product.querySelector("h3").textContent;
      const productPrice = parseFloat(product.querySelector("p").textContent.slice(1));
  
      const itemExists = cart.find(item => item.id === productId);
  
      if (itemExists) {
        itemExists.quantity++;
      } else {
        cart.push({
          id: productId,
          name: productName,
          price: productPrice,
          quantity: 1
        });
      }
  
      updateCart();
    }
  
    function updateCart() {
      cartItems.innerHTML = "";
      let total = 0;
  
      cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.classList.add("cart-item");
        listItem.innerHTML = `
          <span>${item.name}</span>
          <span>${item.quantity} x $${item.price.toFixed(2)}</span>
        `;
        total += item.price * item.quantity;
        cartItems.appendChild(listItem);
      });
  
      cartTotal.textContent = total.toFixed(2);
    }
  
    checkoutButton.addEventListener("click", () => {
      alert("Checkout functionality is not implemented in this demo.");
    });
  });
  