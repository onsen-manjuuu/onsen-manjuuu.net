import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head'
import Date from '../../components/date';
import styles from '../../styles/indivBlogs.module.css'
import Image from 'next/image';

export default function Post({postData}) {
    return (
    <Layout>
        <Head><title>{postData.title}</title></Head>
        <h1>{postData.title}</h1>
        <section className={styles.additionalData}>
            <Date dateString={postData.date} />//{postData.id}
        </section>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
    </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
