import React, { Component } from "react";
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';

import './style.scss';
import logo from '../../images/logo.svg';

class Header extends Component {

  constructor(props) {
     super(props);
     this.state = {
       openMenu: false
     }
    this.openMenuComponent = this.openMenuComponent.bind(this);
  }

  openMenuComponent() {
    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  componentDidMount() {
    window.onscroll = function() {
      if(window.pageYOffset > 0) {
        const element = document.getElementById("masthead");
        element.classList.add("site-header--scroll");
      } else {
        const element = document.getElementById("masthead");
        element.classList.remove("site-header--scroll");
      }
    }
  }
  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <header id="masthead" className="site-header">
        <Fade down>
          <div className={ this.state.openMenu ? "container site-header__menu-open" : "container" }>
            <div className="site-header__brand">
              <Link to="slideshow" title="Logotel" smooth={true} offset={0} duration={500}>
                  <img src={logo} alt="Logotel" />
              </Link>
            </div>

            <button className={ this.state.openMenu ? "site-header__menu-toggle open" : "site-header__menu-toggle" } onClick={() => this.openMenuComponent()}>
                <span className="menu-toggle__hamb-bar"></span>
                <span className="menu-toggle__hamb-bar"></span>
                <span className="menu-toggle__hamb-bar"></span>
            </button>

            <div className="site-header__wrapper">
                <nav className="site-header__navigation">
                  <ul className="nav site-header__navigation__menu">
                    <li><Link activeClass="active" to="slider" spy={true} smooth={true} offset={-50} duration={500} title="SLIDER">SLIDER</Link></li>
                    <li><Link activeClass="active" to="news" spy={true} smooth={true} offset={-100} duration={500} title="NEWS">NEWS</Link></li>
                    <li><Link activeClass="active" to="percorso" spy={true} smooth={true} offset={-50} duration={500} title="PERCORSO">PERCORSO</Link></li>
                    <li><Link activeClass="active" to="tab" spy={true} smooth={true} offset={-50} duration={500} title="TAB">TAB</Link></li>
                  </ul>
                </nav>
            </div>
          </div>
        </Fade>
      </header>
      )
  }
}

export default Header;

                                                        