import Layout from '../components/layout'
import Head from 'next/head'

export default function blogList() {
    return (
        <Layout>
            <Head>
                <title>Library</title>          
            </Head>
            <h1>Library</h1>
                &nbsp;<Mozi />
            <br></br><br></br>
        </Layout>
    );
}

function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  

function Mozi() {
    const N = 2000;
    let S = "    ";
    let T = "abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ ";
    // var S = Array(N);
    // S.fill('1')
    // console.log(S);
    S+= T[rnd(26,51)];
    for(let i = 1; i < N; i++) {
        let c = rnd(0,4);
        if(c%6==0)S+=  " ";
        if(S[i-1]==' '&&rnd()%10==0)S += T[rnd(26,51)];
        else S += T[rnd(0,25)];
    }
    // console.log(S);
    S+='.'

    return (<p suppressHydrationWarning={true}>{S}</p>);
    // return <p>yay</p>

}