// Fonction pour calculer le factoriel
  function calculerFactoriel(nombre) {
    if (nombre === 0 || nombre === 1) {
      return 1;
    } else {
      return nombre * calculerFactoriel(nombre - 1);
    }
  }

  // Demander à l'utilisateur un nombre
  var nombre = prompt("Entrez un nombre pour calculer son factoriel :");

  // Convertir l'entrée en un nombre entier
  nombre = parseInt(nombre);

  // Vérifier si l'entrée est un nombre valide
  if (!isNaN(nombre)) {
    // Calculer le factoriel
    var factoriel = calculerFactoriel(nombre);

    // Afficher le résultat
    alert("Le factoriel de " + nombre + " est : " + factoriel);
  } else {
    // Si l'entrée n'est pas un nombre valide
    alert("Veuillez entrer un nombre valide.");
  }


    

