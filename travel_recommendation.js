<script>
const recommendations = {
    beach: [
        { name: "Maldives", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", desc: "Crystal clear waters, white sandy beaches, and luxury resorts." },
        { name: "Bali", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", desc: "Beautiful tropical beaches with vibrant culture and nightlife." }
    ],
    temple: [
        { name: "Angkor Wat", img: "https://images.unsplash.com/photo-1581092332555-0120f8b6b9a1", desc: "Famous temple complex in Cambodia, known for its grandeur and history." },
        { name: "Golden Temple", img: "https://images.unsplash.com/photo-1596442975691-91dcd3f0c0bb", desc: "Sacred Sikh temple in India, renowned for its stunning architecture." }
    ],
    country: [
        { name: "Japan", img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c", desc: "A country of unique culture, advanced technology, and beautiful landscapes." },
        { name: "France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", desc: "Famous for its cuisine, art, and romantic cities like Paris." }
    ]
};

// Search Functionality
function searchRecommendations() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultsBox = document.getElementById("searchResults");
    resultsBox.innerHTML = "";

    if (!input) {
        resultsBox.innerHTML = "<p>Please enter a valid search query.</p>";
        return;
    }

    let keyword = null;
    if (input === "beach" || input === "beaches") keyword = "beach";
    else if (input === "temple" || input === "temples") keyword = "temple";
    else if (input === "country" || input === "countries") keyword = "country";

    if (!keyword) {
        resultsBox.innerHTML = "<p>No results found for your search.</p>";
        return;
    }

    // Display Recommendations
    if (keyword === "country") {
        // Country time feature
        const countries = [
            { name: "Japan", timeZone: "Asia/Tokyo" },
            { name: "France", timeZone: "Europe/Paris" },
            { name: "Italy", timeZone: "Europe/Rome" }
        ];

        let html = `<h3>Popular Countries</h3><ul>`;
        countries.forEach(country => {
            const options = { timeZone: country.timeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const countryTime = new Date().toLocaleTimeString('en-US', options);
            html += `<li>${country.name} - Current Time: ${countryTime}</li>`;
        });
        html += `</ul>`;
        resultsBox.innerHTML = html;

        // Optional: live update every second
        setInterval(() => {
            let liveHtml = `<h3>Popular Countries</h3><ul>`;
            countries.forEach(country => {
                const options = { timeZone: country.timeZone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                const countryTime = new Date().toLocaleTimeString('en-US', options);
                liveHtml += `<li>${country.name} - Current Time: ${countryTime}</li>`;
            });
            liveHtml += `</ul>`;
            resultsBox.innerHTML = liveHtml;
        }, 1000);
    } else {
        // Beach or Temple
        recommendations[keyword].forEach(place => {
            const card = document.createElement("div");
            card.classList.add("rec-card");
            card.innerHTML = `
                <img src="${place.img}" alt="${place.name}">
                <h3>${place.name}</h3>
                <p>${place.desc}</p>
            `;
            resultsBox.appendChild(card);
        });
    }
}

// Event Listeners
document.getElementById("searchBtn").addEventListener("click", searchRecommendations);

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("searchInput").value = "";
    document.getElementById("searchResults").innerHTML = "";
});
</script>
