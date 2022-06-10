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

    $("#dugmeZaTogl").hover( function(){
        $(this).addClass('ivica'); },
        function(){
            $(this).removeClass('ivica');
        }
        )

        $( "#dugmeSubmit" ).click(function( event ) {
            event.preventDefault();})






document.getElementById("email1").addEventListener("blur", function(){

    var imejl = document.querySelector("#email1").value;
   
var regEmail=/^[a-z]{2,10}\.[a-z]{2,11}\.[0-9]{1,4}\.[0-9]{2}(\@ict\.edu\.rs)$/;
    
    if(regEmail.test(imejl)==true){
        console.log("ok");
        $("#imeError").html("");
    }else{
        console.log("nije ok");

        $("#imeError").addClass("crvena");
        $("#imeError").html("Morate koristiti skolsku email adresu");
    }
});
    document.getElementById("poruka1").addEventListener("blur", function(){
    var poruka = document.querySelector("#poruka1").value;

    if(poruka == ""){
        $("#poruka1").addClass("okvir");
        $("#porukaError").addClass("crvena");
        $("#porukaError").html("Morate uneti neki tekst");

    }
    else {
        $("#poruka1").removeClass("okvir");
        $("#porukaError").html("");
    }

});
        $("#imeIPrezime").blur(function(){
    var imePrezime = document.querySelector("#imeIPrezime").value;
    var regImeIPrezime = /^[A-ZĆŽŠĐČ][a-zčćžđš]{2,10}(\s[A-ZĆŽŠĐČ][a-zčćžđš]{2,10})+$/;
    if(regImeIPrezime.test(imePrezime) == false){
        $("#imeIPrezime").addClass("okvir");
        $("#iPError").addClass("crvena");
        $("#iPError").html("Morate uneti ime i prezime u formatu 'Ime Prezime'");

    }
    else {
        $("#imeIPrezime").removeClass("okvir");
        $("#iPError").html("");
    }

});
    $("#dugmeSubmit").click(function(){
        var imePrezime = document.querySelector("#imeIPrezime").value;
    var regImeIPrezime = /^[A-ZĆŽŠĐČ][a-zčćžđš]{2,10}(\s[A-ZĆŽŠĐČ][a-zčćžđš]{2,10})+$/;
        var poruka = document.querySelector("#poruka1").value;
        var imejl = document.querySelector("#email1").value;
        var regEmail=/^[a-z]{2,10}\.[a-z]{2,11}\.[0-9]{1,4}\.[0-9]{2}(\@ict\.edu\.rs)$/;

        if(regImeIPrezime.test(imePrezime) == true && regEmail.test(imejl) == true && poruka !== ""){
            $("#submitError").html("Uspesno ste poslali komentar<p class='sakrij'>"+poruka +" "+ imePrezime +" "+ imejl+"</p>");

        console.log(poruka +" "+ imePrezime +" "+ imejl);
    }else{
        $("#submitError").html("");

    }

});

});