import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SelectHero from './SelectHero';

class HeroForm extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    let formData = [];
    formData.push(ReactDOM.findDOMNode(this.refs.name).value);
    formData.push(ReactDOM.findDOMNode(this.refs.episode).value);
    formData.push(ReactDOM.findDOMNode(this.refs.side).value);
    formData.push(ReactDOM.findDOMNode(this.refs.image).value);

    this.props.onClick(formData);
  }

  render() {
    return (
      <form className="add-hero">
        <input
          className="hero-input"
          type="text"
          placeholder="Enter hero name"
          ref="name"
        />
        <input
          className="hero-input"
          type="text"
          placeholder="Enter episode"
          ref="episode"
        />
        <input
          className="hero-input"
          type="text"
          placeholder="Enter hero side"
          ref="side"
        />
        <SelectHero
          displayedHeroes={this.props.displayedHeroes}
          name="hero-select"
        />
        <button className="hero-add-btn" onClick={this.handleClick}>
          Add Hero
        </button>
      </form>
    );
  }
}

export default HeroForm;
