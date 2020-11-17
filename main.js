let listVerbes = [
    {"infinitif":"be",			"preterit":"was\/were",		"participe":"been",			"traduction":"etre"},
    {"infinitif":"beat",		"preterit":"beat",			"participe":"beaten",		"traduction":"battre"},
    {"infinitif":"become",		"preterit":"became",		"participe":"become",		"traduction":"devenir"},
    {"infinitif":"begin",		"preterit":"began",			"participe":"begun",		"traduction":"commencer"},
    {"infinitif":"bend",		"preterit":"bent",			"participe":"bent",			"traduction":"plier"},
    {"infinitif":"bet",			"preterit":"bet",			"participe":"bet",			"traduction":"parier"},
    {"infinitif":"bite",		"preterit":"bit",			"participe":"bitten",		"traduction":"mordre"},
    {"infinitif":"blow",		"preterit":"blew",			"participe":"blown",		"traduction":"souffler"},
    {"infinitif":"break",		"preterit":"broke",			"participe":"broken",		"traduction":"casser"},
    {"infinitif":"bring",		"preterit":"brought",		"participe":"brought",		"traduction":"apporter"},
    {"infinitif":"broadcast",	"preterit":"broadcast",		"participe":"broadcast",	"traduction":"diffuser"},
    {"infinitif":"build",		"preterit":"built",			"participe":"built",		"traduction":"construire"},
    {"infinitif":"burst",		"preterit":"burst",			"participe":"burst",		"traduction":"eclater"},
    {"infinitif":"buy",			"preterit":"bought",		"participe":"bought",		"traduction":"acheter"},
    {"infinitif":"burn",		"preterit":"burnt",			"participe":"burnt",		"traduction":"bruler"},
    {"infinitif":"buy",			"preterit":"bought",		"participe":"bought",		"traduction":"acheter"},
    {"infinitif":"catch",		"preterit":"caught",		"participe":"caught",		"traduction":"attraper"},
    {"infinitif":"choose",		"preterit":"chose",			"participe":"chosen",		"traduction":"choisir"},
    {"infinitif":"come",		"preterit":"came",			"participe":"come",			"traduction":"venir"},
    {"infinitif":"cost",		"preterit":"cost",			"participe":"cost",			"traduction":"couter"},
    {"infinitif":"creep",		"preterit":"crept",			"participe":"crept",		"traduction":"ramper"},
    {"infinitif":"cut",			"preterit":"cut",			"participe":"cut",			"traduction":"couper"},
    {"infinitif":"deal",		"preterit":"dealt",			"participe":"dealt",		"traduction":"negocier"},
    {"infinitif":"dig",			"preterit":"dug",			"participe":"dug",			"traduction":"creuser"},
    {"infinitif":"do",			"preterit":"did",			"participe":"done",			"traduction":"faire"},
    {"infinitif":"draw",		"preterit":"drew",			"participe":"drawn",		"traduction":"dessiner"},
    {"infinitif":"drink",		"preterit":"drank",			"participe":"drunk",		"traduction":"boire"},
    {"infinitif":"dream",		"preterit":"dreamt",		"participe":"dreamt",		"traduction":"rever"},
    {"infinitif":"drink",		"preterit":"drank",			"participe":"drunk",		"traduction":"boire"},
    {"infinitif":"drive",		"preterit":"drove",			"participe":"driven",		"traduction":"conduire"},
    {"infinitif":"eat",			"preterit":"ate",			"participe":"eaten",		"traduction":"manger"},
    {"infinitif":"fall",		"preterit":"fell",			"participe":"fallen",		"traduction":"tomber"},
    {"infinitif":"feel",		"preterit":"felt",			"participe":"felt",			"traduction":"ressentir"},
    {"infinitif":"fight",		"preterit":"fought",		"participe":"fougth",		"traduction":"se battre"},
    {"infinitif":"find",		"preterit":"found",			"participe":"found",		"traduction":"trouver"},
    {"infinitif":"flew",		"preterit":"fled",			"participe":"fled",			"traduction":"fuir"},
    {"infinitif":"fly",			"preterit":"flew",			"participe":"flown",		"traduction":"voler"},
    {"infinitif":"forbid",		"preterit":"forbade",		"participe":"forbidden",	"traduction":"interdire"},
    {"infinitif":"forget",		"preterit":"forgot",		"participe":"forgotten",	"traduction":"oublier"},
    {"infinitif":"forgive",		"preterit":"forgave",		"participe":"forgiven",		"traduction":"pardonner"},
    {"infinitif":"freeze",		"preterit":"froze",			"participe":"frozen",		"traduction":"geler"},
    {"infinitif":"get",			"preterit":"got",			"participe":"got",			"traduction":"obtenir"},
    {"infinitif":"give",		"preterit":"gave",			"participe":"given",		"traduction":"donner"},
    {"infinitif":"go",			"preterit":"went",			"participe":"gone",			"traduction":"aller"},
    {"infinitif":"grow",		"preterit":"grew",			"participe":"grown",		"traduction":"grandir"},
    {"infinitif":"hang",		"preterit":"hung",			"participe":"hung",			"traduction":"accrocher"},    
    {"infinitif":"have",		"preterit":"had",			"participe":"had",			"traduction":"avoir"},
    {"infinitif":"hear",		"preterit":"heard",			"participe":"heard",		"traduction":"entendre"},
    {"infinitif":"hide",		"preterit":"hid",			"participe":"hiden",		"traduction":"cacher"},
    {"infinitif":"hit",			"preterit":"hit",			"participe":"hit",			"traduction":"frapper"},
    {"infinitif":"hold",		"preterit":"held",			"participe":"helt",			"traduction":"tenir"},
    {"infinitif":"hurt",		"preterit":"hurt",			"participe":"hurt",			"traduction":"blesser"},
    {"infinitif":"keep",		"preterit":"kept",			"participe":"kept",			"traduction":"garder"},
    {"infinitif":"know",		"preterit":"knew",			"participe":"known",		"traduction":"savoir"},
    {"infinitif":"lay",			"preterit":"laid",			"participe":"laid",			"traduction":"poser"},
    {"infinitif":"lead",		"preterit":"led",			"participe":"led",			"traduction":"mener"},
    {"infinitif":"learn",		"preterit":"learnt",		"participe":"learnt",		"traduction":"apprendre"},
    {"infinitif":"leave",		"preterit":"left",			"participe":"left",			"traduction":"partir"},
    {"infinitif":"lend",		"preterit":"lent",			"participe":"lent",			"traduction":"preter"},
    {"infinitif":"let",			"preterit":"let",			"participe":"let",			"traduction":"laisser"},
    {"infinitif":"lie",			"preterit":"lay",			"participe":"lain",			"traduction":"mentir"},
    {"infinitif":"light",		"preterit":"lit",			"participe":"lit",			"traduction":"eclairer"},
    {"infinitif":"lose",		"preterit":"lost",			"participe":"lost",			"traduction":"perdre"},
    {"infinitif":"make",		"preterit":"made",			"participe":"made",			"traduction":"fabriquer"},
    {"infinitif":"mean",		"preterit":"meant",			"participe":"meant",		"traduction":"signifier"},
    {"infinitif":"meet",		"preterit":"met",			"participe":"met",			"traduction":"rencontrer"},
    {"infinitif":"pay",			"preterit":"paid",			"participe":"paid",			"traduction":"payer"},
    {"infinitif":"put",			"preterit":"put",			"participe":"put",			"traduction":"mettre"},
    {"infinitif":"read",		"preterit":"read",			"participe":"read",			"traduction":"lire"},
    {"infinitif":"ride",		"preterit":"rode",			"participe":"ridden",		"traduction":"faire"},
    {"infinitif":"ring",		"preterit":"rang",			"participe":"rung",			"traduction":"sonner"},
    {"infinitif":"rise",		"preterit":"rose",			"participe":"risen",		"traduction":"monter"},
    {"infinitif":"run",			"preterit":"ran",			"participe":"run",			"traduction":"courir"},
    {"infinitif":"say",			"preterit":"said",			"participe":"said",			"traduction":"dire"},
    {"infinitif":"see",			"preterit":"saw",			"participe":"seen",			"traduction":"voir"},
    {"infinitif":"seek",		"preterit":"sought",		"participe":"sought",		"traduction":"chercher"},
    {"infinitif":"sell",		"preterit":"sold",			"participe":"sold",			"traduction":"vendre"},
    {"infinitif":"send",		"preterit":"sent",			"participe":"sent",			"traduction":"envoyer"},
    {"infinitif":"set",			"preterit":"set",			"participe":"set",			"traduction":"fixer"},
    {"infinitif":"sew",			"preterit":"sewed",			"participe":"sewn\/sewed",	"traduction":"coudre"},
    {"infinitif":"shake",		"preterit":"shooke",		"participe":"shaken",		"traduction":"secouer"},
    {"infinitif":"shine",		"preterit":"shone",			"participe":"shone",		"traduction":"briller"},
    {"infinitif":"shoot",		"preterit":"shot",			"participe":"shot",			"traduction":"tirer"},
    {"infinitif":"show",		"preterit":"showed",		"participe":"shown",		"traduction":"montrer"},
    {"infinitif":"shrink",		"preterit":"shrank",		"participe":"shrunk",		"traduction":"retrecir"},
    {"infinitif":"shut",		"preterit":"shut",			"participe":"shut",			"traduction":"fermer"},
    {"infinitif":"sing",		"preterit":"sang",			"participe":"sung",			"traduction":"chanter"},
    {"infinitif":"sink",		"preterit":"sank",			"participe":"sunk",			"traduction":"couler"},
    {"infinitif":"sit",			"preterit":"sat",			"participe":"sat",			"traduction":"asseoir"},
    {"infinitif":"sleep",		"preterit":"slept",			"participe":"slept",		"traduction":"dormir"},
    {"infinitif":"slide",		"preterit":"slid",			"participe":"slid",			"traduction":"glisser"},
    {"infinitif":"smell",		"preterit":"smelt",			"participe":"smelt",		"traduction":"sentir"},
    {"infinitif":"speak",		"preterit":"spoke",			"participe":"spoken",		"traduction":"parler"},
    {"infinitif":"spell",		"preterit":"spelt",			"participe":"spelt",		"traduction":"epeler"},
    {"infinitif":"spend",		"preterit":"spent",			"participe":"spent",		"traduction":"depenser"},
    {"infinitif":"spit",		"preterit":"spat",			"participe":"spat",			"traduction":"cracher"},
    {"infinitif":"split",		"preterit":"split",			"participe":"split",		"traduction":"separer"},
    {"infinitif":"spread",		"preterit":"spread",		"participe":"spread",		"traduction":"rependre"},
    {"infinitif":"spring",		"preterit":"sprang",		"participe":"sprung",		"traduction":"surgir"},
    {"infinitif":"stand",		"preterit":"stood",			"participe":"stood",		"traduction":"etre debout"},
    {"infinitif":"steal",		"preterit":"stole",			"participe":"stolen",		"traduction":"derober"},
    {"infinitif":"stick",		"preterit":"stuck",			"participe":"stuck",		"traduction":"coller"},
    {"infinitif":"sting",		"preterit":"stung",			"participe":"stung",		"traduction":"piquer"},
    {"infinitif":"stink",		"preterit":"stank",			"participe":"stunk",		"traduction":"empester"},
    {"infinitif":"strike",		"preterit":"struck",		"participe":"struck",		"traduction":"frapper"},
    {"infinitif":"swear",		"preterit":"swore",			"participe":"sworn",		"traduction":"jurer"},
    {"infinitif":"sweep",		"preterit":"swept",			"participe":"swept",		"traduction":"balayer"},
    {"infinitif":"swim",		"preterit":"swam",			"participe":"swum",			"traduction":"nager"},
    {"infinitif":"swing",		"preterit":"swung",			"participe":"swung",		"traduction":"balancer"},
    {"infinitif":"take",		"preterit":"took",			"participe":"taken",		"traduction":"prendre"},
    {"infinitif":"teach",		"preterit":"taught",		"participe":"taught",		"traduction":"enseigner"},
    {"infinitif":"tear",		"preterit":"tore",			"participe":"torn",			"traduction":"pleurer"},
    {"infinitif":"tell",		"preterit":"told",			"participe":"told",			"traduction":"raconter"},
    {"infinitif":"think",		"preterit":"thought",		"participe":"thought",		"traduction":"penser"},
    {"infinitif":"throw",		"preterit":"threw",			"participe":"thrown",		"traduction":"jeter"},
    {"infinitif":"understand",	"preterit":"understood",	"participe":"understood",	"traduction":"comprendre"},
    {"infinitif":"wake",		"preterit":"woke",			"participe":"woken",		"traduction":"reveiller"},
    {"infinitif":"wear",		"preterit":"wore",			"participe":"worn",			"traduction":"porter"},
    {"infinitif":"weep",		"preterit":"wept",			"participe":"wept",			"traduction":"pleurer"},
    {"infinitif":"win",			"preterit":"won",			"participe":"won",			"traduction":"gagner"},
    {"infinitif":"write",		"preterit":"wrote",			"participe":"written",		"traduction":"ecrire"}
]
let listConjug = ['infinitif','preterit','participe','traduction']                                  
let profil = {
    reponsePos: 0,
    question: [0, 1, 2],
    currentVerbs : ["infinitif","preterit","participe","traduction"],
}


