
import { useState } from 'react'
import styles from './style.module.css'
import {Identification} from"./identification"
import {Bonjour} from "./bonjour"
import {Genre} from "./genre"
import {FormF} from"./formF"
import {FormM2} from"./formM2"
import { Questions} from './questions'

function App(){
	const nameMemo =  localStorage.getItem("name")
	const [name,setName]=useState('');
	const [genre,setGenre]= useState("true")
	const [answers,setAnswers]= useState("")
	const [question,setQuestion]=useState("question")

	let tabShowStatus={
		"identificationShowStatus" : true , 
		"bonjourShowStatus" : false , 
		"genreShowStatus" : false ,
		"formFShowStatus" : true,
		"formMShowStatus" : false,
		"questionsFShowStatus" : true ,
		"formM2ShowStatus" : false 
	}
	const [showStatus,setShowStatus]=useState(tabShowStatus)
	return (
		
	<div className={styles.main}>
	{/* à mettre entre accolades pour travailler que sur le questionnaire  */}
	
	{/* <Identification name={name} setName={setName} showStatus={showStatus} setShowStatus={setShowStatus} />
	<Bonjour nameMemo={nameMemo} showStatus={showStatus} setShowStatus={setShowStatus}  />
	<Genre genre={genre} setGenre={setGenre} showStatus={showStatus} setShowStatus={setShowStatus}/>
	<FormF question={question} setQuestion={setQuestion}  nameMemo={nameMemo} answers={answers} setAnswers={setAnswers} showStatus={showStatus} setShowStatus={setShowStatus}/>  
	<FormM2 question={question} setQuestion={setQuestion}   answers={answers} setAnswers={setAnswers} showStatus={showStatus} setShowStatus={setShowStatus}/>   */}
	
	
	// <Questions question={question} setQuestion={setQuestion} showStatus={showStatus} setShowStatus={setShowStatus}/>
	</div>
	)

}


export default App

