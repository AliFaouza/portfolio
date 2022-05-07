
let formulaire=document.querySelector('.formule');
formulaire.addEventListener("submit",function(e){
    
    let zoneTexte=document.querySelectorAll('zone-text');
    var er;
    if(!zoneTexte.value){
        er="Veuillez remplir toutes les cases";
    }
    if(er){
        e.preventDefault();
        document.querySelector('erreur').innerHTML=er;
        return false;
    }
    else{
        alert('Valide !');
    }


});



