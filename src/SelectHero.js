import React from 'react';

class SelectHero extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectedValue: '',
    };
  }

  /**
   * Handle <select> onChange event and call <HeroForm /> component's action.
   */
  handleChange(e) {
    const self = this;
    this.setState({
      selectedValue: e.target.value,
    },
      () => self.props.selectedValue(this.state.selectedValue)
    );
  }

  render() {
    /* get array of non-displayed heroes */
    const nonDisplayedHeroes = this.props.nonDisplayedHeroes;

    return (
      <select
        value={this.state.selectedValue}
        onChange={this.handleChange}
        className="hero-select">
        {
          nonDisplayedHeroes.map(hero =>
            <option key={hero.id} value={hero.id}>{hero.name}</option>
          )
        }
      </select>
    );
  }
}

SelectHero.propTypes = {
  nonDisplayedHeroes: React.PropTypes.array,
};

export default SelectHero;
