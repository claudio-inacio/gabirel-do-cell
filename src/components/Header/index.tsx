import { useState, useEffect } from "react";
import "./styles.scss";
import logo from "../../Imgs/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "SOBRE A LOJA", href: "#" },
    { label: "IPHONE", href: "#iphone_info" },
    { label: "APPLE WATCH", href: "#appleWatch_info" },
    { label: "PRODUTOS", href: "#my_products" },
    { label: "CONTATO", href: "#contact_me" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">

        <img src={logo} alt="Logo" className="logo" />

        <ul className="menu-desktop">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <button className="mobile-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (

            <svg width="26" height="26" viewBox="0 0 24 24">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      <div className={`menu-mobile ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
