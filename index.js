const URL_BASE = "http://api.openweathermap.org/data/2.5/weather" ;

function getData(ciudad){
    fetch(`${URL_BASE}?q=${ciudad},uy&appid=e2fe33f4578c6dd8477a4749d20a7c29&lang=es&units=metric`)
    .then(response => { 
        if(response.ok){
            return response.json();
        }
        else {
            showError();
            throw new Error("error en nombre ciudad");
        }
    })
    .then(data => {
        showData(data);
    })
    .catch(error => console.log(error));

};

function showError(){
    let mensaje = document.getElementById('mensajeError');
    mensaje.innerText = "La ciudad que estás buscando no es correcta o no se encuentra en Uruguay.";
}

function showData(a){
    let mensaje = document.getElementById('mensajeError');
    mensaje.innerText = "";
    let info = document.getElementById('infoCiudad');
    info.innerHTML= `
    <h3>Estado del tiempo en ${a["name"]}</h3>
    <p>La temperatura es de ${a["main"]["temp"]}°C</p>
    <p>La sensación térmica es de ${a["main"]["feels_like"]}°C</p>
    <p>La humedad es de ${a["main"]["humidity"]}%</p>
    <p>Hay vientos de hasta ${a["wind"]["speed"]} m/s </p>
    <p>La descripción del tiempo es: ${a["weather"][0]["description"]}`;
};

document.addEventListener('DOMContentLoaded',()=>{
    let form = document.getElementById('form');
    let ciudad = document.getElementById('ciudad');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        getData(ciudad.value);
    });
});