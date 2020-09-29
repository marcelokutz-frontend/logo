import React from "react";
import Reveal from 'react-reveal/Reveal';

import './style.scss';


const CardsColor = (props) => (

    <div name={props.name} className={`cards-color__item cards-color__item--${props.layoutColor}`}>
      <div className="cards-color__block">
        <Reveal effect="show-elements">
          <div className="cards-color__content">
            <h2>{props.title}</h2>
            <div className="cards-color__image">  
              <img src={props.imgBackground} alt={props.title} />
            </div>
            <div className="cards-color__text">  
              <p>{props.content}</p>
            </div>
            <a href={props.buttonURL} className="btn-cta" title={props.buttonName}>{props.buttonName}</a>
          </div>
        </Reveal>
      </div>
    </div>
)

export default CardsColor;

