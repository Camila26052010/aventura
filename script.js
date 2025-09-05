let titulo = document.getElementById('titulo');
let botao = document.getElementById('botaoCor');

botao.addEventListener('click', function() {
    const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    
    titulo.style.color = corAleatoria;
});