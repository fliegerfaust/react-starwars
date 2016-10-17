import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SelectHero from './SelectHero';

class HeroForm extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.getSelectValue = this.getSelectValue.bind(this);
  }

  // здесь обработка клика по кнопке и вызов метода компонента HeroesList
  handleClick(e) {
    e.preventDefault();

    this.props.onClick();
  }

  // здесь я могу получить данные из селекта
  getSelectValue(value) {
    
  }

  render() {
    let nonDisplayedHeroes = this.props.displayedHeroes.filter(hero => {
        return !hero.isDisplayed;
    });

    return (
      <form className="add-hero">
        <SelectHero
          nonDisplayedHeroes={nonDisplayedHeroes}
          selectedValue={this.getSelectValue}
        />
        <button className="hero-add-btn" onClick={this.handleClick}>
          Add Hero
        </button>
      </form>
    );
  }
}

export default HeroForm;
