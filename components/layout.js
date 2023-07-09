import styles from './layout.module.css'
import Head from 'next/head'

export default function Layout({children}) {
    return (
    <div className={styles.container}>
        
        <div className={styles.header}>onsen-manjuuu.net</div>
        {children}
    </div>
    )
}

