console.log('Tudo dentro dos conformes...!!!')

var btnMobile = document.querySelector('.btn-mobile');
var hamburGue = document.querySelector('.hamburguer');

btnMobile.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("ativar");
    document.querySelector(".hamburguer").classList.toggle("open");
})

document.querySelector("#qtde").addEventListener("change", atualizarPreco);
function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value;
    let preco = qtde * 100;
        document.getElementById("#preco").innerHTML = `R$  ${preco}`
}

// var dirceu = document.getElementById('dirceu');
// function dirceuaguiar(){
//     var ilma = document.getElementById('iiiii')
//     ilma.classList.toggle('click')
// }
// dirceu.addEventListener('click', dirceuaguiar)