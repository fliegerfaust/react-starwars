import React from 'react';
import SelectHero from './SelectHero';

class HeroForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.getSelectValue = this.getSelectValue.bind(this);

    this.state = {
      heroIdToAdd: '',
    };
  }

  /**
   * Get data from <SelectHero /> component.
   */
  getSelectValue(value) {
    this.setState({
      heroIdToAdd: value,
    });
  }

  /**
   * Handle button onClick event and call <HeroesList /> component's action.
   */
  handleClick(e) {
    e.preventDefault();

    this.props.onClick(this.state.heroIdToAdd);
  }

  render() {
    const nonDisplayedHeroes = this.props.displayedHeroes.filter(hero =>
      !hero.isDisplayed
    );

    return (
      <form className="add-hero">
        <SelectHero
          nonDisplayedHeroes={nonDisplayedHeroes}
          selectedValue={this.getSelectValue} />
        <button className="hero-add-btn" onClick={this.handleClick}>
          Add Hero
        </button>
      </form>
    );
  }
}

HeroForm.propTypes = {
  onClick: React.PropTypes.func,
  displayedHeroes: React.PropTypes.array,
};

export default HeroForm;
