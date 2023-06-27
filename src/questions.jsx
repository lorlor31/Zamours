import { useState } from 'react'
import styles from './style.module.css'
import { readOnly } from 'tone/build/esm/core/util/Interface'


//B noter : ne pas déclarer toutes les variables à l'inter du composant, baanane
// bien initialiser le state de type "select" avec une valeur d'une des options 
export let x =parseInt(Math.floor(Math.random()*10))

let answA, answB, answC
let reponseStyle="reponseNeutre"

export let questionsA = 
    [
        {"question" : "Quel est le prénom de ton père ?" ,"question2M" : "Quel est le prénom de son père ?" },
        {"question" :"Quel est le prénom de ta mère ?" ,"question2M" :"Quel est le prénom de sa mère ?" },
        {"question" :"Quel est la destination où tu aurais voulu aller ? " ,"question2M" :"Quel est la destination où elle aurait voulu aller ? "},
        {"question" : "Quel est le prénom de ton idole ?" ,"question2M" :"Quel est le prénom de son idole ?" },
        {"question" :"Quel est le prénom de ton animal préféré ?" ,"question2M" : "Quel est le prénom de son animal préféré ?"},
        {"question" :"Quel est la destination où tu n'aurais pas voulu aller ? " ,"question2M" :"Quel est la destination où elle n'aurait pas voulu aller ? " },
        {"question" : "Quelle était ta matière préférée à l'école ?" ,"question2M" : "Quelle était sa matière préférée à l'école ?"},
        {"question" :"Quelle est la personnalité que tu détestes le plus ?" ,"question2M" : "Quelle est la personnalité qu'elle déteste le plus ?"},
        {"question" :" Quel est ton restaurant préféré ? " ,"question2M" :"Quel est son restaurant préféré ? " },
        {"question" : "Quel est ton signe astrologique  ?"  ,"question2M" :"Quel est son signe astrologique  ?"},
        {"question" :"Quel est le signe astrologique de ta mère ?" ,"question2M" : "Quel est le signe astrologique de sa mère ?" },
        {"question" :"Quel est le film que tu as le plus vu ? " ,"question2M" :"Quel est le film qu'elle a le plus vu ? "},
        {"question" :"Quel est ton animal préféré ? " ,"question2M" :"Quel est son animal préféré ? "},
    ]

export let questionsB = 
    [
        {"question" : "Aimes-tu le vin ? " ,"question2M" : "Aime-t-elle le vin ? "} ,
        {"question" : "Aimes-tu le jazz ? " ,"question2M" : "Aime-t-elle le jazz ? "} ,
        {"question" : "Aimes-tu le sport ? " ,"question2M" : "Aime-t-elle le sport ? "} ,
        {"question" : "Aimes-tu le golf ? " ,"question2M" : "Aime-t-elle le golf ? "} ,
        {"question" : "Aimes-tu la politique ? " ,"question2M" : "Aime-t-elle la politique ? "} ,
        {"question" : "Aimes-tu le hip hop ? " ,"question2M" : "Aime-t-elle le hip hop ? "} ,
        {"question" : "Aimes-tu le rap ? " ,"question2M" : "Aime-t-elle le rap ? "} ,
        {"question" : "Aimes-tu la salsa ? " ,"question2M" : "Aime-t-elle le salsa ? "} ,
        {"question" : "Aimes-tu le reggae ? " ,"question2M" : "Aime-t-elle le reggae ? "} ,
        {"question" : "Aimes-tu le surf ? " ,"question2M" : "Aime-t-elle le surf ? "} ,
        {"question" : "Aimes-tu le vélo ? " ,"question2M" : "Aime-t-elle le vélo ? "} ,
        {"question" : "Aimes-tu lire ? " ,"question2M" : "Aime-t-elle lire ? "} ,
    ]

