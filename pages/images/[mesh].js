import Layout from '../../components/layout';
import { getImageNameIds, getImages } from '../../lib/imageName';
import Image from 'next/image';
import styles from '../../styles/images.module.css'
import { useState } from 'react';

export async function getStaticPaths() {
    const paths = getImageNameIds();
    const ret =  {
        paths,
        fallback: false,
    };
    return ret;
}

export async function getStaticProps({params}) {
    const ImageNames = getImages(params.mesh);
    return {
        props : {
            ImageNames
        }
    };
}

export default function Imag({ImageNames}) {
    const [hover, setHover] = useState(false);
    // console.log(ImageNames)
    return (<Layout>
        <div 
            style={{position:'relative', width:'100%', height:800}}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover ? (
                <Image src={ImageNames[0]} layout="fill" objectFit='contain'></Image>
            ) : (
                <Image src={ImageNames[1]} layout="fill" objectFit='contain'></Image>
            )}
            
        </div>
    </Layout>)
}