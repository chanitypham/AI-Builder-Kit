// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-80 shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between h-16 items-center">
        <Link href="/" className="text-2xl font-bold text_special mx-8 md:mx-16 lg:mx-28 xl:mx-40 2xl:mx-60">
          AI Hub Buildkit
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
