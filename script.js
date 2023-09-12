const apiKey="c8cfd3a86e334ec16e95c83ef8cf25d4";
const apiUrl="http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
async function checkweather(city){
const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);
var data=await response.json();
console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp+"°c";
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})
checkweather();
