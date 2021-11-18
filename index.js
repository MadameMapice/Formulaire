// les Id de mon HTML balise "Input":
let monNom = document.getElementById("nom")
let monPrenom = document.getElementById("prenom")
let monAdresse = document.getElementById("adresse")
let monCP = document.getElementById("CP")
let monVille = document.getElementById("ville")
let monEmail = document.getElementById("email")

let valide = document.getElementById("valid")
let annule = document.getElementById("annule")

// let mess1 = document.getElementById("message1") => Pour mettre un message on dessus de l'input


valide.addEventListener("click",(event) =>{
// console.log('test');
    let res1 = monNom.value.search(/^[a-zA-Z \-]{1,20}$/) 
    let res2 = monPrenom.value.search(/^[a-zA-Z \-]{1,20}$/)
    let res3 = monAdresse.value.search(/^[a-zA-Z0-9 ]{1,40}$/)
    let res4 = monCP.value.search(/^[0-9]{5}$/)
    let res5 = monVille.value.search(/^[a-zA-Z]{1,10}$/)
    let res6 = monEmail.value.search(/^[a-zA-Z0-9._\-]+@[a-zA-Z0-9._\-]+.[a-zA-Z0-9._\-]+$/)
    // Expression regulier
    
    // Pour le nom
        if (res1 == -1){
            monNom.style.border="red solid 3px"
        }
        else {
            monNom.style.border="purple solid 3px"
        }

    // Pour le prenom
        if (res2 == -1){
            monPrenom.style.border="red solid 3px"
        }
        else {
            monPrenom.style.border="purple solid 3px"
        }

    // Pour le adresse
        if (res3 == -1){
            monAdresse.style.border="red solid 3px"
        }
        else {
            monAdresse.style.border="purple solid 3px"
        }

     // Pour le CP
        if (res4 == -1){
            monCP.style.border="red solid 3px"
        }
        else {
            monCP.style.border="purple solid 3px"
        }

    // Pour le Ville
        if (res5 == -1){
            monVille.style.border="red solid 3px"
        }
        else {
            monVille.style.border="purple solid 3px"
        }

    // Pour le Email
        if (res6 == -1){
            monEmail.style.border="red solid 3px"
        }
        else {
            monEmail.style.border="purple solid 3px"
        }

    })


  
