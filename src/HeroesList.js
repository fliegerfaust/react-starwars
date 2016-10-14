import React, { Component } from 'react';
import HeroCard from './HeroCard';
import SearchBar from './SerachBar';
import HeroForm from './HeroForm';
import { HEROES } from './Data';
import './App.css';

class HeroesList extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddHeroClick = this.handleAddHeroClick.bind(this);

    this.state = {
      displayedHeroes: HEROES
    }
  }

  handleSearch(e) {
    const searchQuery = e.target.value.toLowerCase();

    const displayedHeroes = HEROES.filter(hero => {
      const searchString = hero.name.toLowerCase() + hero.first_appearance.toLowerCase();

      return searchString.indexOf(searchQuery) !== -1;
    });

    this.setState({
      displayedHeroes
    });
  }

  handleAddHeroClick(recieveData) {
    recieveData.forEach( (el) => {
      console.log(el);
    });
  }

  render() {
    const heroCards = this.state.displayedHeroes.map(hero =>
      <HeroCard
        key={hero.id}
        name={hero.name}
        first_appearance={hero.first_appearance}
        image={hero.image}
        side={hero.side}
      />
    );
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <div className="heroes-list">
            {heroCards}
        </div>
        <HeroForm onClick={this.handleAddHeroClick} displayedHeroes={this.state.displayedHeroes} />
      </div>
    );
  }
}

export default HeroesList;
