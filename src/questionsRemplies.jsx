import { useState } from 'react'
import styles from './style.module.css'
import {Questions} from './questions'

export function QuestionsRemplies () 
    {  
        return (    
        <> 
        <form onSubmit={handleSubmit} className={styles.questions}>

            <label htmlFor='questA'> {questionsA[x][question]}</label> 
            <input type="text" id='questA' value={answA} className={styles[reponseStyle]}//à rectifier mais comment
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
