/* function to display the output from the user's input */
function weather() {
	var city = $("#cityname").val();

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f1ec7e9f7f21c30e45a66b0f50e1cda8", 
	function(data){
 		console.log(data);

 		var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

 		var temp = Math.floor(data.main.temp);

 		var weather = data.weather[0].main;

 		/* console.log(icon); -- to check weather i con is showing up or not */
 		/* adding icon inside the html document containg icon class */
 		$('.icon').attr('src', icon);
 		$('.weather').append(weather)
 		$('.temp').append(temp);

	}
);
}

/*
$(document).ready(function(){
    $("#clearbutton").click(function(){
        $("#clear").html('');
    });
});

*/


