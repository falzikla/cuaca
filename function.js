function wattu(sekara, terben, terbir) {
    let sekarang = sekara;
    let terbenam = terben;
    let terbit = terbir;

    var sekarang1= new Date(sekarang * 1000);
    var terbenam1 = new Date(terbenam * 1000);
    var terbit1 = new Date(terbit * 1000);

    var hours1 = "0" + sekarang1.getHours();
    var hours2 = "0" + terbenam1.getHours();
    var hours3 = "0" + terbit1.getHours();

    var minutes1 = "0" + sekarang1.getMinutes();
    var minutes2 = "0" + terbenam1.getMinutes();
    var minutes3 = "0" + terbit1.getMinutes();

    var seconds1 = "0" + sekarang1.getSeconds();
    var seconds2 = "0" + terbenam1.getSeconds();
    var seconds3 = "0" + terbit1.getSeconds();

    var seka = hours1.substr(-2) + ':' + minutes1.substr(-2) + ':' + seconds1.substr(-2);
    var terbe = hours2.substr(-2) + ':' + minutes2.substr(-2) + ':' + seconds2.substr(-2);
    var terbi = hours3.substr(-2) + ':' + minutes3.substr(-2) + ':' + seconds3.substr(-2);

    document.getElementById("watu").innerHTML+=" "+seka;
    document.getElementById("tebi").innerHTML+=" "+terbi;
    document.getElementById("tebe").innerHTML+=" "+terbe;
}

function bahasaCuaca(deskCuac, tempat) {
    if (/clouds/i.exec(deskCuac)) {
        document.getElementById(tempat).innerHTML+= " Awan";
    } else 
    if (/clear/i.exec(deskCuac)) {
        document.getElementById(tempat).innerHTML+= " Cerah";
    } else 
    if (/rain/i.exec(deskCuac)) {
        document.getElementById(tempat).innerHTML+= " Hujan";
    } else 
    if (/thunderstorm/i.exec(deskCuac)) {
        document.getElementById(tempat).innerHTML+= " Hujan Badai";
    } else {
        document.getElementById(tempat).innerHTML+= " Kesalahan";
    }
}

function konversiDt(dtBesok, pesan) {
    var waktu = new Date(dtBesok * 1000);
    var hari = waktu.getDay();
    var tanggal = waktu.getDate(); 
    var jam = "0" + waktu.getHours();
    var menit = "0" +waktu.getMinutes();
    var detik = "0" +waktu.getSeconds();
    var tahun = waktu.getFullYear();
    var bulan = waktu.getMonth();

    var namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    var namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "Oktober", "November", "Desember"];

    var waktuHasilTanggal = namaHari[hari] + ", " + tanggal + " " + namaBulan[bulan] + " " + tahun;
    var waktuHasilJam = jam.substr(-2) + ":" + menit.substr(-2) + ":" + detik.substr(-2);
    var jadiWaktunya = "Jam : " + waktuHasilJam + "<br>Tanggal : " + waktuHasilTanggal;

    document.getElementById(pesan).innerHTML += jadiWaktunya;
}

function terjemahCuaca (bahasa) {
    if (/clouds/i.exec(bahasa)) {
        return "Berawan";
    } else 
    if (/clear/i.exec(bahasa)) {
        return "Cerah";
    } else 
    if (/rain/i.exec(bahasa)) {
        return "Hujan";
    } else 
    if (/thunderstorm/i.exec(bahasa)) {
        return "Hujan Badai";
    } else {
        return "Kesalahan";
    }
}

