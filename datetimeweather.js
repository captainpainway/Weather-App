$(document).ready(function() {
  setInterval(function() {
      $("#time").load("time.php");
      $("#ampm").load("ampm.php");
      $("#fulldate").load("date.php");
  }, 1000);
});  

$(document).ready(function() {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=4167147&units=imperial", function(current) {
    var roundedTemp = Math.round(current.main.temp);
    $("#temp").html(roundedTemp + "&deg;F");
    $("#status").html("<h2>" + current.weather[0].main + ": " + current.weather[0].description + "</h2>");
  });
});
