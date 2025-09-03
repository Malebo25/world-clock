function changeDateTime() {
  //  Johannesburg data

  let JohannesburgElement = document.querySelector("#jhb");
  let JohannesburgTimeElement = JohannesburgElement.querySelector(".time");
  let JohannesburgDateElement = JohannesburgElement.querySelector(".date");
  let johannesburgTime = moment().tz("Africa/johannesburg");

  JohannesburgTimeElement.innerHTML = johannesburgTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
  JohannesburgDateElement.innerHTML = johannesburgTime.format("MMMM Do YYYY");
  //  Los Angeles data
  let losAngelesElement = document.querySelector("#la");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");

  //   Paris Data
  let parisElement = document.querySelector("#paris");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTime = moment().tz("Europe/Paris");

  parisTimeElement.innerHTML = parisTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
}
changeDateTime();
setInterval(changeDateTime, 1000);

//city selection
function displayCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityname = timeZone.replace("_", " ").split("/")[1];
  let date = moment().tz(timeZone).format("MMMM Do YYYY");
  let time = moment().tz(timeZone).format("HH:mm [<small>]A[</small>]");

  let displayElement = document.querySelector("#cities");
  displayElement.innerHTML = `
         <div class="city" >
          <div>
            <h2>${cityname}</h2>
            <div class="date">${date}</div>
          </div>

          <div class="time">${time}</div>
        </div>
  `;
}
setInterval(displayCity, 1000);

let citySelection = document.querySelector("#city");
citySelection.addEventListener("change", displayCity);
