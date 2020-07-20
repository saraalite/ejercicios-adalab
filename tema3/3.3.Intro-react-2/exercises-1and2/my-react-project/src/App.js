
import React from 'react';
import MediaCard from './MediaCard.js';
import profile from "./profile.jpg";
import profile2 from "./profile2.jpg";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard img={profile} name="Juan" date="Sábado 18 de Julio de 2020" text="Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
            onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo
            beet greens corn soko endive gumbo gourd. Parsley shallot courgette
            tatsoi pea sprouts fava bean collard greens dandelion okra wakame
            tomato. Dandelion cucumber earthnut pea peanut soko zucchini. Turnip
            greens yarrow ricebean rutabaga endive cauliflower sea lettuce
            kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
            winter purslane kale. Celery potato scallion desert raisin horseradish
            spinach carrot soko. Lotus root water spinach fennel kombu maize
            bamboo shoot green bean swiss chard seakale pumpkin onion chickpea
            gram corn pea. Brussels sprout coriander water chestnut gourd swiss
            chard wakame kohlrabi beetroot carrot watercress. Corn amaranth
            salsify bunya nuts nori azuki bean chickweed potato bell pepper
            artichoke." likes="37"/>
        <MediaCard img={profile2} name="Perico" date="Sábado 25 de Julio de 2020" text="Lorem ipsum lololol" likes="12K"/>
      </div>
    );
  }
}

export default App;
