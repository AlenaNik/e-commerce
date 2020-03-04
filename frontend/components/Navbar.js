import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <Link href="/sell">
                <p>Go to sell</p>
            </Link>
            <Link href="/">
                <p>Go home</p>
            </Link>
        </div>

    )
}

export default Navbar
