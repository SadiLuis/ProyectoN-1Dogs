import React from 'react'
import loading from '../img/pensando.gif'
import styles from './styless/Loading.module.css'

export default function Loading() {
    return (
        <div className={styles.bkg}>
            <img src={loading} alt="loading gif" className={styles.loadingif}/>
            <div className={styles.loading}><h2>Dogs loading ! ..</h2></div>
        </div>
    )
}
