import React, { Component } from 'react';
import classNames from 'classnames';
import './App.css';

class HeroCard extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    first_appearance: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    side: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    }

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);

  }

  mouseOver() {
    this.setState({isActive: true});
  }

  mouseOut() {
    this.setState({isActive: false});
  }

  render() {
    const {
      id,
      name,
      first_appearance,
      image,
      side
    } = this.props;

    let imgClass = classNames({
      'hero-img': true,
      'active': this.state.isActive ? true : false
    });

    let spanClass = classNames({
      'hero-side': true,
      'active': this.state.isActive ? true : false
    });

    return (
      <div className="hero-card">
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <img className={imgClass} src={image} role="presentation"/>
        <span className={spanClass}>{side}</span>
      </div>
        <div>
          <h3>{name}</h3>
          <p>First appearance: {first_appearance}</p>
        </div>
      </div>
    );
  }
}

export default HeroCard;
