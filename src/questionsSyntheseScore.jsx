import { useState } from 'react'
import styles from './style.module.css'
import { Questions, QuestionsRemplies} from './questions'
import {Score} from './score'


export function QuestionsSyntheseScore({answers, answers2, genre ,showStatus,setShowStatus}) {
    

    // if (genre=="femme") {showStatus.formFShowStatus=true ; showStatus.formM2ShowStatus==true} ;
    return (
        showStatus.questionsSyntheseScore==false ? null :
        <>
        <div className={styles.questionsSyntheseScore}>
            <header> Voilà vos résultats !</header>

            <div className={styles.comparatifReponses}>
                <QuestionsRemplies question="question" reponseAAfficher={answers} answers={answers} answers2={answers2}/>
                <QuestionsRemplies question="question2M" reponseAAfficher={answers2} answers={answers} answers2={answers2} />
            </div>
            

        </div>
        <Score answers={answers} answers2={answers2} showStatus={showStatus} setShowStatus={setShowStatus}/> 
        </>
    )
}


