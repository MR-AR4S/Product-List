#!/usr/bin/env node

fetch("/Projects/Product-List/data/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Use the JSON data in your project
    let generateHTML = "";

    data.forEach((product) => {
      generateHTML += `<div class="product-container">
          <div class="thumbnail-place">
            <img class="thumbnail-img" src="${
              product.image.thumbnail
            }" alt="Waffle">
            <div class="add-to-cart">
              <img src="./assets/images/icon-add-to-cart.svg" alt="">
              Add to Cart
            </div>
          </div>
          <div class="product-detail">
            <p class="product-title">${product.category}</p>
            <p class="product-name">${product.name}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
          </div>
        </div>`;
    });

    document.querySelector(".product-container").innerHTML = generateHTML;

    const addToCartBtns = document.querySelectorAll(".add-to-cart");
    const thumbnailImg = document.querySelectorAll(".thumbnail-img");

    addToCartBtns.forEach((btn, index) => {
      const img = thumbnailImg[index];

      btn.addEventListener("mouseenter", () => {
        img.classList.add("border-active");
      });

      btn.addEventListener("mouseleave", () => {
        img.classList.remove("border-active");
      });
    });
  })

  .catch((error) => console.error("Error reading the JSON file:", error));
