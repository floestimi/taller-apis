const btn = document.getElementById('ruleta');
const ruletaData = document.getElementById('ruletaData');

const marvel = () => {
    fetch('https://gateway.marvel.com/v1/public/series?ts=3000&apikey=ce8f79a991b17b496e63476f6f1c5e1d&hash=5b55814be16762144d34aa112381b776')
    .then(response => response.json())
    .then(data => {
        ruletaData.innerHTML = JSON.stringify(data);
    })
    .catch(e => console.error(new Error(e)));
}

btn.addEventListener('click', marvel);


//     
//     .then(data => {
//         json.data.results.map(item => {
//             let url = item.thumbnail.path+item.thumbnail.extension
//             appDiv.innerHTML += `<div class="item">
//             <img src=${url.replace('http' , 'https')} />
//             <span>${item.name}</span>
//             </div>`
//         })
//     });


// http://gateway.marvel.com/v1/public/series?ts=3000&apikey=ce8f79a991b17b496e63476f6f1c5e1d&hash=5b55814be16762144d34aa112381b776