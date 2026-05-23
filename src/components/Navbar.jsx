function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">KYZ Threads</h1>

      <ul className="hidden md:flex gap-6">
        <li className="cursor-pointer hover:text-gray-400">Home</li>
        <li className="cursor-pointer hover:text-gray-400">Shop</li>
        <li className="cursor-pointer hover:text-gray-400">Collections</li>
        <li className="cursor-pointer hover:text-gray-400">About</li>
        <li className="cursor-pointer hover:text-gray-400">Contact</li>
      </ul>

      <button className="bg-white text-black px-4 py-2 rounded-lg">
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;