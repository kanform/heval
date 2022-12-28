/* Bascule entre l'ajout et la suppression de la classe "responsive" dans topnav lorsque l'utilisateur clique sur l'icône */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  