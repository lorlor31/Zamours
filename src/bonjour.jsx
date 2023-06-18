
import { useState } from 'react'
import styles from './style.module.css'
import {Identification} from"./identification"


export function Bonjour ({nameMemo, showStatus,setShowStatus}) {
    return (
        showStatus.bonjourShowStatus==false ? null :  
        <>
        <div className={styles.bonjour}>
            <p> 
                <span> Bonjour {nameMemo} !</span>
            </p>    
        </div>
        
        </>
    )
}