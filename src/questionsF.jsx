import { useState } from 'react'
import styles from './style.module.css'



//a noter : ne pas déclarer toutes les variables à l'inter du composant, baanane
// bien initialiser le state de type "select" avec une valeur d'une des options 
let x =parseInt(Math.floor(Math.random()*10))
let answA, answB, answC,answD,answE
let questionsA = 
    [
        {"question" : "Quel est le prénom de ton père ?" },
        {"question" :"Quel est le prénom de ta mère ?" },
        {"question" :"Quel est la destination où tu aurais voulu aller ? "},
        {"question" : "Quel est le prénom de ton idole ?" },
        {"question" :"Quel est le prénom de ton animal préféré ?" },
        {"question" :"Quel est la destination où tu n'aurais pas voulu aller ? "},
        {"question" : "Quelle était ta matière préférée à l'école ?" },
        {"question" :"Quel est la personnalité que tu détestes le plus ?" },
        {"question" :"Quel est ton restaurant préféré ? "},
        {"question" : "Quel est ton signe astrologique  ?" },
        {"question" :"Quel est le signe astrologique de ta mère ?" },
        {"question" :"Quel est le film que tu as le plus vu ? "},
        {"question" :"Quel est ton animal préféré ? "},
    ]

let questionsB = 
    [
        {"question" : "Aimes-tu le vin ? "} ,
        {"question" : "Aimes-tu le jazz ? "} ,
        {"question" : "Aimes-tu le sport ? "} ,
        {"question" : "Aimes-tu le golf ? "} ,
        {"question" : "Aimes-tu la politique ? "} ,
        {"question" : "Aimes-tu le hip hop ? "} ,
        {"question" : "Aimes-tu le rap ? "} ,
        {"question" : "Aimes-tu la salsa ? "} ,
        {"question" : "Aimes-tu le reggae ? "} ,
        {"question" : "Aimes-tu le surf ? "} ,
        {"question" : "Aimes-tu le vélo ? "} ,
        {"question" : "Aimes-tu lire ? "} ,
    ]

let questionsC = 
    [
        {"question" : "Quel achat aimerais-tu faire prochainement ?" ,
        "reponse" : ["Une télé","Une voiture","Un chien","Un vélo","Un ordi"]},
        {"question" : "Quelle est la corvée ménagère que tu détestes faire ?" ,
        "reponse" : ["La vaisselle","La serpillère","Laver les WC", "Laver les vitres","Repasser"]},
        {"question" : "Que ferais-tu avec un million d'euros ?" ,
        "reponse" : ["Un investissement","Un voyage","Une maison", "Un placement", "Arrêter de travailler"]},
        {"question" : "Quel est ton plat favori parmi : " ,
        "reponse" : ["La pizza","Le magret","Le burger","L'entrecôte","Le barbecue"]},
        {"question" : "Quel est ton dessert favori parmi : " ,
        "reponse" : ["Le cheesecake", "La mousse au chocolat","La salade de fruits","Le flan coco","Le gâteau basque"]},
        {"question" : "Quelle est la première chose que tu fais en te réveillant ?" ,
        "reponse" : ["Eteindre le réveil" ,"Le café","Regarder le tél","Pisser","S'étirer"]},
        {"question" : "Quelle est ta couleur préférée " ,
        "reponse" : ["rouge","bleu","vert","violet","jaune"]},
        {"question" : "Quelle est ta saison préférée ?" ,
        "reponse" : ["printemps","été","automne","hiver","toutes"]},
        {"question" : "Quelle chanson te représente le mieux ?" ,
        "reponse" : ["Travailler, c'est trop dur ! " , "Il en faut peu pour être heureux" , "Aimer", "L'envie", "We will rock you"]},
        {"question" : "Quel instrument de musique préfères-tu ?" ,
        "reponse" : ["guitate","piano","batterie","accordéon","harmonica"]},
        {"question" : "Quelle est ta plus belle qualité ? " ,
        "reponse" : ["Patience","Persévérance","Courage", "Générosité", "Humour"]},
        {"question" : "Quel est ton pire défaut ? " ,
        "reponse" : ["Impatience", "Manque d'organisation", "Etourderie", "Inconstance", "Paresse"]}
        
    ]

export function QuestionsF ({showStatus,setShowStatus} ) {

    const answersMemo =  localStorage.getItem("answers")
    // Déclaration des states crrspdts aux réponses

    let tabAnswers= {"answA":"ter","answB":"erte","answC":questionsC[x].reponse[0],"answD":"bgb","answE":"hfg"}
    const [answers,setAnswers]=useState(tabAnswers)  

    function handleSubmit  (event) {
        event.preventDefault() ;
        (event)=>saveAnswers(event, "answA");
        (event)=>saveAnswers(event, "answB");
        const answersMemo =  localStorage.getItem("answers")
        console.log("reponses mémoriséez", answersMemo )
        let nextShowStatus={...showStatus}
        nextShowStatus.formM2ShowStatus=true 
        nextShowStatus.formFShowStatus=false  
        setShowStatus(nextShowStatus)
    }

    function saveAnswers(event,answer){
        let nextAnswers={...answers}
        nextAnswers[answer]=event.target.value
        setAnswers(nextAnswers)
        let answersText=JSON.stringify(nextAnswers)
        localStorage.setItem("answers",answersText)
        console.log("coucou" , answersText)
    }
  
    return(
        
        showStatus.questionsShowStatus==false ? null : 
        <> 
        <form onSubmit={handleSubmit}>

    <label htmlFor='questA'> {questionsA[x].question}</label> 
    <input type="text" id='questA' value={answA} 
    onChange={(event)=>saveAnswers(event, "answA")}/>
    <br/> 

    <label htmlFor='questB'> {questionsB[x].question}</label> 
    <label htmlFor='questBChoix1'> Oui </label> 
    <input type="radio" name='questB' id='questBChoix1' value="oui" checked={answers.answB==="oui"} 
    onChange={(event)=>saveAnswers(event, "answB")}/>
    <label htmlFor='questBChoix2'> Non </label> 
    <input type="radio" name="questBChoix2" id="questBChoix2" value="non" checked={answers.answB==="non"}  
    onChange={(event)=>saveAnswers(event, "answB")}/>
    <br/> 

    <label htmlFor='questC'>{questionsC[x].question}</label> 
    <select name="questCChoix1" id="questCChoix1" value={answC}
    onChange={(event)=>saveAnswers(event, "answC")}> 
    {questionsC[x].reponse.map((option)=> <option value={option} key={option}>{option} </option> )}
    </select> 
    <br/> 

    <button onSubmit={handleSubmit}> Valider !</button>

</form>
        
        </> 
    )
}