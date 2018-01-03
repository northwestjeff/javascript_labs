

function wallPaper() {

}


var options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        type: 'GET',
        data: {
            APPID: 'a4c0e8e842ba6b3f06d47fbb4dd5dab3',
            lat: crd.latitude.toFixed(2),
            lon: crd.longitude.toFixed(2),
            units: "imperial"
        },
        success: function (response) {
            console.log(response)
            $('#city').html(response.name)
            $('#temp').html(response.main.temp.toFixed(0) + " F")
            $('#wind').html(response.wind.speed.toFixed(0) + " mph")
            for (i = 0; i < response.weather.length; i++) {
                $('#prec').append('<li>' + response.weather[i].description + '</li>')
            }
            if (response.weather[0].description.includes("rain") === true) {
              $('.main').css('background-image', 'url("https://ravencorwin.files.wordpress.com/2013/02/fi-watching-rain.jpg")');

            } else if ($('.datapoint')[2].children[0].innerHTML.includes("snow") === true) {
                $('.main').css('background-image', 'url("https://lh3.googleusercontent.com/cTdawK_8M3f8LodY_rpdc-xzwOFLpVyMSbnRh_A_dQAYWw1dl_frS_FcWpxlJgdf7Q=h900")');
            } else if ($('.datapoint')[2].children[0].innerHTML.includes("cloud") === true) {
                $('.main').css('background-image', 'url("https://c1.staticflickr.com/1/64/218773074_908e6c3147_b.jpg")');
            } else if ($('.datapoint')[2].children[0].innerHTML.includes("clear") === true) {
                $('.main').css('background-image', 'url("http://eskipaper.com/images/cat-in-sunshine-1.jpg")');
            } else {
                $('.main').css('background-image', 'url("http://www.dgrescue.org.uk/greyhound-and-cat.jpg")');
        }
    }
})
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);



$('#search').submit(function () {
  console.log("submit")
  event.preventDefault()
  $('#prec').empty()

  $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      type: 'GET',
      data: {
          APPID: 'a4c0e8e842ba6b3f06d47fbb4dd5dab3',
          // lat: crd.latitude.toFixed(2),
          // lon: crd.longitude.toFixed(2),
          q: $('#city-search').val(),
          units: "imperial"
      },
      success: function(response) {
          console.log(response)
          $('#city').html(response.name)
          $('#temp').html(response.main.temp.toFixed(0) + " F")
          $('#wind').html(response.wind.speed.toFixed(0) + " mph")
          for (i = 0; i < response.weather.length; i++) {
              $('#prec').append('<li>' + response.weather[i].description + '</li>')
            }
          if (response.weather[0].description.includes("rain") === true) {
              $('.main').css('background-image', 'url("https://ravencorwin.files.wordpress.com/2013/02/fi-watching-rain.jpg")');
            } else if ($('.datapoint')[2].children[0].innerHTML.includes("snow") === true) {
                $('.main').css('background-image', 'url("https://lh3.googleusercontent.com/cTdawK_8M3f8LodY_rpdc-xzwOFLpVyMSbnRh_A_dQAYWw1dl_frS_FcWpxlJgdf7Q=h900")');
            } else if ($('.datapoint')[2].children[0].innerHTML.includes("cloud") === true) {
                $('.main').css('background-image', 'url("https://c1.staticflickr.com/1/64/218773074_908e6c3147_b.jpg")');
            } else if ($('.datapoint')[2].children[0].innerHTML.includes("clear") === true) {
                $('.main').css('background-image', 'url("http://eskipaper.com/images/cat-in-sunshine-1.jpg")');
            } else {
                $('.main').css('background-image', 'url("http://www.dgrescue.org.uk/greyhound-and-cat.jpg")');
        }

          }
      }
)
});


