import { Grid } from '@mui/material';
import * as React from 'react';
// npm install react-multi-carousel --save
import 'react-multi-carousel/lib/styles.css';
import Carousels from '../heroCarousel/carousel/carousel';
import '../heroCarousel/heroCarousel.css';

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
        <Carousels />
      </div>
    );
  }
}

export default HeroCarousel;
