import { useState } from 'react'
import styles from './style.module.css'
import {Questions} from "./questions"

export function FormF ({nameMemo, answers, setAnswers,showStatus,setShowStatus, question,setQuestion}) {
    
    return (
    showStatus.formFShowStatus==false ? null :   
        <> 
        <div>
            Voilà, tu vas répondre aux 5 questions suivantes, et on va voir si ton jules te connait bien !
        <Questions  question="question" setQuestion={setQuestion}  
                    showStatus={showStatus} setShowStatus={setShowStatus} 
                    answers={answers} setAnswers={setAnswers}
                    />
        </div>
        </>
    )
}