function terjemahCuacaDeskripsi (bahasa) {
    if (/clear sky/i.exec(bahasa)) {
        return "Langit Cerah";
    } else 
    if (/few clouds/i.exec(bahasa)) {
        return "Sedikit Berawan";
    } else 
    if (/scattered clouds/i.exec(bahasa)) {
        return "Awan Tersebar";
    } else 
    if (/broken clouds/i.exec(bahasa)) {
        return "Awan Pecah";
    } else 
    if (/shower rain/i.exec(bahasa)) {
        return "Hujan Deras";
    } else 
    if (/rain/i.exec(bahasa)) {
        return "Hujan";
    } else 
    if (/mist/i.exec(bahasa)) {
        return "Kabut";
    } else 
    if (/thunderstorm with light rain/i.exec(bahasa)) {
        return "Hujan Ringan dengan Badai";
    } else 
    if (/thunderstorm with rain/i.exec(bahasa)) {
        return "Hujan dengan Badai";
    } else 
    if (/thunderstorm with heavy rain/i.exec(bahasa)) {
        return "Hujan Deras dengan Badai";
    } else 
    if (/light thunderstorm/i.exec(bahasa)) {
        return "Hujan Badai Ringan";
    } else 
    if (/heavy thunderstorm/i.exec(bahasa)) {
        return "Hujan Badai Deras";
    } else 
    if (/ragged thunderstorm/i.exec(bahasa)) {
        return "Hujan Badai Petir";
    } else 
    if (/thunderstorm with light drizzle/i.exec(bahasa)) {
        return "Hujan Badai dengan Gerimis Ringan";
    } else 
    if (/thunderstorm with drizzle/i.exec(bahasa)) {
        return "Hujan Badai dengan Gerimis";
    } else 
    if (/thunderstorm with heavy drizzle/i.exec(bahasa)) {
        return "Hujan Badai dengan Gerimis Deras";
    } else 
    if (/light intensity drizzle/i.exec(bahasa)) {
        return "Gerimis Ringan";
    } else 
    if (/drizzle/i.exec(bahasa)) {
        return "Gerimis";
    } else 
    if (/overcast clouds/i.exec(bahasa)) {
        return "Awan Mendung";
    } else 
    if (/heavy intensity drizzle/i.exec(bahasa)) {
        return "Gerimis Deras";
    } else 
    if (/light intensity drizzle rain/i.exec(bahasa)) {
        return "Hujan Gerimis Ringan";
    } else 
    if (/drizzle rain/i.exec(bahasa)) {
        return "Hujan Gerimis";
    } else 
    if (/heavy intensity drizzle rain/i.exec(bahasa)) {
        return "Gerimis Hujan Deras";
    } else 
    if (/shower rain and drizzle/i.exec(bahasa)) {
        return "Gerimis dan Hujan Sedang";
    } else 
    if (/heavy shower rain and drizzle/i.exec(bahasa)) {
        return "Gerimis dan Hujan Deras";
    } else 
    if (/shower drizzle/i.exec(bahasa)) {
        return "Gerimis Deras";
    } else 
    if (/light rain/i.exec(bahasa)) {
        return "Hujan Ringan";
    } else 
    if (/moderate rain/i.exec(bahasa)) {
        return "Hujan Sedang";
    } else 
    if (/heavy intensity rain/i.exec(bahasa)) {
        return "Hujan Deras";
    } else 
    if (/very heavy rain/i.exec(bahasa)) {
        return "Hujan Sangat Deras";
    } else 
    if (/extreme rain/i.exec(bahasa)) {
        return "Hujan Ekstrim";
    } else 
    if (/freezing rain/i.exec(bahasa)) {
        return "Hujan Beku";
    } else 
    if (/light intensity shower rain/i.exec(bahasa)) {
        return "Hujan Deras Ringan";
    } else 
    if (/shower rain/i.exec(bahasa)) {
        return "Hujan Deras";
    } else 
    if (/heavy intensity shower rain/i.exec(bahasa)) {
        return "Hujan Sangat Deras";
    } else 
    if (/ragged shower rain/i.exec(bahasa)) {
        return "Hujan Sangat Deras";
    } else {
        return "Kesalahan";
    }
}

function hariAngka (angka) {
    let hari = new Date().getDay();
    let depan = hari + angka;
    if (depan == 7 ) {
        return depan = 0;
    } else
    if (depan == 8) {
        return depan = 1;
    } else
    if (depan == 9) {
        return depan = 2;
    } else
    if (depan == 10) {
        return depan = 3;
    } else {
        return depan;
    }
}

