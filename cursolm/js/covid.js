window.onload= iniciar;


function iniciar(){
    let btncargar = document.getElementById("btncargar");
    btncargar.addEventListener("click",calcular);
}

async function cargarUrl(url){
    let respuesta = await fetch(url);
    return respuesta.json();
}


async function calcular(){
   // console.log("boton presionado");
   let fecha = document.getElementById("inputfecha").value;
   let pais = document.getElementById("selectpais").value;
   //let paisminus= pais.toLowerCase();
   //console.log(paisminus);

   let json = await cargarUrl(`https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`);
   //console.log(json);

 //let estadisticas= json.dates["2021-04-01"].countries.Peru;
 let estadisticas= json.dates[fecha].countries[pais];
  console.log(estadisticas);

document.getElementById("today_confirmed").innerHTML = estadisticas.today_confirmed;
document.getElementById("today_deaths").innerHTML = estadisticas.today_deaths;
document.getElementById("today_hospitalised_patients_with_symptoms").innerHTML = estadisticas.today_hospitalised_patients_with_symptoms;
document.getElementById("today_intensive_care").innerHTML = estadisticas.today_intensive_care;
document.getElementById("today_new_confirmed").innerHTML = estadisticas.today_new_confirmed;
document.getElementById("today_new_deaths").innerHTML = estadisticas.today_new_deaths;
document.getElementById("today_new_hospitalised_patients_with_symptoms").innerHTML = estadisticas.today_new_hospitalised_patients_with_symptoms;
document.getElementById("today_new_intensive_care").innerHTML = estadisticas.today_new_intensive_care;
document.getElementById("today_new_open_cases").innerHTML = estadisticas.today_new_open_cases;
document.getElementById("today_new_recovered").innerHTML = estadisticas.today_new_recovered;
document.getElementById("today_new_total_hospitalised_patients").innerHTML = estadisticas.today_new_total_hospitalised_patients;




/*today_confirmed
today_deaths
today_hospitalised_patients_with_symptoms
today_intensive_care
today_new_confirmed
today_new_deaths
today_new_hospitalised_patients_with_symptoms
today_new_intensive_care
today_new_open_cases
today_new_recovered
today_new_total_hospitalised_patients*/








}