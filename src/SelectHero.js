import React, {Component} from 'react';

class SelectHero extends Component {
  constructor(props) {
    super(props);

    let allImgs = [
      '/heroes/boba.png',
      '/heroes/c3po.png',
      '/heroes/chewbakka.png',
      '/heroes/leya.png',
      '/heroes/luke.png',
      '/heroes/palpatine.png',
      '/heroes/r2d2.png',
      '/heroes/solo.png',
      '/heroes/stormtrooper.png',
      '/heroes/vader.png',
      '/heroes/yoda.png',
    ];

    // получили текущих героев
    let displayedHeroes = this.props.displayedHeroes;
    // получили текущие изображения героев
    let displayedImgs = displayedHeroes.map(hero => {
      return hero.image
    });

    // получили доступные изображения героев, которые ещё не использованы
    let availableImages = allImgs.filter(image => {
      return displayedImgs.indexOf(image) === -1;
    });

    // в качестве начального состояния указали не использованные изображения
    this.state = {
      availableImages
    }
  }

  render() {
    return(
      <select className={this.props.name} ref="image">
        {
          this.state.availableImages.map( (image) => {
            return <option value={image}>{image}</option>;
          })
        }
      </select>
    )
  }
}

export default SelectHero;
