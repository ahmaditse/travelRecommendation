let data = [];

fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(json => {
        data = json;
        console.log(data);
    });

function searchPlaces() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (!keyword) return;

    let filtered = data.filter(item =>
        item.category.toLowerCase().includes(keyword)
    );

    filtered.forEach(place => {
        resultsDiv.innerHTML += `
            <div class="card">
                <img src="${place.imageUrl}">
                <div>
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                </div>
            </div>
        `;
    });
}

function clearResults() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("searchInput").value = "";
}
function getCountryTime(timeZone) {
    const options = {
        timeZone: timeZone,
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return new Date().toLocaleTimeString('en-US', options);
}
