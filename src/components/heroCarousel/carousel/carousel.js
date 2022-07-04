import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../heroCarousel.css';
import Icons from '../icon';

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

class Carousels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInstanceDialog: false,
      scheduleUpdateDialog: false,
      scheduleRestartDialog: false,
      configureInstanceDialog: false,
      configureAlertDialog: false,
      startJenkins: false,
      comingsoon: false,
    };
  }

  handleClickNewInstance = () => {
    let { newInstanceDialog } = this.state;
    if (newInstanceDialog) {
      newInstanceDialog = false;
    } else {
      newInstanceDialog = true;
    }
    this.setState({ newInstanceDialog });
  };

  handleClickScheduleUpdate = () => {
    let { scheduleUpdateDialog } = this.state;
    if (scheduleUpdateDialog) {
      scheduleUpdateDialog = false;
    } else {
      scheduleUpdateDialog = true;
    }
    this.setState({ scheduleUpdateDialog });
  };

  handleClickComingSoon = () => {
    let { comingsoon } = this.state;
    if (comingsoon) {
      comingsoon = false;
    } else {
      comingsoon = true;
    }
    this.setState({ comingsoon });
  };

  render() {
    return (
      <div>
        <Dialog className='dialog_cards' open={this.state.newInstanceDialog} onClose={this.handleClickNewInstance}>
          <DialogTitle>Schedule Restart</DialogTitle>
          <DialogContent>
            <DialogContentText>To subscribe to this website, please enter your email address here. We will send updates occasionally.</DialogContentText>
            <TextField autoFocus margin='dense' id='name' label='Email Address' type='email' fullWidth variant='standard' />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickNewInstance}>Cancel</Button>
            <Button onClick={this.handleClickNewInstance}>Subscribe</Button>
          </DialogActions>
        </Dialog>
        {/* Schedule Update */}
        <Dialog className='dialog_cards' fullWidth={true} maxWidth={true} open={this.state.scheduleUpdateDialog} onClose={this.handleClickScheduleUpdate}>
          <DialogTitle>Schedule Update for a instance</DialogTitle>
          <DialogContent>
            <Grid container spacing={4}>
              <Grid item md={4}>
                Cluster
              </Grid>
              <Grid item md={8}>
                {/* <TextField autoFocus id='outlined-required name' margin='dense' type='email' fullWidth variant='standard' /> */}
                <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item md={4}>
                Current jenkins version
              </Grid>
              <Grid item md={8}>
                {/* <TextField autoFocus id='outlined-required name' margin='dense' type='email' fullWidth variant='standard' /> */}
                <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item md={4}>
                Instance Name
              </Grid>
              <Grid item md={8}>
                {/* <TextField autoFocus id='outlined-required name' margin='dense' type='email' fullWidth variant='standard' /> */}
                <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item md={4}>
                Select date and time
              </Grid>

              <Grid item md={4}>
                {/* <TextField autoFocus id='outlined-required name' margin='dense' type='email' fullWidth variant='standard' /> */}
                <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid>
            {/* <DialogContentText>To subscribe to this website, please enter your email address here. We will send updates occasionally.</DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickScheduleUpdate}>Configure</Button>
            <Button onClick={this.handleClickScheduleUpdate}>Cancel</Button>
          </DialogActions>
        </Dialog>
        {/* coming soon */}
        <Dialog className='dialog_cards' fullWidth={true} open={this.state.comingsoon} onClose={this.handleClickComingSoon}>
          <DialogTitle>Coming soon</DialogTitle>
          <DialogContent>
            <DialogContentText>This feature will be available in the upcoming version.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickComingSoon}>Cancel</Button>
          </DialogActions>
        </Dialog>
        {/* Dialogs ends*/}

        <Carousel responsive={responsive} className='carousel_hero'>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <Icons name='create' className='carousel_card_icon' />
            <h3 className='card_adjust'>Create New Instance</h3>
            <p>Create an instance on Jmaas</p>
          </div>

          <div className='carousel_cards' onClick={this.handleClickScheduleUpdate}>
            <Icons name='update' className='carousel_card_icon' />
            <h3>Schedule Update</h3>
            <p>Schedule Update for an instance on Jmaas</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickComingSoon}>
            <Icons name='restart' className='carousel_card_icon' />
            <h3>Schedule Restart</h3>
            <p>Schedule Restart for an instance on JMaas</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <Icons name='settings' className='carousel_card_icon' />
            <h3>Configure Instance</h3>
            <p>Enable sso, JDK 11, Java Parameters</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <Icons name='notification' className='carousel_card_icon' />
            <h3>Configure Alerts</h3>
            <p>Configure Alerts for an instance on JMaas</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <Icons name='play' className='carousel_card_icon' />

            <h3>Start jenkins</h3>
            <p>Start a jenkins instance on JMaas</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <Icons name='settings' className='carousel_card_icon' />
            <h3>Configure Instance</h3>
            <p>Enable sso, JDK 11, Java Parameters</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <Icons name='settings' className='carousel_card_icon' />
            <h3>Configure Instance</h3>
            <p>Enable sso, JDK 11, Java Parameters</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Carousels;
