


// // reprendre le formulaire questions de manière à ce qu'il rappelle les valeurs enregistrées 
// //dans answers ou answers2 et sans qu'on puisse le modifier

// essayer de n importer ques questions en declarant les prop nécessaires :
//answer answer2 question








// import { useState } from 'react'
// import styles from './style.module.css'
// import { Questions} from './questions'
// import {x, questionsA} from './questions'

// export function Score ({answers,answers2}) {
//     const answersMemo =  localStorage.getItem("answers2")
//     const answersMemo2 =  localStorage.getItem("answers2")
//     let question="question"
//     console.log( "reponses de f " ,answersMemo, "reponses de m" ,answersMemo2)

//     return (
// <>
//         <div> Score</div>




// <form className={styles.questions}>

// <label htmlFor='questA'> {questionsA[x][question]}</label> 
// <input type="text" id='questA' value={answersMemo.answA} className={styles[reponseStyle]}/>
// <br/> 
// <label htmlFor='questB'> {questionsB[x][question]}</label> 
// <label htmlFor='questBChoix1'className={styles[reponseStyle]}> Oui </label> 
// <input type="radio" name='questB' id='questBChoix1' value="oui" checked={reponseB==="oui"} />
// <label htmlFor='questBChoix2'className={styles[reponseStyle]}> Non </label> 
// <input type="radio" name="questBChoix2" id="questBChoix2" value="non" checked={reponseB==="non"}  />
// <br/> 

// <label htmlFor='questC'>{questionsC[x][question]}</label> 
// <select name="questCChoix1" id="questCChoix1" value={answC} className={styles[reponseStyle]}> 
// {questionsC[x].reponse.map((option)=> <option value={option} key={option}>{option} </option> )}
// </select> 
// <br/> 

// <button onSubmit={handleSubmit}> Valider !</button>

// </form>



// </>

//     )



// }


