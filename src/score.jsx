

import { useState } from 'react'
import styles from './style.module.css'
// import { Questions} from './questions'
// import {x, questionsA} from './questions'

 export function Score ({answers,answers2}) {

//     console.log( "reponses de f " ,answersMemo, "reponses de m" ,answersMemo2)

    let score = 0
    let commentaire = ""

    for (let index in answers) {
        if (answers[index]== answers2[index])
        {console.log(answers[index],"yoiyiyiyu")
        score++
        }   
    }

    if (score<=1) { commentaire="Vous feriez mieux de divorcer... ;( "}
    else if (score==2) { commentaire="Vous êtes sur la bonne voie ! :) "}
    else { commentaire=" Quel couple du tonnerre !!! "}

    return (
        <>
        <div className={styles.score}> Votre score est : {score}</div>
        <div className={styles.commentaire}> {commentaire}</div>
        </>
       
    )

}


