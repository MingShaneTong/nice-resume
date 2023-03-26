import $ from "jquery";
import { scrollTo } from "../../func";

export function Navigation({ active }) {
  const onToggleNav = function() {
    $("#nav-wrap > ul#nav").toggleClass("hideNav");
  }

  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" title="Show navigation" onClick={onToggleNav}>
        Toggle navigation
      </a>

      <ul id="nav" className="nav hideNav">
        <li className={ active == "home" ? "current" : "" }>
          <a href="#/">
            Home
          </a>
        </li>
        <li className={ active == "projects" ? "current" : "" }>
          <a href="#/projects">
            Projects
          </a>
        </li>
        <li className={ active == "currentwork" ? "current" : "" }>
          <a href="#/currentwork">
            Current Work
          </a>
        </li>
        <li className={ active == "contactme" ? "current" : "" }>
          <a href="#/contactme">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  )
}

export function TopButton({ display }) {
  return (
    <p className="scrollup" id="scrollup-button" 
      style={{ display: display ? "block": "none"}}
    >
      <a className="smoothscroll" onClick={() => scrollTo("#home")}>
        <i className="icon-up-circle"></i>
      </a>
    </p>
  );
}