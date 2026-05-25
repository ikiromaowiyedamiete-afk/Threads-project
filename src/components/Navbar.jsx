import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-bold cursor-pointer">
          KYZ Threads
        </h1>
      </Link>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-6">

        <li>
          <Link
            to="/"
            className="hover:text-gray-400 transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/shop"
            className="hover:text-gray-400 transition"
          >
            Shop
          </Link>
        </li>

        <li>
          <Link
            to="/collections"
            className="hover:text-gray-400 transition"
          >
            Collections
          </Link>
        </li>

        <li>
          <Link
            to="/measurements"
            className="hover:text-gray-400 transition"
          >
            Measurements
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="hover:text-gray-400 transition"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="hover:text-gray-400 transition"
          >
            Contact
          </Link>
        </li>

      </ul>

      {/* Sign In */}
      <Link to="/signin">
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          Sign In
        </button>
      </Link>

    </nav>
  );
}

export default Navbar;