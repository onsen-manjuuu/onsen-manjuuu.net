import '../components/layout'
import Layout from '../components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image';

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
        <li><Link href="gallery">gallery</Link></li>
      </ul>
    </div>
  </Layout>
    
  )
}
