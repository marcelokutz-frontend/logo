import React, { Component } from "react";
import Slider from "react-slick";

import './style.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide01 from '../../images/slider-1.jpg';
import slide02 from '../../images/slider-2.jpg';
import slide03 from '../../images/slider-3.jpg';
import slide04 from '../../images/slider-4.jpg';


class Slideshow extends Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div name="slider">
        <Slider {...settings} className="slideshow">
          <div>
            <div className="slideshow__item" style={{ backgroundImage: "url(" + slide01 + ")" }}>
              <div className="container">
                <div className="slideshow__description">
                  <h1 className="slideshow__title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h1>
                  <div className="slideshow__text">
                    <p>sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
                  </div>
                  <a href="#oi" title="CALL TO ACTION" className="btn-cta">CALL TO ACTION</a>
                </div>
              </div>
            </div>{/*slideshow__item*/}
          </div>

          <div>
            <div className="slideshow__item" style={{ backgroundImage: "url(" + slide02 + ")" }}>
              <div className="container">
                <div className="slideshow__description">
                  <h1 className="slideshow__title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h1>
                  <div className="slideshow__text">
                    <p>sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
                  </div>
                  <a href="/" title="CALL TO ACTION" className="btn-cta">CALL TO ACTION</a>
                </div>
              </div>
            </div>{/*slideshow__item*/}
          </div>

          <div>
            <div className="slideshow__item" style={{ backgroundImage: "url(" + slide03 + ")" }}>
              <div className="container">
                <div className="slideshow__description">
                  <h1 className="slideshow__title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h1>
                  <div className="slideshow__text">
                    <p>sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
                  </div>
                  <a href="/" title="CALL TO ACTION" className="btn-cta">CALL TO ACTION</a>
                </div>
              </div>
            </div>{/*slideshow__item*/}
          </div>

          <div>
            <div className="slideshow__item" style={{ backgroundImage: "url(" + slide04 + ")" }}>
              <div className="container">
                <div className="slideshow__description">
                  <h1 className="slideshow__title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h1>
                  <div className="slideshow__text">
                    <p>sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
                  </div>
                  <a href="/" title="CALL TO ACTION" className="btn-cta">CALL TO ACTION</a>
                </div>
              </div>
            </div>{/*slideshow__item*/}
          </div>
        </Slider>
      </div>
    )
  }
}
export default Slideshow;

