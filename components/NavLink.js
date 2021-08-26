import Link from 'next/link';

export default function NavLink({ href, name }) {
    return (
        <Link href={href}>
            <a target='_blank'>
                <div className='bg-[color:var(--myred)] rounded-3xl text-3xl py-2 text-gray-200 mb-8 w-[30%] m-auto'>
                    {name}
                </div>
            </a>
        </Link>
    );
}
