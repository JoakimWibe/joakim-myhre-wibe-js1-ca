const detailContainer = document.querySelector(".details-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "http://api.tvmaze.com/shows/" + id;

console.log(url);

async function fetchShow() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);
    }
    catch (error) {
        detailContainer.innerHTML = error;
    }
}

fetchShow();

function createHTML(details) {

    document.title = details.name;

    detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="details-image" style="background-image: url(${details.image.medium})"></div>
                                <div class="details-summary">${details.summary}</div>
                                <div class="details-rating">Rating: ${details.rating.average}</div>
                                <div class="details-genre">Genres: ${details.genres}</div>`;
    

}
