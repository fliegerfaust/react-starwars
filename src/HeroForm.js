import React from 'react';

/* components */
import SelectHero from './SelectHero';

class HeroForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleSelectedValue = this.handleSelectedValue.bind(this);
    this.calculateSelectDefaultValue = this.calculateSelectDefaultValue.bind(this);

    const defaultValue = this.calculateSelectDefaultValue();
    this.state = {
      heroIdToAdd: defaultValue,
    };
  }

  /**
   * Get data from <SelectHero /> component.
   */
  handleSelectedValue(value) {
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
    const newDefaultValue = this.calculateSelectDefaultValue();
    this.setState({
      heroIdToAdd: newDefaultValue,
    });
  }

  /**
   * Here calculate selected value for <SelectHero /> component.
   */
  calculateSelectDefaultValue() {
    return typeof this.props.nonDisplayedHeroes !== 'undefined' &&
      this.props.nonDisplayedHeroes.length > 0
      ? this.props.nonDisplayedHeroes[0].id
      : 0;
  }

  render() {
    return (
      <form className="add-hero">
        <SelectHero
          defaultValue={this.state.heroIdToAdd}
          nonDisplayedHeroes={this.props.nonDisplayedHeroes}
          selectedValue={this.handleSelectedValue} />
        <button className="hero-add-btn" onClick={this.handleClick}>
          Add Hero
        </button>
      </form>
    );
  }
}

HeroForm.propTypes = {
  onClick: React.PropTypes.func,
  nonDisplayedHeroes: React.PropTypes.array,
};

export default HeroForm;
