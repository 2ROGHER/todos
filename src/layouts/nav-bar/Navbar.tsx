/**
 * This component is responsible for rendering the navigation bar section.
 */
import React, { JSX } from "react";
import { Logo } from "../../components/ui/logo/Logo";
import "./Navbar.scss";
/**
 * This function is responsible to render the navigation bar JSX component.
 * In this project, we are going tu use the BEM styling notations to add styles to elements, cause
 * this pattern is more simple than others.
 * We are using also the OCSS styling pattern to add class names to elements in this project.
 * @returns { JSX.Element } - This function returns a JSX element.
 */

export const NavBar = (): JSX.Element => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__logo">
        <Logo />
      </div>
      <ul className="nav-bar-menu__list">
        <li className="nav-bar-menu__item">
            <a className="nav-bar-menu__link" href="#">favorites</a>
        </li>
        <li className="nav-bar-menu__item">saved</li>
        <li className="nav-bar-menu__item">pined</li>
        <li className="nav-bar-menu__item">deleted</li>
      </ul>
    </nav>
  );
};
