alert('hello world')
function tocaSomPom(){
    document.querySelector('#som_tecla_pom')
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_cla').onclick = tocaSomClap