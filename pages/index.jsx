import Activities from '../components/Index/Activities.jsx';
import Hero from '../components/Index/Hero.jsx';
import Techs from '../components/Index/Techs.jsx';
import Main from '../components/Contact/Main.jsx';
import Main2 from '../components/Contact/Hero.jsx';
import Pro from '../components/Projects/Hero.jsx';
import Pro2 from '../components/Projects/Main.jsx';
import Repos from '../components/Index/Repos.jsx';
import Head from 'next/head';

export default function Index() {
    return (
        <>
            <Head>
                <title>Home | SyneS</title>
            </Head>
            <Hero />
            <Activities />
        </>
    );
};
