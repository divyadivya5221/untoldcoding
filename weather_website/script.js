const apiKey = "2d754b0527ba41b9fd6d9deea61b52c9";  


function getWeather() {
  
const city = document.getElementById
("cityInput").value.trim();

  
if (!city) {
    
alert("Please enter a city name");
    
return;
  
}

 
const url = `https://api.openweathermap
.org/data/2.5/weather?q
=${city}&appid=${apiKey}&units=metric`;

  
fetch(url)
   
 .then(response => {
      
if (!response.ok) {
       
 throw new Error("City not found");
      
}
      
return response.json();
    
})
    
.then(data => {
      
const temp = data.main.temp;
      
const desc = data.weather[0]
.description;
      
const icon = data.weather[0].icon;
      
const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      
document.getElementById("weatherInfo").innerHTML = `
        <h3>${data.name}</h3>
        <img src="${iconUrl}" alt="${desc}">
        <p><strong>${temp}°C</strong></p>
        <p>${desc}</p>
      `;
    
})
    
.catch(error => {
      document.getElementById("weatherInfo").innerHTML = `<p style="color:red;">${error.message}</p>;`
   
 });

}