let listVerbes;
let listConjug = ['infinitif','preterit','participe','traduction']                                  
let profil = {
    tour : 0,
    correction : [],
    reponse : [],
    reponsePos : [],
    idVerbs : [],
    currentVerbs : ['infinitif','preterit','participe','traduction'],
}


function demarrer() {                                                                               
    chargerJSON("./list.json", (text) => { listVerbes = JSON.parse(text)[2].data, recharger() })            //séléctionner les verbes et les stocker au format JSON dans liste des verbes
    document.getElementById('b1').addEventListener('click', reload)                                         //bouton reload
    document.getElementById('b2').addEventListener('click', valider)                                        //bouton valider
    window.addEventListener('keypress', verifEntree)                                                        //touche entree
}

function chargerJSON(file, callback) {                                                                      //recupere le JSON et le charge dans le fichier
    let rawFile = new XMLHttpRequest()
    rawFile.overrideMimeType("application/json")
    rawFile.open("GET", file, true)
    rawFile.onreadystatechange = function() {
        if(rawFile.readyState == 4 && rawFile.status == "200") {
            callback(rawFile.responseText)
        }
    }
    rawFile.send(null)
}

function verifEntree(event) {                                                                               //si entree, fonction valider
    if(event.key == "Enter") valider()
}

function recharger() {                                                                                  
    let randomVerbe = Math.floor(Math.random() * 65)                                                        //nb aleatoire
    if(profil.idVerbs.indexOf(randomVerbe) != -1) {                                                         //verbe deja utiliser ?
        recharger()
    } else {
        let choosenConjug = listConjug[Math.floor(Math.random() * listConjug.length)]                       //choisir un temps aleatoire
        profil.reponsePos.push(choosenConjug)                                                               //mettre le choix dans le profil (JSON)
        profil.idVerbs.push(randomVerbe)                                                                    //verbe utiliser dans le profil
        profil.currentVerbs[0] = listVerbes[randomVerbe].infinitif                                          //definir les conjugaison à partir de la liste de verbe
        profil.currentVerbs[1] = listVerbes[randomVerbe].preterit
        profil.currentVerbs[2] = listVerbes[randomVerbe].participe
        profil.currentVerbs[3] = listVerbes[randomVerbe].traduction
        switch(choosenConjug) {
            case "infinitif":                                                                               //si on a choisit infinitif
                profil.correction.push(profil.currentVerbs[0])                                              //on met le verbe a l'infinitif dans la correction
                profil.currentVerbs[0] = "???"                                                              //on remplace la valeur a afficher par "???"
            break;
            case "preterit":
                profil.correction.push(profil.currentVerbs[1])
                profil.currentVerbs[1] = "???"
            break;
            case "participe":
                profil.correction.push(profil.currentVerbs[2])
                profil.currentVerbs[2] = "???"
            break;
            case "traduction":
                profil.correction.push(profil.currentVerbs[3])
                profil.currentVerbs[3] = "???"
            break;
        }
    }

    afficherVerbes()
}

function reload() {                                                                                         //Retirer les donnes du profil par rapport au tour concerné et recharger
    console.log('Reload')
    profil.idVerbs.pop()
    profil.correction.pop()
    profil.reponsePos.pop()
    recharger()
}

function valider() {                                                                                        
    let reponse = document.getElementById('answer').value                                                   //Recupere la réponse du joueur
    if(reponse == "") {                                                                                     //si vide
        alert('Vous devez remplir la case "Réponse" !')                                                     //alerte
    } else {                                                                                                //sinon
        profil.tour++                                                                                       //ajouter un tour
        profil.reponse.push(reponse)                                                                        //mettre la reponse dans le profil
        document.getElementById('answer').value = ""                                                        //reset l'input
        if(profil.tour >= 10) {                                                                             //si c'est le 10eme tour
            afficherResultats()
        } else {
            recharger()
        }
    }
}

function afficherVerbes() {                                                                                  //afficher les verbes actuels
    for(let i=0;i<=3;i++) {
        document.getElementById(`i${i}`).innerHTML = `${profil.currentVerbs[i]}`
    }
}

function afficherResultats() {                                                                               //afficher les resultats
    document.body.innerHTML = '<table id="resultat"></table><br/><p id="score"></p>';
    let score = 0

    for(let i=0; i<profil.idVerbs.length; i++) {
        if(i == 0) {
            let phrase = '<td></td><td>Infinitif</td>|<td>Preterit</td>|<td>Participe</td>|<td>Traduction</td>|<td>✘/✔</td>'
            let tr = document.createElement('tr')
            tr.className =  "trt";
            tr.innerHTML = phrase;
            let section = document.getElementById('resultat');
            section.appendChild(tr);
        }
        let infinitif = listVerbes[profil.idVerbs[i]].infinitif
        let preterit = listVerbes[profil.idVerbs[i]].preterit
        let participe = listVerbes[profil.idVerbs[i]].participe
        let traduction = listVerbes[profil.idVerbs[i]].traduction
        let statut = "✔"
        if(profil.correction[i] == profil.reponse[i]) {                                                      //si bonne reponse
            score++
        } else {
            statut = "✘"
            switch(profil.reponsePos[i]) {
                case "infinitif":
                    infinitif = `<s>${profil.reponse[i]}</s> -> ${profil.correction[i]}`
                break;
                case "preterit":
                    preterit = `<s>${profil.reponse[i]}</s> -> ${profil.correction[i]}`
                break;
                case "participe":
                    participe = `<s>${profil.reponse[i]}</s> -> ${profil.correction[i]}`
                break;
                case "traduction":
                    traduction = `<s>${profil.reponse[i]}</s> -> ${profil.correction[i]}`
                break;
            }
        }
        let phrase = `<td> ${i+1}</td><td>${infinitif}</td>|<td>${preterit}</td>|<td>${participe}</td>|<td>${traduction} </td>|<td>${statut}</td>`
        let tr = document.createElement('tr')
        tr.className =  "trt";
        tr.innerHTML = phrase;

        let section = document.getElementById('resultat');
        section.appendChild(tr);
    }
    document.getElementById('score').innerHTML = `Score : ${score}/10 <br> Projet par Théo B. pour Mr Devos - 2020`
    document.getElementById('score').className = "trt"
}

window.addEventListener('load', demarrer)                                                                   //quand page chargée, lancer la fonction de demarrage