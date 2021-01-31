var key = "#";
var kota = "Kangboi";
var cuacaIkonURL = "https://openweathermap.org/img/wn/";

var cuaca = new XMLHttpRequest();
cuaca.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+kota+"&lang=id&appid="+key);
cuaca.send();
cuaca.addEventListener("load", () => {
    var kodeIkon = JSON.parse(cuaca.responseText);
    var suhuC = kodeIkon.main.temp;
    suhuC = suhuC - 273,15;

    var rasaSuhu = kodeIkon.main.feels_like;
    rasaSuhu = rasaSuhu - 273,15;

    var cuacaIkon = kodeIkon.weather[0].icon;
    var hasilIkonCuaca = cuacaIkonURL+cuacaIkon+".png";
    var waaktu = wattu(kodeIkon.dt, kodeIkon.sys.sunset, kodeIkon.sys.sunrise);
    var artiCuaca = bahasaCuaca(kodeIkon.weather[0].main, "desks");  

    document.getElementById("nama").innerHTML+=" "+kodeIkon.name;
    document.getElementById("suhu").innerHTML+=" "+Math.floor(suhuC)+" C&#176;";
    document.getElementById("desk").innerHTML+=" "+kodeIkon.weather[0].description;
    document.getElementById("ikon").innerHTML +=" <img class=\"cuac tengahIkons\" src="+hasilIkonCuaca+"></img>";
    document.getElementById("wind").innerHTML+=" "+kodeIkon.wind.speed+" m/s";
    document.getElementById("teka").innerHTML+=" "+kodeIkon.main.pressure+" hPa";
    document.getElementById("awan").innerHTML+=" "+kodeIkon.clouds.all+" %";
    document.getElementById("rasa").innerHTML+=" "+Math.floor(rasaSuhu)+" C&#176;";
    document.getElementById("angi").innerHTML+=" "+kodeIkon.wind.deg+"&#176";
    document.getElementById("pand").innerHTML+=" "+kodeIkon.visibility+" m";
    document.getElementById("humi").innerHTML+=" "+kodeIkon.main.humidity+" %";
    document.getElementById("nega").innerHTML+=", "+kodeIkon.sys.country;
});
