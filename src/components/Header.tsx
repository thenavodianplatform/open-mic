import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold">Navodian Platform</h2>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/admin" className="text-blue-500 hover:underline">
                Admin Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
