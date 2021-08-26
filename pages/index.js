import Head from 'next/head';
import Image from 'next/image';
import NavLink from '../components/NavLink';
import Footer from '../components/Footer';
import { links } from '../globalvariables';


export default function Home() {
    return (
        <div className="bg-gray-100 text-center font-main">
            <Head>
                <title>My Links | Xavier K.</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="text-center">

                <Image src="/logo.png" alt="Xavier K. Logo" width={280}  height={280} className="md:w-[200%] md:h-[200%]"/>

                {/* header */}
                <p className="text-4xl md:text-5xl pb-4">Xavier K.</p>
                <p className="text-[28px] md:text-4xl pb-4">Get In Touch With Me</p>
                <br />

                {/* pill links */}
                <div>
                    {links.map(({ name, href }) => (
                        <NavLink href={href} name={name} key={name} />
                    ))}
                </div>

            </main>

            {/* footer */}
            <Footer />

        </div>
    );
}
