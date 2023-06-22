import { useState } from 'react'
import styles from './style.module.css'
import {Questions} from "./questions"

export function FormM2 ({answers, setAnswers,showStatus,setShowStatus,question,setQuestion}) {
    
    return (
    showStatus.formM2ShowStatus==false ? null :   
        <> 
        <div>
            Madame a fait sa part du travail, on va voir si tu la connais bien ! Réponds au mieux !
        <Questions question="question2M" setQuestion={setQuestion} showStatus={showStatus} setShowStatus={setShowStatus}/>    
        </div>
        
        </>
    )
}
