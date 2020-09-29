import React from "react";
import Fade from 'react-reveal/Fade';

import SlideShow from "../../components/slideshow";
import Cards from "../../components/cards";
import Timeline from "../../components/timeline";
import CardsColor from "../../components/cards-color";


// Images static
import Cards01 from '../../images/news-1.jpg';
import Cards02 from '../../images/news-2.jpg';
import Cards03 from '../../images/news-3.jpg';

import Onda1 from '../../images/onda-bianco-grigio.svg';
import Onda2 from '../../images/onda-grigio-bianco.svg';

import Icon01 from '../../images/icon-1.svg';
import Icon02 from '../../images/icon-2.svg';
import Icon03 from '../../images/icon-3.svg';
import Icon04 from '../../images/icon-4.svg';
import Icon05 from '../../images/icon-5.svg';
import Icon06 from '../../images/icon-6.svg';


import CardsColor01 from '../../images/sveglia.svg';
import CardsColor02 from '../../images/target.svg';
import CardsColor03 from '../../images/razzo.svg';

const news = [
  {id: 1, title: 'Lorem ipsum dolor sit amet, consectetuer', date: '13.09.2020', url: '#', image: Cards01, content: 'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {id: 2, title: 'No nummy nibh: euismod tin', date: '12.09.2020', url: '#', image: Cards02, content: 'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {id: 3, title: 'Lorem ipsum dolor sit amet, consectetuer', url: '#', image: Cards03, date: '11.09.2020', content: 'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
];

const timeline = [
  {id: 1, number: 1, title: 'Lorem Ipsum', layoutColor: 'color-01', icon: Icon01, content: '<p>Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci tati on ullamcorper. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p>'},
  {id: 2, number: 2, title: 'Lorem Ipsum', layoutColor: 'color-02', icon: Icon02, content: '<p>Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci tati on ullamcorper. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p>'},
  {id: 3, number: 3, title: 'Lorem Ipsum', layoutColor: 'color-03', icon: Icon03, content: '<p>Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci tati on ullamcorper. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p>'},
  {id: 4, number: 4, title: 'Lorem Ipsum', layoutColor: 'color-01', icon: Icon04, content: '<p>Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci tati on ullamcorper. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p>'},
  {id: 5, number: 5, title: 'Lorem Ipsum', layoutColor: 'color-02', icon: Icon05, content: '<p>Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci tati on ullamcorper. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p>'},
  {id: 6, number: 6, title: 'Lorem Ipsum', layoutColor: 'color-03', icon: Icon06, content: '<p>Lorem quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud ex erci tati on ullamcorper. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun.</p>'},
];

const tabs = [
  {id: 1, title: 'TAB ROSA', layoutColor: 'cards-color-01', url: '#', buttonName: 'CALL TO ACTION', image: CardsColor01, content: 'Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.'},
  {id: 2, title: 'TAB GIALLA', layoutColor: 'cards-color-02', url: '#', buttonName: 'CALL TO ACTION', image: CardsColor02, content: 'Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.'},
  {id: 3, title: 'TAB TURCHESE', layoutColor: 'cards-color-03', url: '#', buttonName: 'CALL TO ACTION', image: CardsColor03, content: 'Enim ad minim veniam, quis nostrud exerci tation ullamcorper. erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci magna aliquam era.'},
]

const HomePage = () => (
  <div>
    <SlideShow></SlideShow>
    <div className="cards">
    	<div name="news" className="container">
        {news.map((item) =>
          <Cards key={item.id} title={item.title} date={item.date} content={item.content} buttonURL={item.url} imgBackground={item.image} />
        )}
    	</div>
    </div>

    <section name="percorso" className="timeline">
        <div className="container">
            <Fade>
                <header className="site-title">
                    <h1>Sed diam nonummy nibh<br/> euismod tincidunt?</h1>
                </header>
            </Fade>
            <div className="timeline__list">
              {timeline.map((item) =>
                <Timeline key={item.id} number={item.number} title={item.title} icon={item.icon} layoutColor={item.layoutColor} content={item.content}></Timeline>
              )}
            </div>
        </div>
        <span className="onda-1">
          <img src={Onda1} alt="Logotel" />
        </span>
    </section>

    <section name="tab" className="cards-list">
    	<div className="container">
          <Fade>
            <header className="site-title">
                <h1>Lorem ipsum dolor sit amet consectetuer?</h1>
            </header>
        </Fade>
        {tabs.map((tab) =>
          <CardsColor key={tab.id} layoutColor={tab.layoutColor} title={tab.title} content={tab.content} buttonName={tab.buttonName} buttonURL={tab.url} imgBackground={tab.image}></CardsColor>
        )}
      </div>
      <span className="onda">
        <img src={Onda2} alt="Logotel" />
      </span>
    </section>
  </div>
);

export default HomePage;

                                                        