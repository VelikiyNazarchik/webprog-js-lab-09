import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
    {
        preview: 'https://cdn.pixabay.com/photo/2021/03/16/13/14/car-6099761__480.jpg',
        original: 'https://cdn.pixabay.com/photo/2021/03/16/13/14/car-6099761_1280.jpg',
        description: 'Nissan Skyline R34',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2017/05/03/14/24/audi-2281218__480.jpg',
        original: 'https://cdn.pixabay.com/photo/2017/05/03/14/24/audi-2281218_1280.jpg',
        description: 'Audi R8',
    },
    {
        preview: 'https://cdn.pixabay.com/photo/2019/03/05/13/50/vehicle-4036203__480.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/03/05/13/50/vehicle-4036203_1280.jpg',
        description: 'Porsche 911 GT RS',
    }
];

const galleryContainer = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${original}">
                <img class="gallery-image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `).join('');
}

galleryContainer.innerHTML = createMarkup(images);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