export let questionsC = 
    [
        {"question" : "Quel achat aimerais-tu faire prochainement ?" ,
        "question2M" : "Quel achat aimerait-elle faire prochainement ?" ,
        "reponse" : ["Une télé","Une voiture","Un chien","Un vélo","Un ordi"]},
        {"question" : "Quelle est la corvée ménagère que tu détestes faire ?" ,
        "question2M" : "Quelle est la corvée ménagère qu'elle déteste faire ?" ,
        "reponse" : ["La vaisselle","La serpillère","Laver les WC", "Laver les vitres","Repasser"]},
        {"question" : "Que ferais-tu avec un million d'euros ?" ,
        "question2M" : "Que ferait-elle avec un million d'euros ?" ,
        "reponse" : ["Un investissement","Un voyage","Une maison", "Un placement", "Arrêter de travailler"]},
        {"question" : "Quel est ton plat favori parmi : " ,
        "question2M" : "Quel est son plat favori parmi : " ,
        "reponse" : ["La pizza","Le magret","Le burger","L'entrecôte","Le barbecue"]},
        {"question" : "Quel est ton dessert favori parmi : " ,
        "question2M" : "Quel est son dessert favori parmi : " ,
        "reponse" : ["Le cheesecake", "La mousse au chocolat","La salade de fruits","Le flan coco","Le gâteau basque"]},
        {"question" : "Quelle est la première chose que tu fais en te réveillant ?" ,
        "question2M" : "Quelle est la première chose qu'elle fait en se réveillant ?" ,
        "reponse" : ["Eteindre le réveil" ,"Le café","Regarder le tél","Pisser","S'étirer"]},
        {"question" : "Quelle est ta couleur préférée ? " ,
        "question2M" : "Quelle est sa couleur préférée ? " ,
        "reponse" : ["rouge","bleu","vert","violet","jaune"]},
        {"question" : "Quelle est ta saison préférée ?" ,
        "question2M" : "Quelle est sa saison préférée ? " ,
        "reponse" : ["printemps","été","automne","hiver","toutes"]},
        {"question" : "Quelle chanson te représente le mieux ?" ,
        "question2M" : "Quelle chanson la représente le mieux ?" ,
        "reponse" : ["Travailler, c'est trop dur ! " , "Il en faut peu pour être heureux" , "Aimer", "L'envie", "We will rock you"]},
        {"question" : "Quel instrument de musique préfères-tu ?" ,
        "question2M" : "Quel instrument de musique préfère-t-elle ?" ,
        "reponse" : ["guitare","piano","batterie","accordéon","harmonica"]},
        {"question" : "Quelle est ta plus belle qualité ? " ,
        "question2M" : "Quelle est sa plus belle qualité ? " ,
        "reponse" : ["Patience","Persévérance","Intelligence", "Générosité", "Humour"]},
        {"question" : "Quel est ton pire défaut ? " ,
        "question2M" : "Quel est son pire défaut ? " ,
        "reponse" : ["Impatience", "Manque d'organisation", "Etourderie", "Jalousie", "Paresse"]}
        
    ]

export function Questions ({question,setQuestion, answers,setAnswers,answers2,setAnswers2,showStatus,setShowStatus } ) {

    // Recuperation des reponses et Déclaration des states crrspdts aux réponses


    // let answersDef=localStorage.getItem("answers")
    // let answers2Def=localStorage.getItem("answers2")
    // if (answersDef=="") {answersDef=tabAnswers }
    // if (answers2Def=="") {answers2Def=tabAnswers }

    let [reponseB,setReponseB]=useState() // variable pour memoriser le check de la reponse B

    function handleSubmit  (event) {
        event.preventDefault() ;
        if (showStatus.formFShowStatus==true) {
            setQuestion("question2M")
            let nextShowStatus={...showStatus}
            nextShowStatus.formM2ShowStatus=true 
            nextShowStatus.formFShowStatus=false  
            setShowStatus(nextShowStatus)
            console.log("reponses1" , answers) 
            
        }
        else if (showStatus.formM2ShowStatus==true) {
            let nextShowStatus={...showStatus}
            nextShowStatus.formM2ShowStatus=false 
            nextShowStatus.questionsSyntheseScore=true  
            setShowStatus(nextShowStatus)
            console.log("reponses2" , answers2) 
        }
    }

    function saveAnswers(event,answer){
        if (showStatus.formFShowStatus==true) {
            let nextAnswers={...answers}
            nextAnswers[answer]=event.target.value
            setAnswers(nextAnswers)
            setReponseB(nextAnswers.answB)
            console.log("reponses1" , nextAnswers) 
           
            let answersText=JSON.stringify(nextAnswers)
            localStorage.setItem("answers",answersText)
        }
        else if (showStatus.formM2ShowStatus==true){
            let nextAnswers2={...answers2}
            nextAnswers2[answer]=event.target.value
            setAnswers2(nextAnswers2)
            setReponseB(nextAnswers2.answB)
            console.log("reponses2" , nextAnswers2) 
            let answersText2=JSON.stringify(nextAnswers2)
            localStorage.setItem("answers2",answersText2)
        }
    }

  
    return(
        
        //showStatus.questionsShowStatus==false ? null : 
        <> 
        <form onSubmit={handleSubmit} className={styles.questions}>

            <label htmlFor='questA'> {questionsA[x][question]}</label> 
            <input type="text" id='questA' value={answA} 
            className={styles[reponseStyle]}//à rectifier mais comment
            onChange={(event)=>saveAnswers(event, "answA")}/>
            <br/> 

            <label htmlFor='questB'> {questionsB[x][question]}</label> 
            <label htmlFor='questBChoix1'className={styles[reponseStyle]}> Oui </label> 
            <input type="radio" name='questB' id='questBChoix1' value="oui" checked={reponseB==="oui"} 
            onChange={(event)=>saveAnswers(event, "answB")}/>
            <label htmlFor='questBChoix2'className={styles[reponseStyle]}> Non </label> 
            <input type="radio" name="questBChoix2" id="questBChoix2" value="non" checked={reponseB==="non"}  
            onChange={(event)=>saveAnswers(event, "answB")}/>
            <br/> 

            <label htmlFor='questC'>{questionsC[x][question]}</label> 
            <select name="questCChoix1" id="questCChoix1" value={answC} className={styles[reponseStyle]}
            onChange={(event)=>saveAnswers(event, "answC")}> 
            {questionsC[x].reponse.map((option)=> <option value={option} key={option}>{option} </option> )}
            </select> 
            <br/> 

            <button onSubmit={handleSubmit}> Valider !</button>

        </form>
        
        </> 
    )
}


