import { galleryItems } from './gallery-items.js';
// Change code below this line

import refs from './refs.js';

const { gallery } = refs;

console.log(gallery);

console.log(galleryItems);

const markup = ({ preview, original, description }) => {
	return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>
`;
};

const createGalleryMarkup = galleryItems.map((item) => markup(item)).join('');

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup);

gallery.addEventListener('click', openModal);

function openModal(e) {
	e.preventDefault();

	if (e.target === e.currentTarget) {
		return;
	}

	const instance = basicLightbox.create(`
    <div class="modal">
        <img
      src=${e.target.dataset.source}
      alt=${e.target.alt}
    />
    </div>
`);

	instance.show();

	window.addEventListener('keydown', (e) => {
		if (e.code === 'Escape') {
			instance.close();
		}
	});
}
