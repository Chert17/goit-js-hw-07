import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryItemsMarkup = addGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// galleryList.addEventListener("click", onGalleryListClick);

function addGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a");
gallery.options.captionsData = "alt";
gallery.options.captionDelay = 250;
