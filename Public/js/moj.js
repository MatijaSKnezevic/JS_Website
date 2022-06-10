
var niz = ["Pocetna", "Galerija", "Autor"];

document.getElementById("lista").innerHTML = "<ul >";

    for (var i=0; i<niz.length; i++){
    document.getElementById("lista").innerHTML += "<li class='lista1'><a href='"+niz[i]+".html'>" + niz[i] +"</a></li>";

}
document.getElementById("lista").innerHTML += "</ul>";

 var slike = new Array(2)
  slike = ["kafa01","kafa02","kafa03"];
  
  var slike1 = new Array(2)
    slike1 = ["kafa04","kafa05","kafa06"];

  var slike2 = new Array(2)
 slike2 = ["kafa07","kafa08","kafa09"];
  
  var slike3 = new Array(2)
  slike3 = ["kafa10","kafa11","kafa12"];


 

 for (var i=0; i<slike.length; i++){
    
    
     document.getElementById("nulti").innerHTML += "<a href='images/"+slike[i]+".jpg' data-lightbox='example-1'> <img class='slike1' src='images/"+slike[i]+".jpg'></a>";
     }
     
     for (var j=0; j<slike1.length; j++){
    
        
        document.getElementById("prvi").innerHTML += "<a href='images/"+slike1[j]+".jpg' data-lightbox='example-1'> <img class='slike1' src='images/"+slike1[j]+".jpg'></a>";
        }
        for (var k=0; k<slike2.length; k++){
    
        
            document.getElementById("drugi").innerHTML += "<a href='images/"+slike2[k]+".jpg' data-lightbox='example-1'> <img class='slike1' src='images/"+slike2[k]+".jpg'></a>";
            }for (var l=0; l<slike3.length; l++){
    
        
                document.getElementById("treci").innerHTML += "<a href='images/"+slike3[l]+".jpg' data-lightbox='example-1'> <img class='slike1' src='images/"+slike3[l]+".jpg'></a>";
                }

                var elements = document.getElementsByClassName("kolona");

                
                var i;
                
               
               
                
                
                document.getElementById("dugmeDva").addEventListener("click", function () {
                    for (i = 0; i < elements.length; i++) {
                        elements[i].style.flex = "50%"; 
                    }
                });
                
                
                document.getElementById("dugmeTri").addEventListener("click", function () {
                    for (i = 0; i < elements.length; i++) {
                        elements[i].style.flex = "25%"; 
                    }
                });
              