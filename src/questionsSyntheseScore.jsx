import { useState } from 'react'
import styles from './style.module.css'
import { Questions} from './questions'

let questionsShowStatus={
    "identificationShowStatus" : true , 
    "bonjourShowStatus" : false , 
    "genreShowStatus" : false ,
    "formFShowStatus" : true,
    "formMShowStatus" : false,
    "formM2ShowStatus" : true ,
    "questionsSyntheseScore" : false
}

export function QuestionsSyntheseScore({answers, answers2, showStatus,setShowStatus}) {
   
    // const [showStatus,setShowStatus]=useState([]])
    // const [answers,setAnswers]=useState(tabAnswers)  
    // const [answers2,setAnswers2]=useState(tabAnswers)  

    return (
        showStatus.questionsSyntheseScore==false ? null :
        <div className={styles.questionsSyntheseScore}>
            <p> Voilà vos résultats !</p>
            {/* <div></div> // faire un composant Score qui met une phrase différente selon le score */}
            <Questions question="question" showStatus={showStatus} setShowStatus={setShowStatus}/> 
            <div> <br/></div>
            <Questions question="question2M"  showStatus={showStatus} setShowStatus={setShowStatus} />           
        </div>
    )
}

// export let x =parseInt(Math.floor(Math.random()*10))
