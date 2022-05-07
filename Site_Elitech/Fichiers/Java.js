// Déclaration des variables
// Mon bouton suivant
var btn=document.querySelector('.btn');
// Mon champ nom
var maPhrase=document.querySelector('#texte1');
var nom=document.querySelector('#nom');
// Mon champ prénom
var maPhrase2=document.querySelector('#texte2');
var prenom=document.getElementById('prenom');
// Mon champ phone
var maPhrase3=document.querySelector('#texte3');
var phone=document.getElementById('phone');
// Mon champ mail
var maPhrase4=document.querySelector('#texte4');
var mail=document.getElementById('mail');
// Mon champ adresse
var maPhrase5=document.querySelector('#texte5');
var adresse=document.getElementById('adresse');
// Mon champ date de naissance
var maPhrase6=document.querySelector('#texte6');
var date_nais=document.getElementById('date_nais');
// Mon champ lieu de naissance
var maPhrase7=document.querySelector('#texte7');
var lieu=document.getElementById('lieu');
// Mon champ Nationalité
var maPhrase8=document.querySelector('#texte8');
var nation=document.getElementById('nation');
// Mon champ pays
var maPhrase9=document.querySelector('#texte9');
var pays=document.getElementById('pays');
// Mon champ ville
var maPhrase10=document.querySelector('#texte10');
var ville=document.getElementById('ville');
console.log(adresse);


// Mon texte
maPhrase.style.opacity=0;
maPhrase2.style.opacity=0;
// nom.style.border='2px solid red';
// Déclaration des événements

// Mon bouton suivant :
btn.addEventListener('click',suivant);

function suivant(e){
    // Modification du comportement par defaut
    e.preventDefault();
    // Zone de texte nom
    if(nom.value==""){
        maPhrase.style.opacity=1;
        nom.style.border='2px solid red';
        maPhrase.innerHTML="Veuillez entrer votre nom!";
        maPhrase.style.color='red';
    }
    else
    {
        maPhrase.style.opacity=0;
        nom.style.border='none';
    }
    // Zone de texte prénom
    if(prenom.value==""){
        maPhrase2.style.opacity=1;
        prenom.style.border='2px solid red';
        maPhrase2.innerHTML="Veuillez entrer votre prénom!";
        maPhrase2.style.color='red'; 
    }
    else
    {
        maPhrase2.style.opacity=0;
        prenom.style.border='none';  
    }
    // Zone de texte phone
    if(phone.value==""){
        maPhrase3.style.opacity=1;
        phone.style.border='2px solid red';
        maPhrase3.innerHTML="Entrez le numéro de téléphone !";
        maPhrase3.style.color='red';   
    }
    else
    {
        maPhrase3.style.opacity=0;
        phone.style.border='none';
        
    }
    // Zone de texte mail
    if(mail.value==""){
        maPhrase4.style.opacity=1;
        mail.style.border='2px solid red';
        maPhrase4.innerHTML="Entrez votre E-mail !";
        maPhrase4.style.color='red';  
    }
    else
    {
        maPhrase4.style.opacity=0;
        mail.style.border='none';

    }
    // Zone de texte adresse
    if(adresse.value==""){
        maPhrase5.style.opacity=1;
        adresse.style.border='2px solid red';
        maPhrase5.innerHTML="Entrez votre adresse actuelle !";
        maPhrase5.style.color='red'; 
    }
    else
    {
        maPhrase5.style.opacity=0;
        adresse.style.border='none';
    }
    // Zone de texte  date de naissance
    if(date_nais.value==""){
        maPhrase6.style.opacity=1;
        date_nais.style.border='2px solid red';
        maPhrase6.innerHTML="Entrez votre date de naissance !";
        maPhrase6.style.color='red'; 
    }
    else
    {
        maPhrase6.style.opacity=0;
        date_nais.style.border='none';
    }
    //  Zone de texte lieu de naissance
    if(lieu.value==""){
        maPhrase7.style.opacity=1;
        lieu.style.border='2px solid red';
        maPhrase7.innerHTML="Entrez votre lieu de naissance !";
        maPhrase7.style.color='red';  
    }
    else
    {
        maPhrase7.style.opacity=0;
        lieu.style.border='none';
    }
    //  Zone de texte Nationalité
    if(nation.value==""){
        maPhrase8.style.opacity=1;
        nation.style.border='2px solid red';
        maPhrase8.innerHTML="Entrez votre nationalité !";
        maPhrase8.style.color='red'; 
    }
    else
    {
        maPhrase8.style.opacity=0;
        nation.style.border='none';
    }
    // Zone de texte pays
    if(pays.value==""){
        maPhrase9.style.opacity=1;
        pays.style.border='2px solid red';
        maPhrase9.innerHTML="Entrez votre pays de domicile!";
        maPhrase9.style.color='red'; 
    }
    else
    {
        maPhrase9.style.opacity=0;
        pays.style.border='none'; 
    }
    //  Zone de texte ville
    if(ville.value==""){
        maPhrase9.style.opacity=1;
        ville.style.border='2px solid red';
        maPhrase10.innerHTML="Entrez votre ville actuelle!"; 
        maPhrase10.style.color='red'; 
    } 
    else
    {
        maPhrase10.style.opacity=0;
        ville.style.border='none';
    }
}
// Zone de texte nom
nom.addEventListener("click",zone_text);

function zone_text(){
    maPhrase.style.opacity=0;
    nom.style.border='none';
}
// Zone de texte prénom
prenom.addEventListener("click",zone_text2);
function zone_text2(){
    maPhrase2.style.opacity=0;
    prenom.style.border='none'; 
}
// Zone de texte phone
phone.addEventListener("click",zone_text3);
function zone_text3(){
    maPhrase3.style.opacity=0;
    phone.style.border='none';   
}
// Zone de texte mail
mail.addEventListener("click",zone_text4);
function zone_text4(){
    maPhrase4.style.opacity=0;
    mail.style.border='none';   
}
// Zone de texte adresse
adresse.addEventListener("click",zone_text5);
function zone_text5(){
    maPhrase5.style.opacity=0;
    adresse.style.border='none'; 
}
// Zone de texte  date de naissance
date_nais.addEventListener("click",zone_text6);
function zone_text6(){
    maPhrase6.style.opacity=0;
    date_nais.style.border='none'; 
}
//  Zone de texte lieu de naissance
lieu.addEventListener("click",zone_text7);
function zone_text7(){
    maPhrase7.style.opacity=0;
    lieu.style.border='none'; 
}
// Zone de texte nationalité
nation.addEventListener("click",zone_text8);
function zone_text8(){
    maPhrase8.style.opacity=0;
    nation.style.border='none'; 
}
// Zone de texte  pays
pays.addEventListener("click",zone_text9);
function zone_text9(){
    maPhrase9.style.opacity=0;
    pays.style.border='none'; 
}
// Zone de texte ville
ville.addEventListener("click",zone_text10);
function zone_text10(){
    maPhrase10.style.opacity=0;
    ville.style.border='none'; 
}



