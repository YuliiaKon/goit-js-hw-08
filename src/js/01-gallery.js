// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// new import

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const galleryContanier = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryContanier.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
                </div>`;
        }
        ).join('');
}

// Реалізація делегування на div.gallery і отримання url великого зображення.

galleryContanier.addEventListener('click', onGalleryContanierClick)

function onGalleryContanierClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" width="800" height="600">`);
instance.show();

divRef.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
        instance.close();
    }
});