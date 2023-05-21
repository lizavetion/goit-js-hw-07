import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const items =[];

galleryItems.forEach(element => {
    const galleryItem = document.createElement('li');
    galleryItem.className = 'gallery_item';
    const galleryLink = document.createElement('a');
    galleryLink.className = 'gallery_link';
    galleryLink.href = element.original;
    const galleryImage = document.createElement('img');
    galleryImage.className = 'gallery_image';
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original);
    galleryImage.alt = element.description;
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImage);
    items.push(galleryItem);
})

gallery.append(...items);

new SimpleLightbox ('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})
console.log(galleryItems);
