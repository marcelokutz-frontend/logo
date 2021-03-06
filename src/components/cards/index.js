import React from "react";
import Fade from 'react-reveal/Fade';

import './style.scss';


const Cards = (props) => (

    <Fade>
      <div name={props.name} className="card__item">
        <a href={props.buttonURL} className="card__btn" title="{props.title}">
          <div className="card__block">
            <div className="card__image" style={{ backgroundImage: `url(${props.imgBackground})` }}></div>
              <div className="card__wrap">
                <div className="card__content">
                <div className="card_header">
                  <p className="card__date">{props.date}</p>
                  <h2>{props.title}</h2>
                </div>
                <div className="card__text">
                  <p>{props.content}</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </Fade>
)

export default Cards;

