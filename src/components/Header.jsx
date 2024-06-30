import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto">
        <ul className="flex justify-around">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/products" className="hover:underline">Products</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
