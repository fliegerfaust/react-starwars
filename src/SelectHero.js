import React, {Component} from 'react';

class SelectHero extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectedValue: ''
    }
  }

  // здесь обработка onChange и вызов метода компонента HeroForm
  handleChange(e) {
    var self = this;
    this.setState({
        selectedValue: e.target.value
      },
      () => self.props.selectedValue(this.state.selectedValue)
    );
  }

  render() {
    // получили невыведенных героев
    let nonDisplayedHeroes = this.props.nonDisplayedHeroes;

    return(
      <select
        value={this.state.selectedValue}
        onChange={this.handleChange}
        className="hero-select">
        {
          nonDisplayedHeroes.map((hero) => {
            return <option key={hero.id} value={hero.id}>{hero.name}</option>;
          })
        }
      </select>
    )
  }
}

export default SelectHero;
