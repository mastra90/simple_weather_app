// JavaScript:

// const btn = document.getElementById("submit-button");
const btn = document.getElementById("form");
btn.addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await fetchWeatherFromAPI(e.target[0].value);
  e.target[0].value = "";
  updateWeatherInDom(response)
  console.log(response);
});

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



// {current.humidity: 62, current.temp_c: 13}

function updateWeatherInDom({current:{humidity, temp_c}}) {
    console.log(humidity, temp_c)
}