import React from 'react';
import classNames from 'classnames';
import './App.css';

class HeroCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({ isActive: true });
  }

  mouseOut() {
    this.setState({ isActive: false });
  }

  render() {
    const {
      name,
      firstAppearance,
      image,
      side,
    } = this.props;

    const imgClass = classNames({
      'hero-img': true,
      active: this.state.isActive ? true : false,
    });

    const spanClass = classNames({
      'hero-side': true,
      active: this.state.isActive ? true : false,
    });

    return (
      <div className="hero-card">
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <img className={imgClass} src={image} role="presentation" />
          <span className={spanClass}>{side}</span>
        </div>
        <div>
          <h3>{name}</h3>
          <p>First appearance: {firstAppearance}</p>
        </div>
      </div>
    );
  }
}

HeroCard.propTypes = {
  name: React.PropTypes.string.isRequired,
  firstAppearance: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  side: React.PropTypes.string.isRequired,
};

export default HeroCard;
