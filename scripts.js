// Funcion para hacer un refresh de la pagina
document.getElementById('reloadButton').addEventListener('click', function() {
     location.reload();
}
)

// Funcion para hacer que todos los elementos con clase 'flag' sean grises
document.getElementById('resetButton').addEventListener('click', function() {
let banderas = document.getElementsByClassName('flag');
for (let i = 0; i < banderas.length; i++) {
    const element = banderas[i];
    element.style.filter= 'grayscale(1)';
    }
}
)

// Funcion para hacer que todos los elementos con clase 'flag' sea muestran en color
document.getElementById('colourButton').addEventListener('click', function() {
let banderas = document.getElementsByClassName('flag');
for (let i = 0; i < banderas.length; i++) {
    const element = banderas[i];
    element.style.filter= 'grayscale(0)';
    }
}
)

// Funcion para mezclar elementos con clase 'flag'
document.getElementById('mixButton').addEventListener('click', function() {
        let array = document.getElementsByClassName('flag');
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = array[i].id;
                array[i].id = array[j].id;
                array[j].id = temp;
                return array[i].id;
            }
        } 
)