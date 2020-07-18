import React, { Component } from "react";
import profile from "./profile.jpg";
import "./App.scss";

class App extends Component {
  render() {
    const header = (
      <header className="card-header">
        <div className="image-container">
          <img src={profile} className="profile-pic" alt="profile pic" />
        </div>
        <section className="name-date">
          <span>Alex Guerrero</span>
          <span>Sábado 18 de Julio de 2020</span>
        </section>
      </header>
    );
    const paragraph = (
      <p>
      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
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
      artichoke.
    </p>
    );
    const footer = (
      <section className="footer">
      <span>Read more...</span>
      <span>37 ♥</span>

    </section>
    );

    const visitCard = (<body className="main-container">
    <div className="media-card">
      { header }
      { paragraph }
      { footer }
     
       
    </div>
    </body>);
    return visitCard;
  }
}

export default App;
