import { Grid } from '@mui/material';
import * as React from 'react';
// npm install react-multi-carousel --save
import 'react-multi-carousel/lib/styles.css';
import '../heroCarousel/heroCarousel.css';
import Carousels from './carousel/carousel';
// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 8,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 6,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 4,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 3,
//   },
// };
class HeroCarousel extends React.Component {
  render() {
    let current = new Date();
    const dateAsString = current.toString();
    const timezone = dateAsString.match(/\(([^)]+)\)$/)[1];
    const date = `${current.getHours()}:${current.getMinutes() + 1}:${current.getSeconds()}`;
    return (
      <div className='carousel_div'>
        <Grid container className='carousel_grid'>
          <Grid item xs={4} textAlign={'left'} paddingLeft={5} fontSize={25}>
            Welcome to JMaas Self Service
          </Grid>
          <Grid item xs={4} textAlign={'center'}></Grid>
          <Grid item xs={4} textAlign={'right'} paddingRight={5} fontSize={17}>
            Timezone:{timezone} (Current Time : {date})
          </Grid>
        </Grid>
        {/* uncomment this */}
        {/* <Carousels head='icon_head' />
        <Carousels head='icon_head' />
        <Carousels head='icon_head' />
        <Carousels head='icon_head' />
        <Carousels head='icon_head' /> */}
        <Carousels />
      </div>
    );
  }
}

export default HeroCarousel;
