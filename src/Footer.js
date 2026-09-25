import FooterLogo from './FooterLogo.png';

const Footer = () => {
  return (
    <footer>
      <img className="footer-logo" src={FooterLogo} alt="Little Lemon logo" />
      <p>&copy; 2026 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;