function demarrer() {     
    recharger()                                                                          
    //chargerJSON("./list.json", (text) => { listVerbes = JSON.parse(text)[2].data, recharger() })      
    document.getElementById('b1').addEventListener('click', reload)                                     
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
    document.body.style.background = "rgb(29, 29, 29)"
    document.getElementById(`i${profil.reponsePos}`).value = ""
    document.getElementById(`i${profil.reponsePos}`).disabled = false
    for(let i=0;i<=2;i++) {
        document.getElementById(`i${profil.question[i]}`).value = ""
        document.getElementById(`i${profil.question[i]}`).style.background = "rgb(100, 100, 100)"
    }      
                                                                           
    let randomVerbe = Math.floor(Math.random() * listVerbes.length)  
    let choosenConjug = listConjug[Math.floor(Math.random() * listConjug.length)]     

    profil.currentVerbs[0] = listVerbes[randomVerbe].infinitif                                          
    profil.currentVerbs[1] = listVerbes[randomVerbe].preterit
    profil.currentVerbs[2] = listVerbes[randomVerbe].participe
    profil.currentVerbs[3] = listVerbes[randomVerbe].traduction

    switch(choosenConjug) {
        case "infinitif":    
            profil.reponsePos = 0
            document.getElementById("i0").disabled = true
            document.getElementById("i0").value = profil.currentVerbs[0]
            profil.question = [1,2,3]                                                                                                                                                             
        break;
        case "preterit":
            profil.reponsePos = 1
            document.getElementById("i1").disabled = true
            document.getElementById("i1").value = profil.currentVerbs[1]
            profil.question = [0,2,3]  
        break;
        case "participe":
            profil.reponsePos = 2    
            document.getElementById("i2").disabled = true
            document.getElementById("i2").value = profil.currentVerbs[2]
            profil.question = [0,1,3]  
        break;
        case "traduction":
            profil.reponsePos = 3    
            document.getElementById("i3").disabled = true
            document.getElementById("i3").value = profil.currentVerbs[3]
            profil.question = [0,1,2]  
        break;
    }
    for(let i=0;i<=2;i++) {
        document.getElementById(`i${profil.question[i]}`).placeholder = "???"
    }
}

function reload() {                                                                                        
    console.log('Reload')
    recharger()
}

function valider() {           
    let error = false                                                                            
    for(let i=0;i<=2;i++) {
        if(document.getElementById(`i${profil.question[i]}`).value.toLowerCase() == profil.currentVerbs[profil.question[i]].toLocaleLowerCase()) {
            document.getElementById(`i${profil.question[i]}`).style.background = "lightseagreen"
        } else {
            error = true
            document.getElementById(`i${profil.question[i]}`).style.background = "red"
            document.getElementById(`i${profil.question[i]}`).value = profil.currentVerbs[profil.question[i]]
        }
    }

    if(error == true) {
        document.body.style.background = "red"
    } else {
        document.body.style.background = "green"
    }
}

window.addEventListener('load', demarrer)                                                                  