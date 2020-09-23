import React from "react";

import SlideShow from "../../components/slideshow";
import Cards from "../../components/cards";
import CardsColor from "../../components/cards-color";

// Images static
import Cards01 from '../../images/news-1.jpg';
import Cards02 from '../../images/news-2.jpg';
import Cards03 from '../../images/news-3.jpg';

import CardsColor01 from '../../images/sveglia.svg';
import CardsColor02 from '../../images/target.svg';
import CardsColor03 from '../../images/razzo.svg';

const news = [
  {id: 1, title: 'Lorem ipsum dolor sit amet, consectetuer', date: '13.09.2020', url: '#', image: Cards01, content: 'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {id: 2, title: 'No nummy nibh: euismod tin', date: '12.09.2020', url: '#', image: Cards02, content: 'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {id: 3, title: 'Lorem ipsum dolor sit amet, consectetuer', url: '#', image: Cards03, date: '11.09.2020', content: 'Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
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
    <div className="cards-list">
      {tabs.map((tab) =>
        <CardsColor key={tab.id} layoutColor={tab.layoutColor} title={tab.title} content={tab.content} buttonName={tab.buttonName} buttonURL={tab.url} imgBackground={tab.image}></CardsColor>
      )}
    </div>
  </div>
);

export default HomePage;

                                                        