import React from 'react';
import Carousel from 'react-multi-carousel';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
class DynamicCarousel extends React.Component {
  render() {
    return (
      <div>
        <Carousel responsive={responsive} className='carousel_hero'>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            {this.props.icon}
            <h3 className='card_adjust'>{this.props.name}</h3>
            <p>{this.props.description}</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DynamicCarousel;
