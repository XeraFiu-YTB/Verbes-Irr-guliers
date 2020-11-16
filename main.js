let listVerbes = [
    {"id":"0","infinitif":"be","preterit":"was\/were","participe":"been","traduction":"etre"},
    {"id":"1","infinitif":"become","preterit":"became","participe":"become","traduction":"devenir"},
    {"id":"2","infinitif":"begin","preterit":"began","participe":"begun","traduction":"commencer"},
    {"id":"3","infinitif":"break","preterit":"broke","participe":"broken","traduction":"casser"},
    {"id":"4","infinitif":"bring","preterit":"brought","participe":"brought","traduction":"apporter"},
    {"id":"5","infinitif":"build","preterit":"built","participe":"built","traduction":"construire"},
    {"id":"6","infinitif":"burn","preterit":"burnt","participe":"burnt","traduction":"bruler"},
    {"id":"7","infinitif":"buy","preterit":"bought","participe":"bought","traduction":"acheter"},
    {"id":"8","infinitif":"acheter","preterit":"caught","participe":"caught","traduction":"attraper"},
    {"id":"9","infinitif":"choose","preterit":"chose","participe":"chosen","traduction":"choisir"},
    {"id":"10","infinitif":"come","preterit":"came","participe":"come","traduction":"venir"},
    {"id":"11","infinitif":"cost","preterit":"cost","participe":"cost","traduction":"couter"},
    {"id":"12","infinitif":"cut","preterit":"cut","participe":"cut","traduction":"couper"},
    {"id":"13","infinitif":"do","preterit":"did","participe":"done","traduction":"faire"},
    {"id":"14","infinitif":"draw","preterit":"drew","participe":"drawn","traduction":"dessiner"},
    {"id":"15","infinitif":"dream","preterit":"dreamt","participe":"dreamt","traduction":"rever"},
    {"id":"16","infinitif":"drink","preterit":"drank","participe":"drunk","traduction":"boire"},
    {"id":"17","infinitif":"drive","preterit":"drove","participe":"driven","traduction":"conduire"},
    {"id":"18","infinitif":"eat","preterit":"ate","participe":"eaten","traduction":"manger"},
    {"id":"19","infinitif":"fall","preterit":"fell","participe":"fallen","traduction":"tomber"},
    {"id":"20","infinitif":"feel","preterit":"felt","participe":"felt","traduction":"ressentir"},
    {"id":"21","infinitif":"fight","preterit":"fought","participe":"fougth","traduction":"se battre"},
    {"id":"22","infinitif":"find","preterit":"found","participe":"found","traduction":"trouver"},
    {"id":"23","infinitif":"fly","preterit":"flew","participe":"flown","traduction":"voler"},
    {"id":"24","infinitif":"forget","preterit":"forgot","participe":"forgotten","traduction":"oublier"},
    {"id":"25","infinitif":"forgive","preterit":"forgave","participe":"forgiven","traduction":"pardonner"},
    {"id":"26","infinitif":"get","preterit":"got","participe":"got","traduction":"obtenir"},
    {"id":"27","infinitif":"give","preterit":"gave","participe":"given","traduction":"donner"},
    {"id":"28","infinitif":"go","preterit":"went","participe":"gone","traduction":"aller"},
    {"id":"29","infinitif":"have","preterit":"had","participe":"had","traduction":"avoir"},
    {"id":"30","infinitif":"hear","preterit":"heard","participe":"heard","traduction":"entendre"},
    {"id":"31","infinitif":"hit","preterit":"hit","participe":"hit","traduction":"frapper"},
    {"id":"32","infinitif":"hold","preterit":"held","participe":"helt","traduction":"tenir"},
    {"id":"33","infinitif":"hurt","preterit":"hurt","participe":"hurt","traduction":"blesser"},
    {"id":"34","infinitif":"keep","preterit":"kept","participe":"kept","traduction":"garder"},
    {"id":"35","infinitif":"know","preterit":"knew","participe":"known","traduction":"savoir"},
    {"id":"36","infinitif":"lead","preterit":"led","participe":"led","traduction":"mener"},
    {"id":"37","infinitif":"learn","preterit":"learnt","participe":"learnt","traduction":"apprendre"},
    {"id":"38","infinitif":"leave","preterit":"left","participe":"left","traduction":"partir"},
    {"id":"39","infinitif":"lose","preterit":"lost","participe":"lost","traduction":"perdre"},
    {"id":"40","infinitif":"make","preterit":"made","participe":"made","traduction":"fabriquer"},
    {"id":"41","infinitif":"mean","preterit":"meant","participe":"meant","traduction":"signifier"},
    {"id":"42","infinitif":"meet","preterit":"met","participe":"met","traduction":"rencontrer"},
    {"id":"43","infinitif":"pay","preterit":"paid","participe":"paid","traduction":"payer"},
    {"id":"44","infinitif":"put","preterit":"put","participe":"put","traduction":"mettre"},
    {"id":"45","infinitif":"read","preterit":"read","participe":"read","traduction":"lire"},
    {"id":"46","infinitif":"ride","preterit":"rode","participe":"ridden","traduction":"faire"},
    {"id":"47","infinitif":"ring","preterit":"rang","participe":"rung","traduction":"sonner"},
    {"id":"48","infinitif":"run","preterit":"ran","participe":"run","traduction":"courir"},
    {"id":"49","infinitif":"say","preterit":"said","participe":"said","traduction":"dire"},
    {"id":"50","infinitif":"see","preterit":"saw","participe":"seen","traduction":"voir"},
    {"id":"51","infinitif":"sell","preterit":"sold","participe":"sold","traduction":"vendre"},
    {"id":"52","infinitif":"send","preterit":"sent","participe":"sent","traduction":"envoyer"},
    {"id":"53","infinitif":"shoot","preterit":"shot","participe":"shot","traduction":"tirer"},
    {"id":"54","infinitif":"show","preterit":"showed","participe":"shown","traduction":"montrer"},
    {"id":"55","infinitif":"shut","preterit":"shut","participe":"shut","traduction":"fermer"},
    {"id":"56","infinitif":"sing","preterit":"sang","participe":"sung","traduction":"chanter"},
    {"id":"57","infinitif":"sit","preterit":"sat","participe":"sat","traduction":"asseoir"},
    {"id":"58","infinitif":"sleep","preterit":"slept","participe":"slept","traduction":"dormir"},
    {"id":"59","infinitif":"smell","preterit":"smelt","participe":"smelt","traduction":"sentir"},
    {"id":"60","infinitif":"speak","preterit":"spoke","participe":"spoken","traduction":"parler"},
    {"id":"61","infinitif":"spell","preterit":"spelt","participe":"spelt","traduction":"epeler"},
    {"id":"62","infinitif":"spend","preterit":"spent","participe":"spent","traduction":"depenser"},
    {"id":"63","infinitif":"stand","preterit":"stood","participe":"stood","traduction":"etre debout"},
    {"id":"64","infinitif":"steal","preterit":"stole","participe":"stolen","traduction":"derober"}
]
let listConjug = ['infinitif','preterit','participe','traduction']                                  
let profil = {
    reponsePos: 0,
    reponse: "answer",
    currentVerbs : ["infinitif","preterit","participe","traduction"],
}


