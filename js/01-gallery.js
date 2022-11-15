import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryItemsMarkup = addGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryList.addEventListener("click", onGalleryListClick);

function addGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryListClick(e) {
  console.log(e);
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close(() => {
        window.removeEventListener("keydown", closeEsc);
      });
    }
  });
}

function closeEsc() {}
