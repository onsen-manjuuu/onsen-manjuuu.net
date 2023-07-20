import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout';
import styles from '../styles/bloglist.module.css'


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
            {title}
            <br />
            <div className = {styles.contentsAdditional}>
                {id}
                <br />
                {date}
            </div>
                </li>
        ))}
        </ul>
    </Layout>
    )
}