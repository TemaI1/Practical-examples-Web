const photoContainer = document.getElementById('photo-container');

const page = 346;

async function fetchPhotos() {
    const response = await fetch(`https://api.unsplash.com/photos/?page=${page}&client_id=2GnzNmTIR78cXgHd8zdxAN5BhlJgjxILzVIGQ47KzwE`);
    const photos = await response.json();
    return photos;
}

async function loadMorePhotos() {
    fetchPhotos().then(elem => {
        elem.forEach(element => {
            photoContainer.innerHTML +=
                `<div class="img"><img src="${element.urls.small}"></div>
                <h4 class="description">${element.alt_description}</h4>
                <div class="date">
                    <p class="user_name">author: ${element.user.first_name}</p>
                    <p class="likes">${element.likes} likes</p>
                </div>`
        });
    });
}

// window.addEventListener('scroll', () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         loadMorePhotos();
//     }
// });


loadMorePhotos();