// var position_lat;
// var position_lon;
var inpt = document.getElementById("search")

var dat = new Date();
var city = '';

var ww;

async function bycity() {
  var res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=cdc3c4bf75114845b6094447230308&q=${city}&days=3`)
  res = await res.json()
  return res
}
async function get_show() {
  var res = await fetch(`https://ipinfo.io/json?token=bb6dd1d8cc9be7`)
  res = await res.json()
  city = res.city
  console.log(res);
  var dat = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if (inpt.value != null && inpt.value != undefined) {
    inpt.addEventListener("keyup", async function () {
      var inp = inpt.value
      city = inp
      console.log(city);
      bycity()
      ww = await bycity()
      var cartona = `
      <div class="col-md-4 p-0 ">
      <div class=" first-t d-flex justify-content-between p-2 bgg">
        <span  id="">${days[dat.getDay()]} </span><span id="">${dat.getDate() + " " + monthNames[dat.getMonth()]}</span>
      </div>
      <div class="first p-3 ">
        <p class="text-white">${ww.location.name}</p>
        <div class="wh d-flex align-items-center justify-content-evenly">
          <p class="fa-6x fw-bold text-white">${ww.current.temp_c}<sup>o</sup>C</p>
          <img src="${ww.current.condition.icon}" alt="icon">
        </div>
        <div class="main-color">
          <p>${ww.current.condition.text}</p>
        </div>
        <span class="px-2"><img src="images/icon-umberella.png" class="pe-1" alt="">20%</span>
        <span class="px-2"><img src="images/icon-wind.png" class="pe-1" alt="">18km/h</span>
        <span class="px-2"><img src="images/icon-compass.png" class="pe-1" alt="">East</span>
      </div>
    </div>
    <div class="col-md-4 mid p-0">
      <div class="next-t d-flex justify-content-between p-2 bgg">
        <span id="day" class=" mx-auto">${days[dat.getDay() + 1]}</span>
      </div>
      <div class="next">
        <div class="wh pt-4 pb-2 d-flex flex-column align-items-center justify-content-center">
          <img class="icon" id="im" src="${ww.forecast.forecastday[1].day.condition.icon}" alt="icon">
          <div class="text-center">
            <p class="fa-2x fw-bolder mb-1 pt-3 text-white">${ww.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
            <p>${ww.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
          </div>
  
        </div>
        <div class="main-color text-center">
          <p>${ww.forecast.forecastday[1].day.condition.text}</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 p-0">
      <div class="first-t d-flex justify-content-between p-2 bgg">
        <span id="day" class=" mx-auto">${days[dat.getDay() + 2]}</span>
      </div>
      <div class="first">
        <div class="wh pt-4 pb-2 d-flex flex-column align-items-center justify-content-center">
          <img class="icon" id="im" src="${ww.forecast.forecastday[2].day.condition.icon}" alt="icon">
          <div class="text-center">
            <p class="fa-2x fw-bolder mb-1 pt-3 text-white">${ww.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
            <p>${ww.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
          </div>
  
        </div>
        <div class="main-color text-center">
          <p>${ww.forecast.forecastday[2].day.condition.text}</p>
        </div>
      </div>
    </div>
      `;
      document.getElementById("wh").innerHTML = cartona
    })
  }
  else {
    city = res.city
    console.log(city);
    await bycity()
    ww = await bycity()
    cartona = `
    <div class="col-md-4 p-0 ">
    <div class=" first-t d-flex justify-content-between p-2 bgg">
      <span  id="">${days[dat.getDay()]} </span><span id="">${dat.getDate() + " " + monthNames[dat.getMonth()]}</span>
    </div>
    <div class="first p-3 ">
      <p class="text-white">${ww.location.name}</p>
      <div class="wh d-flex align-items-center justify-content-evenly">
        <p class="fa-6x fw-bold text-white">${ww.current.temp_c}<sup>o</sup>C</p>
        <img src="${ww.current.condition.icon}" alt="icon">
      </div>
      <div class="main-color">
        <p>${ww.current.condition.text}</p>
      </div>
      <span class="px-2"><img src="images/icon-umberella.png" class="pe-1" alt="">20%</span>
      <span class="px-2"><img src="images/icon-wind.png" class="pe-1" alt="">18km/h</span>
      <span class="px-2"><img src="images/icon-compass.png" class="pe-1" alt="">East</span>
    </div>
  </div>
  <div class="col-md-4 mid p-0">
    <div class="next-t d-flex justify-content-between p-2 bgg">
      <span id="day" class=" mx-auto">${days[dat.getDay() + 1]}</span>
    </div>
    <div class="next">
      <div class="wh pt-4 pb-2 d-flex flex-column align-items-center justify-content-center">
        <img class="icon" id="im" src="${ww.forecast.forecastday[1].day.condition.icon}" alt="icon">
        <div class="text-center">
          <p class="fa-2x fw-bolder mb-1 pt-3 text-white">${ww.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
          <p>${ww.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
        </div>

      </div>
      <div class="main-color text-center">
        <p>${ww.forecast.forecastday[1].day.condition.text}</p>
      </div>
    </div>
  </div>
  <div class="col-md-4 p-0">
    <div class="first-t d-flex justify-content-between p-2 bgg">
      <span id="day" class=" mx-auto">${days[dat.getDay() + 2]}</span>
    </div>
    <div class="first">
      <div class="wh pt-4 pb-2 d-flex flex-column align-items-center justify-content-center">
        <img class="icon" id="im" src="${ww.forecast.forecastday[2].day.condition.icon}" alt="icon">
        <div class="text-center">
          <p class="fa-2x fw-bolder mb-1 pt-3 text-white">${ww.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
          <p>${ww.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
        </div>

      </div>
      <div class="main-color text-center">
        <p>${ww.forecast.forecastday[2].day.condition.text}</p>
      </div>
    </div>
  </div>
    `;
    document.getElementById("wh").innerHTML = cartona
  }
  city = res.city
  console.log(city);
  ww = await bycity()
  cartona = `
    <div class="col-md-4 p-0 ">
    <div class=" first-t d-flex justify-content-between p-2 bgg">
      <span  id="">${days[dat.getDay()]} </span><span id="">${dat.getDate() + " " + monthNames[dat.getMonth()]}</span>
    </div>
    <div class="first p-3 ">
      <p class="text-white">${ww.location.name}</p>
      <div class="wh d-flex align-items-center justify-content-evenly">
        <p class="fa-6x fw-bold text-white">${ww.current.temp_c}<sup>o</sup>C</p>
        <img src="${ww.current.condition.icon}" alt="icon">
      </div>
      <div class="main-color">
        <p>${ww.current.condition.text}</p>
      </div>
      <span class="px-2"><img src="images/icon-umberella.png" class="pe-1" alt="">20%</span>
      <span class="px-2"><img src="images/icon-wind.png" class="pe-1" alt="">18km/h</span>
      <span class="px-2"><img src="images/icon-compass.png" class="pe-1" alt="">East</span>
    </div>
  </div>
  <div class="col-md-4 mid p-0">
    <div class="next-t d-flex justify-content-between p-2 bgg">
      <span id="day" class=" mx-auto">${days[dat.getDay() + 1]}</span>
    </div>
    <div class="next">
      <div class="wh pt-4 pb-2 d-flex flex-column align-items-center justify-content-center">
        <img class="icon" id="im" src="${ww.forecast.forecastday[1].day.condition.icon}" alt="icon">
        <div class="text-center">
          <p class="fa-2x fw-bolder mb-1 pt-3 text-white">${ww.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
          <p>${ww.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>
        </div>

      </div>
      <div class="main-color text-center">
        <p>${ww.forecast.forecastday[1].day.condition.text}</p>
      </div>
    </div>
  </div>
  <div class="col-md-4 p-0">
    <div class="first-t d-flex justify-content-between p-2 bgg">
      <span id="day" class=" mx-auto">${days[dat.getDay() + 2]}</span>
    </div>
    <div class="first">
      <div class="wh pt-4 pb-2 d-flex flex-column align-items-center justify-content-center">
        <img class="icon" id="im" src="${ww.forecast.forecastday[2].day.condition.icon}" alt="icon">
        <div class="text-center">
          <p class="fa-2x fw-bolder mb-1 pt-3 text-white">${ww.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
          <p>${ww.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>
        </div>

      </div>
      <div class="main-color text-center">
        <p>${ww.forecast.forecastday[2].day.condition.text}</p>
      </div>
    </div>
  </div>
    `;
  document.getElementById("wh").innerHTML = cartona





  console.log((await bycity()));

}

// const sucss = (pos) => {
//     position_lat = pos.coords.latitude
//     position_lon = pos.coords.longitude
//     console.log(position_lon, position_lat)
//     console.log(pos.coords);
// }
// const eror = (er) => {
//     console.log(er.coords);
// }
// navigator.geolocation.getCurrentPosition(sucss, eror, {
// enableHighAccuracy: true,
// timeout: 5000
// })




get_show()







