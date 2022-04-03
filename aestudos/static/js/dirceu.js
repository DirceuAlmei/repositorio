console.log('Tudo dentro dos conformes...!!!')

var btnMobile = document.querySelector('.btn-mobile');
var hamburGue = document.querySelector('.hamburguer');

btnMobile.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("ativar");
    document.querySelector(".hamburguer").classList.toggle("open");
})

var dirceu = document.getElementById('dirceu');
function dirceuaguiar(){
    var ilma = document.getElementById('iiiii')
    ilma.classList.toggle('click')
}
dirceu.addEventListener('click', dirceuaguiar)