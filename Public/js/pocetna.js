var niz = ["Pocetna", "Galerija", "Autor"];

document.getElementById("lista").innerHTML = "<ul >";

    for (var i=0; i<niz.length; i++){
    document.getElementById("lista").innerHTML += "<li class='lista1'><a href='"+niz[i]+".html'>" + niz[i] +"</a></li>";

}