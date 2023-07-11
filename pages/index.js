import '../components/layout'
import Layout from '../components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home(){
  return (
  <Layout>
    <Head>
      <title>onsen-manjuu.net</title>
    </Head>
    <div className={styles.contentsList}>
      <ul>
        <li><Link href="blog">blog</Link></li>
        <li><Link href="library">library</Link></li>
        <li>gallery</li>
      </ul>
    </div>
  </Layout>
    
  )
}
