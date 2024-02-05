const button=document.getElementById("getLocation")

async function getData(lat,long){
    const promise=await fetch(
        `http://api.weatherapi.com/v1/current.json?key=5ea0cfb92f604701824134305240402&q=${lat},${long}&aqi=yes`
    )
    return await promise.json()
}
async function getLocation(position) {
   const result=await getData(position.coords.latitude,position.coords.longitude)
    console.log(result);
}
function failToLoad(){
    console.log("Something went wrong.");
}
button.addEventListener('click',async()=>{
    const result=navigator.geolocation.getCurrentPosition(getLocation,failToLoad)
})