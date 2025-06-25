document.getElementById("hum").addEventListener("click", () => {
  side.style.marginLeft = "0px";
  overlay.classList.remove("hidden");
  side.classList.remove("hidden");
});
const side = document.getElementById("sidebar");
const close = document.getElementById("closeside");
const overlay = document.getElementById("overlay");
const overlay2 = document.getElementById("overlay2");
const overlay3 = document.getElementById("overlay3");

close.addEventListener("click", () => {
  side.style.marginLeft = "-10000px";
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", () => {
  side.style.marginLeft = "-10000px";
  overlay.classList.add("hidden");
  mycart.classList.add("hidden");
});
overlay2.addEventListener("click", () => {
  overlay2.classList.add("hidden");
  mycart.classList.add("hidden");
  checkmark.classList.add("hidden");
  listItem.classList.remove("hidden");
  checkout.classList.remove("hidden");
  emptycart.classList.add("hidden");
  ordered.classList.remove("hidden");
});

const images = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];
let current = 0;
const img = document.getElementById("slider-img");
const rightBtn = document.getElementById("btnright");
const leftBtn = document.getElementById("btnleft");

function updateImage() {
  img.src = images[current];
  img.dataset.set = current + 1;
}
rightBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateImage();
});

leftBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateImage();
});

const cart = document.getElementById("cart");
const mycart = document.getElementById("mycart");
const avatar = document.getElementById("avatar");

cart.addEventListener("click", () => {
  mycart.classList.toggle("hidden");
  overlay2.classList.toggle("hidden");
});
avatar.addEventListener("click", () => {
  mycart.classList.remove("hidden");
  overlay2.classList.toggle("hidden");
});

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const quantity = document.getElementById("quantity");

const addToCart = document.getElementById("Addtocart");
const cartAmount = document.getElementById("cartAmount");
const emptycart = document.getElementById("emptyCart");
const multiple = document.getElementById("multiple");
const deleteicon = document.getElementById("deleteIcon");
const ordered = document.getElementById("ordered");
let count = 1;

minus.addEventListener("click", () => {
  if (count <= 1) {
    quantity.innerText = 1;
  } else {
    quantity.innerText = --count;
  }
});

plus.addEventListener("click", () => {
  quantity.innerText = ++count;
});

addToCart.addEventListener("click", () => {
  if (count >= 1) {
    cartAmount.classList.remove("hidden");
    cartAmount.textContent = quantity.innerText;
    emptycart.classList.add("hidden");

    let values = 125 * quantity.innerText;
    multiple.innerHTML = `${quantity.innerText} <span class="text-black">$${values}</span>`;
    ordered.classList.remove("hidden");
  }
});

deleteicon.addEventListener("click", () => {
  ordered.classList.add("hidden");
  emptycart.classList.remove("hidden");
  cartAmount.classList.add("hidden");
});

const checkout = document.getElementById("checkout");
const checkmark = document.getElementById("checkmark");
const listItem = document.getElementById("listItem");

checkout.addEventListener("click", () => {
  checkmark.classList.remove("hidden");
  cartAmount.classList.add("hidden");
  listItem.classList.add("hidden");
  checkout.classList.add("hidden");
  quantity.innerText = 1;
});

const modal = document.getElementById("modal");
const smallImg = document.getElementById("smallImg");

const smallimages = document.querySelectorAll(".smallImg");

smallimages.forEach((small) => {
  small.addEventListener("click", function () {
    smallimages.forEach((img) =>
      img.classList.remove("border-2", "border-orange-500")
    );

    this.classList.add("border-2", "border-orange-500");

    modal.classList.remove("hidden");
    overlay3.classList.remove("hidden");
  });
});

overlay3.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay3.classList.toggle("hidden");
});

const closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay3.classList.add("hidden");
});

const smallimg = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];
let curr = 0;
const imgs = document.getElementById("slider");
const right = document.getElementById("right");
const left = document.getElementById("left");

function updateImages() {
  imgs.src = smallimg[curr];
  imgs.dataset.set = curr + 1;
}
right.addEventListener("click", () => {
  curr = (curr + 1) % smallimg.length;
  updateImages();
});

left.addEventListener("click", () => {
  curr = (curr - 1 + smallimg.length) % smallimg.length;
  updateImages();
});
