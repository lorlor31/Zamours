import { useState } from 'react'
import styles from './style.module.css'



export function Identification( {name,setName,showStatus,setShowStatus}) {

    function saveName (event) {
    let nextName=event.target.value
    setName(nextName)
    localStorage.setItem("name",nextName)
    }

    function handleSubmit  (event) {
        event.preventDefault()
        //peut on faire une copie d 'un obj avec rest/spread ?=>oui mais utilise les accolades
        let nextShowStatus={...showStatus}
            nextShowStatus.bonjourShowStatus=true
            nextShowStatus.genreShowStatus=true
            nextShowStatus.identificationShowStatus=false
            setShowStatus(nextShowStatus)
    }

    return (   
        showStatus.identificationShowStatus==false ? null : 
        <div className={styles.identification}>
        <form onSubmit={(event)=>handleSubmit(event)}> 
        
            <label htmlFor='name'> 
                <p> Bonjour !</p> 
                <p>Entrez votre prénom ci-dessous !</p> 
            </label> 
            <input type="text" id="name" value={name} onChange={saveName}/>
        
        </form>
        
        </div>
    )
	}		
