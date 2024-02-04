const button = document.getElementById("LocateCity");
const input = document.getElementById("cityInput");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemprature = document.getElementById("city-temp");
const region=document.getElementById("city-region");
const country=document.getElementById("city-country");
async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=5ea0cfb92f604701824134305240402&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}
button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerText = result.location.name;
  region.innerText=result.location.region;
  country.innerText=result.location.country;
  cityTime.innerText=result.location.localtime;
  cityTemprature.innerText=result.current.temp_c
}); 

// http://api.weatherapi.com/v1/current.json?key=5ea0cfb92f604701824134305240402&q=London&aqi=yes
