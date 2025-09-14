// console.log("=== Hour 1: JSON Basics===")
// let student = {
//     name:"Asha",
//     age:21,
//     marks:[85,90,78]
// };

// let jsonString = JSON.stringify(student);
// console.log("JSON String:",jsonString);

// let parsedObj=JSON.parse(jsonString);
// console.log("Parsed Object:",parsedObj)

// console.log("=== Hour 2 Ajax with fetch===");

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//    .then(response => responsse.json())
//    .then(data => console.log("Fetched Data:",data))
//    .catch(error => console.error ("Eror:",error));

// fetch("https://jsonplaceholder.typicode.com/posts/")
//    .then(response => response.json())
//    .then(data => console.log("Fetched Data:",data))
//    .catch(error => console.error ("Eror:",error));

// fetch("https://jsonplaceholder.typicode.com/users")
//    .then(res => res.json())
//    .then(users => {
//       let output = "<h3>User List</h3><ul>";
//       users.forEach(user => {
//          output += `<li>${user.name} (${user.email})</li>`;
//       });
//       output += "</ul>";
//       document.body.innerHTML += output;
//    });

//    console.log("=== weather Info Fetcher Project===");

// const cityCoords = {
//    "bangalore": { lat: 12.97, lon: 77.59 },
//    "mumbai": { lat: 19.07, lon: 72.87 },
//    "delhi": { lat: 28.61, lon: 77.20 },
//    "chennai": { lat: 13.08, lon: 80.27 },
//    "kolkata": { lat: 22.57, lon: 88.36 }
// };

// document.getElementById("fetchWeatherBtn").addEventListener("click", () => {
//    let city = document.getElementById("cityInput").value.toLowerCase().trim();

//    if (!cityCoords[city]) {
//       document.getElementById("weather").innerHTML = "⚠️ City not in list";
//       return;
//    }

//    let coords = cityCoords[city];
//    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

//    fetch(url)
//       .then(res => res.json())
//       .then(data => {
//          if (data.current_weather) {
//             document.getElementById("weather").innerHTML =
//                `<h3>Weather in ${city}</h3>
//                 <p>🌡️ Temp: ${data.current_weather.temperature}°C</p>
//                 <p>🌬️ Wind: ${data.current_weather.windspeed} km/h</p>
//                 <p>🕒 Time: ${data.current_weather.time}</p>`;
//          } else {
//             document.getElementById("weather").innerHTML = "⚠️ Weather data not available";
//          }
//       })
//       .catch(err => {
//          document.getElementById("weather").innerHTML = "⚠️ Error fetching weather data";
//          console.error(err);
//       });
// });


const cityCoords = {
   "bangalore": { lat: 12.97, lon: 77.59 },
   "mumbai": { lat: 19.07, lon: 72.87 },
   "delhi": { lat: 28.61, lon: 77.20 },
   "chennai": { lat: 13.08, lon: 80.27 },
   "kolkata": { lat: 22.57, lon: 88.36 }
};

$(document).ready(function () {
   $("#fetchWeatherBtn").click(function () {
      let city = $("#cityInput").val().toLowerCase().trim();

      if (!cityCoords[city]) {
         $("#weather").html("⚠️ City not in list");
         return;
      }

      let coords = cityCoords[city];
      let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

      $.getJSON(url, function (data) {
         if (data.current_weather) {
            $("#weather").html(`
               <h3>Weather in ${city}</h3>
               <p>🌡️ Temp: ${data.current_weather.temperature}°C</p>
               <p>🌬️ Wind: ${data.current_weather.windspeed} km/h</p>
               <p>🕒 Time: ${data.current_weather.time}</p>
            `);
         } else {
            $("#weather").html("⚠️ Weather data not available");
         }
      }).fail(function (err) {
         $("#weather").html("⚠️ Error fetching weather data");
         console.error(err);
      });
   });
});