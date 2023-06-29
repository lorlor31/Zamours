
import { useState } from 'react'
import styles from './style.module.css'
import {Identification} from"./identification"


export function Bonjour ({nameMemo, showStatus,setShowStatus}) {
    return (
        showStatus.bonjourShowStatus==false ? null :  
        <>
        
                <p className={styles.bonjour}> Bonjour <span>{nameMemo} </span> !</p>
                <br/>
           
        
        
        </>
    )
}