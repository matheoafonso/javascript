function additionner(nombre1, nombre2) {
    return nombre1 + nombre2;
  }
  
  
  var nombre1 = prompt("Entrez le premier nombre :");
  var nombre2 = prompt("Entrez le deuxième nombre :");
  
  
  nombre1 = parseInt(nombre1);
  nombre2 = parseInt(nombre2);
  
  
  if (!isNaN(nombre1) && !isNaN(nombre2)) {
    
    var resultat = additionner(nombre1, nombre2);
  
    
    alert("Le résultat de l'addition est : " + resultat);
  } else {

    alert("Veuillez entrer des nombres valides.");
  }
  


    