// Copie du questionnaire avec réponses remplies et readonly
        
export function QuestionsRemplies ({question, reponseAAfficher, answers,answers2})  {
 
    //créer un constructor pour objet reponse
    class Reponse {

        constructor ( nom, reponseStyle,reponseAttendue) {
        this.nom=nom ;
        this.reponseStyle=reponseStyle ;
        this.reponseAttendue=reponseAttendue ;
        }
    }
    // créer les objets reponse
    let answA = new Reponse ("answA","reponseSccwxtyle","reponseAttendue" )
    let answB = new Reponse ("answB","reponseStyle","reponseAttendue" )
    let answC = new Reponse ("answC","reponseStyle","reponseAttendue" )

    //calcul du style des reponses selon vrai ou faux
    let reponsesStyles = [answA,answB, answC ] 
    let reponsesStylesKeys = ["answA","answB", "answC" ] 
    let answersKeys=Object.keys(answers)
    function calculReponsesStyles() {
        for (let reponse of reponsesStyles) {
            //console.log ("la reponse est", answers[reponse.nom])
            if (answers[reponse.nom]==answers2[reponse.nom]) {
                console.log("vsd")
            reponse.reponseStyle="reponseBonne" ;
            reponse.reponseAttendue="reponseAttendueCachee"
            }
            else if (answers[reponse.nom]!=answers2[reponse.nom]){
                reponse.reponseStyle="reponseMauvaise" ;
                reponse.reponseAttendue="reponseAttendueVisible"
                
            }

        }
        
        return reponsesStyles
        
    }
    
    calculReponsesStyles()
    console.log("cc",answA.reponseStyle)
  
        return (    
        <> 
        <form className={styles.questions} >

            <label htmlFor='questA'> {questionsA[x][question]}</label> 
            <input type="text" id='questA' value={reponseAAfficher.answA} 
            className={styles[reponsesStyles[0].reponseStyle]} 
            readOnly/>
            <span className={styles[reponsesStyles[0].reponseAttendue]}> Il fallait répondre {answers.answA}! </span>
            <br/> 

            <label htmlFor='questB'> {questionsB[x][question]}</label> 
            <label htmlFor='questBChoix1'
            className={styles[reponsesStyles[1].reponseStyle]} > Oui </label> 
            <input type="radio" name='questB' id='questBChoix1' value="oui" checked={reponseAAfficher.answB==="oui"} 
            readOnly/>
            <label htmlFor='questBChoix2'
            className={styles[reponsesStyles.answB]} > Non </label> 
            <input type="radio" name="questBChoix2" id="questBChoix2" value="non" checked={reponseAAfficher.answB==="non"}  
            readOnly/>
            <span className={styles[reponsesStyles[1].reponseAttendue]}> Il fallait répondre {answers.answB}! </span>
            <br/> 

            <label htmlFor='questC'>{questionsC[x][question]}</label> 
            <select name="questCChoix1" id="questCChoix1" value={reponseAAfficher.answC} 
            className={styles[reponsesStyles[2].reponseStyle]} 
            readOnly> 
            {questionsC[x].reponse.map((option)=> <option value={option} key={option}>{option} </option> )}
            </select> 
            <span className={styles[reponsesStyles[2].reponseAttendue]}> Il fallait répondre {answers.answC}! </span>
            <br/> 

            

        </form>
        
        </> 
    )

}