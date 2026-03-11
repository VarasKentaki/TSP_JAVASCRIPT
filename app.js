const fichas = document.querySelectorAll(".ficha");
  let aleatorio=0;
function colorear (div) {
  div.target.classList.add("ficha-animada")


}

function descolorear (div) {
    div.target.classList.remove("ficha-animada")
}
for (let i = 0; i < fichas.length; i++) {
 fichas[i].onmouseenter=colorear;
 fichas[i].onmouseleave=descolorear;
  
}
setInterval(() => {
  fichas[aleatorio].classList.remove("ficha-animada");
aleatorio= Math.floor(Math.random()*4)
  fichas[aleatorio].classList.add("ficha-animada");

  
}, 1000);