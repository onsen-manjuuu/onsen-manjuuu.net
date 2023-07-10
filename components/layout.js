import styles from './layout.module.css'
import Link from 'next/link'
import Head from 'next/head'


export default function Layout({children}) {
    return (
    <div className={styles.container}>
        
        <div className={styles.header}>
            <Link href="/" class = "header">onsen-manjuuu.net</Link>
        </div>
        {children}
    </div>
    )
}

