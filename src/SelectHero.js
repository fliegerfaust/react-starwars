import React from 'react';

class SelectHero extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Handle <select> onChange event and call <HeroForm /> component's action.
   */
  handleChange(e) {
    this.props.selectedValue(e.target.value);
  }

  render() {
    return (
      <select
        value={this.props.defaultValue}
        onChange={this.handleChange}
        className="hero-select">
        {
          this.props.nonDisplayedHeroes.map(hero =>
            <option key={hero.id} value={hero.id}>{hero.name}</option>
          )
        }
      </select>
    );
  }
}

SelectHero.propTypes = {
  selectedValue: React.PropTypes.func,
  nonDisplayedHeroes: React.PropTypes.array,
};

export default SelectHero;
