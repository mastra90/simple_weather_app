// JavaScript:
updateWeatherFromApi ({location: "Melbourne"})

const btn = document.getElementById("form");
btn.addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await fetchWeatherFromAPI(e.target[0].value);
  updateWeatherInDom({...response, location:e.target[0].value});
  e.target[0].value = "";
});

async function updateWeatherFromApi ({location}) {
    const response = await fetchWeatherFromAPI(location);
    updateWeatherInDom({...response, location});
}

async function fetchWeatherFromAPI(location) {
    let url = `http://api.weatherapi.com/v1/current.json?key=6e2a12cd17ee48559d2120102232505&q=${encodeURIComponent(location)}`;

    try {
        const response = await fetch(url);

    const data = await response.json();
    return data;
}   
    catch (err) {
    console.log(err.error);
}
}




function updateWeatherInDom({current:{humidity, temp_c}, location}) {
    const destination = document.querySelector(".destination");
    const degree = document.querySelector(".degree");
    const humid = document.querySelector(".humid");

    destination.innerHTML = location;
    degree.innerHTML = `${temp_c}<span>°C</span>`;
    humid.innerHTML = `${humidity}<em>%</em>`;


    // console.log(location, humidity, temp_c)
}