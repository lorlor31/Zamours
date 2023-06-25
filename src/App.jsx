//trucs qui clochent 
//où déclarer les state ?? question(chx de la question en fct du sexe et de la position du qaire) notamment??
import {useState} from 'react'
import styles from './style.module.css'
import {Identification} from"./identification"
import {Bonjour} from "./bonjour"
import {Genre} from "./genre"
import {FormF} from"./formF"
import {FormM2} from"./formM2"
import {QuestionsSyntheseScore} from './questionsSyntheseScore'
import {Score} from './score'

function App(){
	const nameMemo =  localStorage.getItem("name")
	const [name,setName]=useState('');
	const [genre,setGenre]= useState("true")
	const [answers,setAnswers]= useState("")
	const [answers2,setAnswers2]= useState("")
	const [question,setQuestion]=useState("questionF")
	

	let tabShowStatus={
		"identificationShowStatus" : true , 
		"bonjourShowStatus" : false , 
		"genreShowStatus" : false ,
		"formFShowStatus" : false,
		"formMShowStatus" : false,
		"formM2ShowStatus" : false ,
		"questionsSyntheseScore" : false
	}
	const [showStatus,setShowStatus]=useState(tabShowStatus)

	return (
		
	<div className={styles.main}>
	{/* à mettre entre accolades pour travailler que sur le questionnaire  */}
	 <Identification name={name} setName={setName} showStatus={showStatus} setShowStatus={setShowStatus} />
	<Bonjour nameMemo={nameMemo} showStatus={showStatus} setShowStatus={setShowStatus}  />
	<Genre genre={genre} setGenre={setGenre} showStatus={showStatus} setShowStatus={setShowStatus}/>
	<FormF question="question" setQuestion={setQuestion}  nameMemo={nameMemo} answers={answers} setAnswers={setAnswers} showStatus={showStatus} setShowStatus={setShowStatus}/>  
	<FormM2 question="question2M" setQuestion={setQuestion}   answers={answers} setAnswers={setAnswers} showStatus={showStatus} setShowStatus={setShowStatus}/>  
	<QuestionsSyntheseScore answers={answers} answers2={answers2} genre={genre} showStatus={showStatus} setShowStatus={setShowStatus}/>
	{/* <Score answers={answers} answers2={answers2} showStatus={showStatus} setShowStatus={setShowStatus}/> */}
	</div> 
	)

}


export default App

