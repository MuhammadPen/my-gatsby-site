import * as React from "react";
import { Link } from "gatsby";
import {
  layout_css_class,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "../components/Layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={layout_css_class}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
