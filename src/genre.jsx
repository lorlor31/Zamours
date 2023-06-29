import { useState } from 'react'
import styles from './style.module.css'
import {Bonjour} from "./bonjour"

export function Genre ({genre,setGenre,showStatus,setShowStatus}) {

    const [isMale,setIsMale]=useState("")
    const nameMemo =  localStorage.getItem("name")
    function genreSelect(event) {
        let nextGenre=event.target.value
        setGenre(nextGenre) ;
        console.log(nextGenre)
        let nextShowStatus={...showStatus}
        nextGenre==="femme" ? nextShowStatus.formFShowStatus=true : nextShowStatus.formFShowStatus=false 
        nextGenre==="homme" ? nextShowStatus.formMShowStatus=true : nextShowStatus.formMShowStatus=false 
        if (nextShowStatus.formFShowStatus==true || nextShowStatus.formMShowStatus==true ) {
           nextShowStatus.genreShowStatus=false ; nextShowStatus.bonjourShowStatus=false  
            }
        else {
            nextShowStatus.genreShowStatus=true ; nextShowStatus.bonjourShowStatus=true  
        }
        setShowStatus(nextShowStatus)
    }

    function handleSubmit(event) {
        event.preventDefault() ;
        genreSelect(event)
    }

    return (
        showStatus.genreShowStatus==false ? null :  
        <>

        <form onSubmit={handleSubmit}> 
        <Bonjour nameMemo={nameMemo} showStatus={showStatus} setShowStatus={setShowStatus}  />
            Pour commencer, pourrais-tu me préciser si tu es :
        <label htmlFor="femme"> Une femme </label>    
        <input type="radio" name="genre" id="femme" value="femme" checked={genre==="femme"} onChange={genreSelect}/>
        <label htmlFor="homme"> Un homme </label>    
        <input type="radio" name="genre" id="homme" value="homme"checked={genre==="homme"}  onChange={genreSelect}/>
        </form>
        </>
    )

}