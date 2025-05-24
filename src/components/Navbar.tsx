import { UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">LegalEstate AI</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Navbar; 