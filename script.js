const options = {
 	method: 'GET',
 	headers: {
		'X-RapidAPI-Key': '8bcb280836msh3c2f8cf2bdba7ecp1aa498jsn22b950458744',
 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
 	}
};


var submit = document.getElementById("submit");
var Cloud = document.getElementById("Cloud");
var Temperature = document.getElementById("Temperature");
var Temperature2 = document.getElementById("Temperature2");
var Feels_Like = document.getElementById("Feels_Like");
var Humidity = document.getElementById("Humidity");
var Humidity2 = document.getElementById("Humidity2");
var Sunset = document.getElementById("Sunset");
var Sunrise = document.getElementById("Sunrise");
var Wind_Degrees = document.getElementById("Wind_Degrees");
var Wind_Speed2 = document.getElementById("Wind_Speed2");
var Wind_Speed = document.getElementById("Wind_Speed");
var Max_Temp = document.getElementById("Max_Temp");
var Min_Temp = document.getElementById("Min_Temp");
var cityName = document.getElementById("cityName");
const title = document.getElementsByClassName("fetch-data");

const getweather = (city) =>{
     cityName.innerHTML=city
     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response);
        Cloud.innerHTML = response.cloud_pct
        Temperature.innerHTML = response.temp
        Temperature2.innerHTML = response.temp
         Feels_Like.innerHTML = response.feels_like
         Humidity.innerHTML = response.humidity
        Humidity2.innerHTML = response.humidity
         Min_Temp.innerHTML = response.min_temp
         Max_Temp.innerHTML = response.max_temp
        Wind_Speed.innerHTML = response.wind_speed
        Wind_Speed2.innerHTML = response.wind_speed
         Wind_Degrees.innerHTML = response.wind_degrees
        Sunrise.innerHTML = response.sunrise
        Sunset.innerHTML = response.sunset

     })
	 .catch(err => console.error(err));

     console.log(submit);
 }

 submit.addEventListener("click", (e)=>{
     e.preventDefault()
    getweather(city.value)
 });

 

 function getDefWeather() {
    const loc = ["Lucknow", "Jaipur","New York"]; 
    // "New york", "London", "Kolkata"];
    loc.forEach(e => {
        const locdata = document.getElementsByClassName(e);

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ e, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            const apidata = [response.cloud_pct, response.temp, response.feels_like, response.humidity, response.min_temp, response.max_temp, response.wind_speed, response.wind_degrees, response.sunrise, response.sunset];
            for (var i=0; i<apidata.length; i++) {
                locdata[i].innerHTML = apidata[i];
            }
         })
         .catch(err => console.error(err));
    
         console.log(submit);
    });
 };

 getDefWeather();
 
 