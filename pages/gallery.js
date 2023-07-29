import Layout from "../components/layout";
import { getImageName } from "../lib/imageName";
import Link from 'next/link'


export async function getStaticProps() {
    const ImageNames = getImageName();
    return {
        props : {
            ImageNames,
        }
    };
}

export default function TopGallery({ImageNames}) {
    return (
        <Layout>

            {ImageNames.map(x=>
                    <li key={x}>
                        <Link href={`/images/${x}`}>{x}</Link>
                    </li>
                )
            }

        </Layout>
    )
}