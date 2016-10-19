import React from 'react';

/* components */
import HeroCard from './HeroCard';
import SearchBar from './SerachBar';
import HeroForm from './HeroForm';

/* constants */
import { HEROES } from './Data';

/* styles */
import './App.css';

class HeroesList extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddHeroClick = this.handleAddHeroClick.bind(this);

    this.state = {
      displayedHeroes: HEROES,
    };
  }

  /**
   * Handle onSearch event for the Search Bar.
   */
  handleSearch(e) {
    const searchQuery = e.target.value.toLowerCase();

    const displayedHeroes = HEROES.filter(hero => {
      const searchString = hero.name.toLowerCase() + hero.firstAppearance.toLowerCase();

      return searchString.indexOf(searchQuery) !== -1;
    });

    this.setState({
      displayedHeroes,
    });
  }

  /**
   * Add new hero with given id to heroes list.
   */
  handleAddHeroClick(id) {
    const newHero = HEROES.filter(hero => {
      if (parseInt(hero.id, 10) === parseInt(id, 10)) {
        hero.isDisplayed = true;
      }
      return hero.isDisplayed;
    });

    const displayedHeroes = this.state.displayedHeroes;
    displayedHeroes.push(newHero[0]);

    this.setState({
      displayedHeroes,
    });
  }

  render() {
    /* Display heroes with property isDisplayed = true */
    const heroCards = this.state.displayedHeroes.map(hero => {
      if (!hero.isDisplayed) {
        return false;
      }
      return (
        <HeroCard
          key={hero.id}
          name={hero.name}
          firstAppearance={hero.firstAppearance}
          image={hero.image}
          side={hero.side} />
      );
    });

    return (
      <div>
        <SearchBar
          onSearch={this.handleSearch} />
        <div className="heroes-list">
          {heroCards}
        </div>
        <HeroForm
          onClick={this.handleAddHeroClick}
          displayedHeroes={this.state.displayedHeroes} />
      </div>
    );
  }
}

export default HeroesList;
