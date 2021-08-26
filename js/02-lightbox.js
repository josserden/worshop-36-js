import { galleryItems } from './gallery-items.js';
// Change code below this line

import refs from './refs.js';

const { gallery } = refs;

console.log(gallery);

console.log(galleryItems);

const markup = ({ original, preview, description }) => {
	return `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>
`;
};

const createGalleryMarkup = galleryItems.map((item) => markup(item)).join('');

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup);

let carousel = new SimpleLightbox('.gallery a', {
	animationSpeed: 500,
	fadeSpeed: 500,
	captions: true,
	captionType: 'attr',
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
});

carousel.on(() => {
	carousel.next();
});