function demarrer() {     
    recharger()                                                                          
    //chargerJSON("./list.json", (text) => { listVerbes = JSON.parse(text)[2].data, recharger() })      
    //document.getElementById('b1').addEventListener('click', reload)                                     
    document.getElementById('b2').addEventListener('click', valider)                                    
    window.addEventListener('keypress', verifEntree)                                                    
}

/*function chargerJSON(file, callback) {                                                                
    let rawFile = new XMLHttpRequest()
    rawFile.overrideMimeType("application/json")
    rawFile.open("GET", file, true)
    rawFile.onreadystatechange = function() {
        if(rawFile.readyState == 4 && rawFile.status == "200") {
            callback(rawFile.responseText)
        }
    }
    rawFile.send(null)
}*/

function verifEntree(event) {                                                                           
    if(event.key == "Enter") valider()
}

function recharger() {                                                                                 
    let randomVerbe = Math.floor(Math.random() * listVerbes.length)  
    let choosenConjug = listConjug[Math.floor(Math.random() * listConjug.length)]     

    profil.currentVerbs[0] = listVerbes[randomVerbe].infinitif                                          
    profil.currentVerbs[1] = listVerbes[randomVerbe].preterit
    profil.currentVerbs[2] = listVerbes[randomVerbe].participe
    profil.currentVerbs[3] = listVerbes[randomVerbe].traduction
    
    switch(choosenConjug) {
        case "infinitif":    
            profil.reponse = profil.currentVerbs[0]
            profil.reponsePos = 0                                                                                                                 
            profil.currentVerbs[0] = "???"                                                            
        break;
        case "preterit":
            profil.reponse = profil.currentVerbs[1]  
            profil.reponsePos = 1   
            profil.currentVerbs[1] = "???"
        break;
        case "participe":
            profil.reponse = profil.currentVerbs[2] 
            profil.reponsePos = 2    
            profil.currentVerbs[2] = "???"
        break;
        case "traduction":
            profil.reponse = profil.currentVerbs[3] 
            profil.reponsePos = 3    
            profil.currentVerbs[3] = "???"
        break;
    }
    console.log(profil)
    afficherVerbes()
}

function reload() {                                                                                        
    console.log('Reload')
    recharger()
}

function valider() {                                                                                       
    let reponse = document.getElementById('answer').value                                                  
    if(reponse == "") {                                                                                    
        document.body.style.background = "red"
        setTimeout(() => {
            document.body.style.background = "rgb(29, 29, 29)"
        }, 1000);
    } else {       
        if(reponse.toLowerCase() == profil.reponse) {
            document.body.style.background = "green"
            document.getElementById(`i${profil.reponsePos}`).style.background = "lightseagreen"
            document.getElementById(`i${profil.reponsePos}`).innerHTML = `${profil.reponse}`
            setTimeout(() => {
                document.body.style.background = "rgb(29, 29, 29)"
                document.getElementById(`i${profil.reponsePos}`).style.background = "rgb(100, 100, 100)"
                recharger()
            }, 2000);
        } else {
            document.body.style.background = "red"
            document.getElementById(`i${profil.reponsePos}`).style.background = "orange"
            document.getElementById(`i${profil.reponsePos}`).innerHTML = `${profil.reponse}`
            setTimeout(() => {
                document.body.style.background = "rgb(29, 29, 29)"
                document.getElementById(`i${profil.reponsePos}`).style.background = "rgb(100, 100, 100)"
            }, 4000);
        }                                                                                                                                                                   
        document.getElementById('answer').value = ""                                                       
    }
}

function afficherVerbes() {                                                                                
    for(let i=0;i<=3;i++) {
        document.getElementById(`i${i}`).innerHTML = `${profil.currentVerbs[i]}`
    }
}

window.addEventListener('load', demarrer)                                                                  