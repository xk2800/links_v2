import Link from 'next/link';

export default function NavLink({ href, name }) {
    return (
        <Link href={href}>
            <a target='_blank'>
                <div className='bg-[color:var(--myred)] rounded-3xl text-2xl mb-5 w-[95%] m-auto py-2 text-gray-200
                md:text-3xl md:mb-8 lg:w-[30%]
                hover:bg-[color:var(--mydarkred)] hover:text-gray-300
                '>
                    {name}
                </div>
            </a>
        </Link>
    );
}
