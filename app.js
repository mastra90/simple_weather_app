

const btn = document.getElementById ("submit-button");
btn.addEventListener("click", async (e) => {
    const input = document.getElementById ("location");
    const response = await fetchWeatherFromAPI(input.value);
    console.log(response);
});

async function fetchWeatherFromAPI(location) {
    let url = `https://api.api-ninjas.com/v1/weather?city=${location}`;
    const apiKey = "gGxXpwmck2VMOMzUYrWpUA==w4Ds6hsi7BpTaMka";

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey,
            },
    });

    const data = await response.json();
    return data;
}   
    catch (err) {
    console.log(err.error);
}
}

