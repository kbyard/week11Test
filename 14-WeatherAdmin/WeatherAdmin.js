var UserSearch = require('./UserSearch');
var fs = require('fs')



function WeatherAdmin() {
  this.newUserSearch = function (name, location) {
    var search = new UserSearch(name, location);
    var logTxt = "\nName: " + search.name + " Location: " + search.location + " Date: " + search.date;
    fs.appendFile("log.txt", logTxt);

    search.getWeather();
  }
  this.getData = function () {

    fs.readFile('log.txt', 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
  }
}

var weather = new WeatherAdmin();
weather.newUserSearch("ryan", "lehi, UT");
weather.getData();
