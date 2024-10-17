import { Link } from "react-router-dom";

function NavBar() {
  
  return (
    <nav className="flex justify-between items-center p-6 h-[12vh] bg-gray-200 shadow-md rounded-md">
      <div className="flex justify-start gap-4">
        {/* Logo Image */}
        <img
          src="diet.png"
          alt="Logo"
          className="w-10 h-10 transform hover:scale-105 transition duration-300"
        />
        
        {/* Toppings Title with Gradient */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-transparent select-auto transform hover:scale-105 transition duration-300">
         <Link to="/">
          Toppings
         </Link> 
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        <Link
          to="/Home"
          className="transform hover:scale-105 transition duration-300 hover:text-gray-500"
        >
          Home
        </Link>
        <Link
          to="/Search"
          className="transform hover:scale-105 transition duration-300 hover:text-gray-500"
        >
          Search
        </Link>
        <Link
          to="/Contact"
          className="transform hover:scale-105 transition duration-300 hover:text-gray-500"
        >
          Contact
        </Link>
        <Link
          to="/CommunityPost"
          className="transform hover:scale-105 transition duration-300 hover:text-gray-500"
        >
          Discuss
        </Link>
        <Link
          to="/CartIndex"
          className="transform hover:scale-105 transition duration-300 hover:text-gray-500"
        >
          Cart
        </Link>
        <Link
          to="/login"
          className="transform hover:scale-105 transition duration-300 hover:text-gray-500"
        >
          Login
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;