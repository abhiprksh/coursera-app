import Logo from './Logo.svg';

const Header = () => {
  return (
    <header>
      <img className="header-logo" src={Logo} alt="Little lemon logo" />
    </header>
  );
}

export default Header;