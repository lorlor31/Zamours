import { useState } from 'react'
import styles from './style.module.css'
import { Questions, QuestionsRemplies} from './questions'

// let questionsShowStatus={
//     "identificationShowStatus" : true , 
//     "bonjourShowStatus" : false , 
//     "genreShowStatus" : false ,
//     "formFShowStatus" : true,
//     "formMShowStatus" : false,
//     "formM2ShowStatus" : true ,
//     "questionsSyntheseScore" : false
// }

export function QuestionsSyntheseScore({answers, answers2, genre ,showStatus,setShowStatus}) {
    

    // if (genre=="femme") {showStatus.formFShowStatus=true ; showStatus.formM2ShowStatus==true} ;
    return (
        showStatus.questionsSyntheseScore==false ? null :
        <>
        <div className={styles.questionsSyntheseScore}>
            <p> Voilà vos résultats !</p>
            {/* <div></div> // faire un composant Score qui met une phrase différente selon le score */}
            {/* <Questions question="question" showStatus={showStatus} setShowStatus={setShowStatus} answers={answers}/> 
            <div> <br/></div>
            <Questions question="question2M"  showStatus={showStatus} setShowStatus={setShowStatus} />            */}
            <QuestionsRemplies question="question" reponseAAfficher={answers} answers={answers} answers2={answers2}/>
            <QuestionsRemplies question="question2M" reponseAAfficher={answers2} answers={answers} answers2={answers2} />

        </div>
        
        <div>
            {JSON.stringify(answers)} ,
            
            {JSON.stringify(answers2)} ,
        </div>
        </>
    )
}

// export let x =parseInt(Math.floor(Math.random()*10))
