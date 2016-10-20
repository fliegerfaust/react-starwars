import React from 'react';

/* components */
import HeroCard from './HeroCard';
import SearchBar from './SerachBar';
import HeroForm from './HeroForm';

/* constants */
import HEROES from './Data';

/* styles */
import './App.css';

class HeroesList extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddHeroClick = this.handleAddHeroClick.bind(this);

    this.state = {
      displayedHeroes: HEROES.filter(hero => hero.isDisplayed),
      nonDisplayedHeroes: HEROES.filter(hero => !hero.isDisplayed),
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
    /* get full info of current hero by id */
    const heroToDisplay = this.state.nonDisplayedHeroes.filter(hero => (
      parseInt(hero.id, 10) === parseInt(id, 10)
    ));

    /* push current hero to displayedHeroes[] array */
    const displayedHeroes = this.state.displayedHeroes;
    displayedHeroes.push(heroToDisplay[0]);

    /* remove current hero from nonDisplayedHeroes[] array */
    const nonDisplayedHeroes = this.state.nonDisplayedHeroes;
    const index = nonDisplayedHeroes.indexOf(heroToDisplay[0]);
    nonDisplayedHeroes.splice(index, 1);

    this.setState({
      displayedHeroes,
      nonDisplayedHeroes,
    });
  }

  render() {
    const heroCards = this.state.displayedHeroes.map(hero => (
      <HeroCard
        key={hero.id}
        name={hero.name}
        firstAppearance={hero.firstAppearance}
        image={hero.image}
        side={hero.side} />
    ));

    return (
      <div>
        <SearchBar
          onSearch={this.handleSearch} />
        <div className="heroes-list">
          {heroCards}
        </div>
        <HeroForm
          onClick={this.handleAddHeroClick}
          nonDisplayedHeroes={this.state.nonDisplayedHeroes} />
      </div>
    );
  }
}

export default HeroesList;
