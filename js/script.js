var toggle_menu = document.querySelector(".responsive-menu");
var menu = document.querySelector(".menu");
toggle_menu.onclick = function(){
    toggle_menu.classList.toggle('active');
    menu.classList.toggle('responsive');
}
// Formulaire 1
document.getElementById('voir').addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    var pays = document.getElementById('pays');
    var ville = document.getElementById('ville');
    var région = document.getElementById('région'); 

    if(!pays.value) {
        erreur = "Veuillez renseigner un pays";
    }
    if(!ville.value) {
        erreur = "Veuillez renseigner une ville";
    }
        if(!région.value) {
            erreur = "Veuillez renseigner une région";
        }
        
        if(erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        }
        else{
    alert('Formulaire envoyé !');
}
})

// Formulaire 2

document.getElementById('envoyer').addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    // var nom = document.getElementById('nom');
    // var objet = document.getElementById('objet');
    // var email = document.getElementById('email');
    // var message = document.getElementById('message');
    // var numéro = document.getElementById('numéro');
    // var date = document.getElementById('date');
    // var autres = document.getElementById('autres');

    // if(!nom.value) {
    //     erreur = "Veuillez renseigner ce champ";
    // }
    // if(!objet.value) {
    //     erreur = "Veuillez renseigner ce champ";
    // }
    // if(!email.value) {
    //     erreur = "Veuillez renseigner ce champ";
    // }
    // if(!message.value) {
    //     erreur = "Veuillez renseigner ce champ";
    // }
    // if (!numéro.value) {
    //     erreur = "Veuillez renseigner ce champ";
    // }
    // if(!date.value) {
    //     erreur = "Veuillez renseigner ce champ";
    // }
    // if(!autres.value) {
    //     erreur = "Veuillez renseigner ce champ";
    // }

    if(erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false ;
    }
    
    else {
     alert('Formulaire envoyé !') ;  
    }
})

// météo
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

var images=[];
images[0]="../imagges/nw1.jpg";
images[1]="../imagges/nw2.jpg";
images[2]="../imagges/brc1.jpg";
images[3]="../imagges/brc2.jpg";
images[4]="../imagges/brc4.jpg";
var i=0;
var timer=3000

function changerimage(){
    document.diapo.src=images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changerimage"(),timer);
}
window.onload=changerimage;

var firstIndex=0;
      function automaticSlide(){
      setTimeout(automaticSlide, 2000);
         var pics;
         const img=document.querySelectorAll('#lam');
         for(pics=0; pics<img.length; pics++){
             img[pics].style.display="none";
         }
         firstIndex++;
         if(firstIndex > img.length){
             firstIndex =1;
         }
         img[firstIndex -1].style.display="block";
      }
      automaticSlide();

    //   email

    // function sendMail() {
    //     var params = {
    //         nom: document.getElementById("nom").value;
    //         email: document.getElementById("email").value;
    //         message: document.getElementById("message").value;
    //         objet: document.getElementById("objet").value;
    //         numéro: document.getElementById("numéro").value;
    //         date: document.getElementById("date").value;
    //         auutres: document.getElementById("autres").value;
    //     };
    // }

    // const serviceID = "service_omonb3p";
    // const templateID = "template_lbexzyc";

    // emailjs
    // .send(serviceID, templateID, params)
    // .then((res) => {
    //     document.getElementById("nom").value = "";
    //     document.getElementById("email").value = "";
    //     document.getElementById("message").value = "";
    //     document.getElementById("objet").value = "";
    //     document.getElementById("numéro").value = "";
    //     document.getElementById("date").value = "";
    //     document.getElementById("autres").value = "";
    //     console.log(res);
    //     alert("votre message a été envoyé avec succès");
    // })
    // .catch((err) => console.log(err));

      


