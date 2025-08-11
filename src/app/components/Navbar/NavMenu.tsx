// components/NavMenu.tsx
import Link from 'next/link';

const NavMenu = () => {
    return (
        <div>
            <ul className="menu menu-horizontal px-1">
                {/* Home Link */}
                <li>
                    <Link href="/" className="text-yellow-500 font-bold hover:text-indigo-600 hover:font-bold">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/services" className="text-yellow-500 font-bold hover:text-indigo-600 hover:font-bold">
                        Services
                    </Link>
                </li>


                {/* Portfolio Dropdown */}
                <li>
                    <Link href="/portfolio" className="text-yellow-500 font-bold hover:text-indigo-600 hover:font-bold">
                        Portfolio
                    </Link>
                </li>

                {/* Blog Link */}
                <li>
                    <Link href="/blog" className="text-yellow-500 font-bold hover:text-indigo-600 hover:font-bold">
                        Blog
                    </Link>
                </li>
                {/* About Link */}
                <li>
                    <Link href="/about" className="text-yellow-500 font-bold hover:text-indigo-600 hover:font-bold">
                        About
                    </Link>
                </li>

                {/* Contact Link */}
                <li>
                    <Link href="/contact" className="text-yellow-500 font-bold hover:text-indigo-600 hover:font-bold">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/post" className="text-yellow-500 font-bold hover:text-indigo-600 hover:font-bold">
                        Post
                    </Link>
                </li>


            </ul>
        </div>
    );
};

export default NavMenu;