import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout';
import styles from '../styles/bloglist.module.css'
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props : {
            allPostsData,
        }
    };
}


export default function blogList({allPostsData}) {
    return (
    <Layout>
        <h1>blog</h1>
        <ul className={styles.contentsList}>
        {allPostsData.map(({id, date, title}) => (
            <li className = {styles.contentsList} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <div className = {styles.contentsAdditional}>
                <small>
                {id}
                <br />
                    <Date dateString={date} />
                </small>
            </div>
                </li>
        ))}
        </ul>
    </Layout>
    )
}