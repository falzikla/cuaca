var kota = "Kangboi";
var bahasa = "id";
var kunci = "#";
var satuan = "metric";
var ikonCuaca = "https://openweathermap.org/img/wn/";
var batas = 30;

var cuacas = new XMLHttpRequest();
cuacas.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q="+kota+"&units="+satuan+"&lang"+bahasa+"&appid="+kunci+"&cnt="+batas);
cuacas.send();
cuacas.addEventListener("load", () => {

    var cuacca = JSON.parse(cuacas.responseText);

    for (var i = 0; i < batas; i++) {
        let hariCuacaBesok = new Date(cuacca.list[i].dt * 1000).getDay();
        var hariIni = new Date().getDay();
        var hariBesok = new Date().getDay() + 1;    ///Penambahan///
        var hariLusa = new Date().getDay() + 2;     ///Penambahan///
        var hariTulat = new Date().getDay() + 3;    ///Penambahan///

        var kodeNomorCuaca = cuacca.list[i].weather[0].icon;

        var hasilIkon = ikonCuaca + kodeNomorCuaca + ".png"
        ///Mulai///
        // konversiDt(cuacca.list[i].dt, "waktuIni");
        // document.getElementById("waktuIni").innerHTML += 
        // "<img class=\"tengahIkon\" src="+hasilIkon+"></img>" + 
        // "<br>Cuaca : " + terjemahCuaca(cuacca.list[i].weather[0].main) + 
        // "<br>Deskripsi : " + terjemahCuacaDeskripsi(cuacca.list[i].weather[0].description) +
        // "<br>Suhu : " + Math.floor(cuacca.list[i].main.temp)+" C&#176;" + "<br><br>";
        
        if (hariCuacaBesok == hariAngka(0)) {
            konversiDt(cuacca.list[i].dt, "waktuIni");
            document.getElementById("waktuIni").innerHTML += 
            "<img class=\"tengahIkon\" src="+hasilIkon+"></img>" + 
            "<br>Cuaca : " + terjemahCuaca(cuacca.list[i].weather[0].main) + 
            "<br>Deskripsi : " + terjemahCuacaDeskripsi(cuacca.list[i].weather[0].description) +
            "<br>Suhu : " + Math.floor(cuacca.list[i].main.temp)+" C&#176;" + "<br><br>";
        } else
        if ( hariCuacaBesok == hariAngka(1)) {
            konversiDt(cuacca.list[i].dt, "waktuBesok");
            document.getElementById("waktuBesok").innerHTML += 
            "<img class=\"tengahIkon\" src="+hasilIkon+"></img>" + 
            "<br>Cuaca : " + terjemahCuaca(cuacca.list[i].weather[0].main) + 
            "<br>Deskripsi : " + terjemahCuacaDeskripsi(cuacca.list[i].weather[0].description) +
            "<br>Suhu : " + Math.floor(cuacca.list[i].main.temp)+" C&#176;" + "<br><br>";
        } else
        if ( hariCuacaBesok == hariAngka(2)) {
            konversiDt(cuacca.list[i].dt, "waktuLusa");
            document.getElementById("waktuLusa").innerHTML += 
            "<img class=\"tengahIkon\" src="+hasilIkon+"></img>" + 
            "<br>Cuaca : " + terjemahCuaca(cuacca.list[i].weather[0].main) + 
            "<br>Deskripsi : " + terjemahCuacaDeskripsi(cuacca.list[i].weather[0].description) +
            "<br>Suhu : " + Math.floor(cuacca.list[i].main.temp)+" C&#176;" + "<br><br>";
        } else
        if ( hariCuacaBesok == hariAngka(3)) {
            konversiDt(cuacca.list[i].dt, "waktuTulat");
            document.getElementById("waktuTulat").innerHTML += 
            "<img class=\"tengahIkon\" src="+hasilIkon+"></img>" + 
            "<br>Cuaca : " + terjemahCuaca(cuacca.list[i].weather[0].main) + 
            "<br>Deskripsi : " + terjemahCuacaDeskripsi(cuacca.list[i].weather[0].description) +
            "<br>Suhu : " + Math.floor(cuacca.list[i].main.temp)+" C&#176;" + "<br><br>";
        }



        console.log(hariCuacaBesok);

        ///Akhir///
    }

    // console.log(cuacca);
    
});
