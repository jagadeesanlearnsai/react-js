import {About_us} from "./About-us"
export const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="https://ih1.redbubble.net/image.5405272930.7178/st,extra_large,507x507-pad,600x600,f8f8f8.u2.webp" alt="Mohanapriya Jagadeesan"/>

      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
