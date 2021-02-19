const url = "http://api.tvmaze.com/shows";
const resultsContainer = document.querySelector(".results");


async function getShows() {
   
    try {
        const response = await fetch(url);
        const shows = await response.json();

        console.log(shows);

        resultsContainer.innerHTML = "";

        createHTML(shows);

    } 
    catch (error) {
        resultsContainer.innerHTML = error;
    }
}

getShows();

function createHTML(shows) {
    for (let i = 0; i < shows.length; i++) {
        
        if (i === 10) {
            break;
        }

        resultsContainer.innerHTML += `<a href="details.html?id=${shows[i].id}" class="card">
                                            <div class="details-image" style="background-image: url(${shows[i].image.medium})"></div>
                                            <div class="details">
                                                <h2 class="name">${shows[i].name}</h2>
                                                <p class="language">Language: ${shows[i].language}</p>
                                                <p class="premiered">Premiered: ${shows[i].premiered}</p>                                                                                                                                                        
                                            </div>
                                      </a>`;
    }
    
}
