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

  const modal = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);
  modal.show();

  window.addEventListener("keydown", closeEsc);
}

function closeEsc(e) {
  if (e.code === "Escape") {
    console.log(e.code);
    removeListen();
    modal.close();
  }
}

function removeListen() {
  window.removeEventListener("keydown", closeEsc);
}

// const galleryList = document.querySelector(".gallery");
// const galleryItemsMarkup = addGalleryItems(galleryItems);
// const modal = basicLightbox.create(`
//       <div class="modal-js" ></div>
//   `);

// galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// galleryList.addEventListener("click", onGalleryListClick);

// function addGalleryItems(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join("");
// }

// function onGalleryListClick(e) {
//   console.log(e);
//   e.preventDefault();
//   if (!e.target.classList.contains("gallery__image")) {
//     return;
//   }

//   modal.show((instance) => {
//     instance
//       .element()
//       .querySelector(
//         ".modal-js"
//       ).innerHTML = `<img src="${e.target.dataset.source}" alt="${e.target.alt}" width="800" height="600">`;
//   });

//   window.addEventListener("keydown", closeEsc);
// }

// function closeEsc(e) {
//   if (e.code === "Escape") {
//     console.log(e.code);
//     removeListen();
//     modal.close();
//   }
// }

// function removeListen() {
//   window.removeEventListener("keydown", closeEsc);
// }
