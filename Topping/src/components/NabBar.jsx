import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 shadow-md p-6 h-[12vh] md:h-[10vh] flex justify-between items-center sticky top-0 z-50">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <img
          src="diet.png"
          alt="Logo"
          className="w-10 h-10 transform hover:scale-105 transition duration-300"
        />
        <Link to="/">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-transparent transform hover:scale-105 transition duration-300">
            Toppings
          </div>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700">
        {[
          { to: "/Home", label: "Home" },
          { to: "/Search", label: "Search" },
          { to: "/Contact", label: "Contact" },
          { to: "/CommunityPost", label: "Discuss" },
          { to: "/CartIndex", label: "Cart" },
          { to: "/login", label: "Login" },
        ].map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-sm font-medium transform hover:scale-105 transition duration-300 hover:text-blue-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden absolute top-[12vh] left-0 w-full bg-gray-200 shadow-md flex-col items-center gap-4 py-6 transition-all duration-300`}
      >
        {[
          { to: "/Home", label: "Home" },
          { to: "/Search", label: "Search" },
          { to: "/Contact", label: "Contact" },
          { to: "/CommunityPost", label: "Discuss" },
          { to: "/CartIndex", label: "Cart" },
          { to: "/login", label: "Login" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu} // Close menu on link click
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
