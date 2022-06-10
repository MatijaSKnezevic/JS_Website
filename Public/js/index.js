var niz = ["Pocetna", "Galerija", "Autor"];

document.getElementById("lista").innerHTML = "<ul >";

    for (var i=0; i<niz.length; i++){
    document.getElementById("lista").innerHTML += "<li class='lista1'><a href='"+niz[i]+".html'>" + niz[i] +"</a></li>";

}
$(document).ready(function(){
   
    $("#dugmeZaTogl").on({ click : function(){
       if( $("#tekstZaTogl").is(":visible")){
        $("#tekstZaTogl").slideUp(500); 
        $(this).val("Prikazi jos");


       }else {
           $("#tekstZaTogl").slideDown(500);
           $(this).val("Sakrij tekst");
           
       }
        
        
        ;},
        
    });
});
