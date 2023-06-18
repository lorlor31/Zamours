import { useState } from 'react'
// import styles from './style.module.css'

function App() {

	const [user1,setUser1]=useState("")
	let user2
	let users=[user1,user2]
	const [number,setNumber]=useState(0)
	const [player,setPlayer]=useState("")
	const question="quel age as tu"
	const [prenom, setPrenom] =useState("")
		function Identification() {

function savePrenom (event) {
	let nextPrenom=event.target.value
	setPrenom(nextPrenom) ;
} 
		return(
			<>
			{/* <form onSubmit={event=>setUser1(event.target.value)}>  */}
			<label htmlFor='user1'> Salut ! Comment t'appelles-tu ?</label>
			<input type='text' id="user1" value={user1} ></input>
			<input id='prenom' type='text' value={prenom} onChange={savePrenom}>
			</input>
			{/* </form> */}
			</>
		)
		}

		function afficheFormulaire(user) {
			event=>{setUser1(event.target.value) ;
				let nextUser=event.target.value ;
			
			return (
				<Formulaire user={user1}/>
			)
		}}

		function Formulaire ({user}) {
		return (
		<>
		<form onSubmit={setPlayer(user2)}>
			<label htmlFor='number' >{questionNombre} </label>
			<input type="number" id="number" value={number} onChange={event=>setNumber(event.target.value)} ></input>
		</form>
		</>
		)}
	
	return (
		<Identification/>
	)



}

export default App


// A REALISER :selon le user afficher le composant formulaire avec l apropriété user1 ou user2 ( prompter pour le user 2)
//   // player==user1 :
  
  // return (<Formulaire user={user1} questionNombre={questionNombre} /> )?
  
  // let user2=prompt("user2?") ; return <Formulaire user={user2}questionNombre={questionNombre} />
  // )

 // return (<Formulaire user={user1} questionNombre={questionNombre} /> )