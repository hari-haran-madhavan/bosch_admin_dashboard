import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import UpdateIcon from '@mui/icons-material/Update';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DynamicCarousel from '../../dynamicCarousel/dynamicCarousel';
import '../heroCarousel.css';

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
        <DynamicCarousel name='Create New Instance' description='Create an instance on Jmaas' icon="<NoteAddIcon className='carousel_card_icon' />" />
        <DynamicCarousel name='Create New Instance' description='Create an instance on Jmaas' icon="<NoteAddIcon className='carousel_card_icon' />" />
        <DynamicCarousel name='Create New Instance' description='Create an instance on Jmaas' icon="<NoteAddIcon className='carousel_card_icon' />" />
        {/*uncomment this*/}
        {/* <Carousel responsive={responsive}>
          <div className='carousel_cards'>
            <h3>{this.props.head}</h3>
          </div>
        </Carousel> */}

        {/* comment from this */}
        {/* <Button variant='outlined' onClick={this.handleClickOpen}>
          Open form dialog
        </Button> */}

        {/* Dialogs starts*/}
        {/* Create New Instance */}
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
        <Dialog className='dialog_cards' fullWidth={true} open={this.state.scheduleUpdateDialog} onClose={this.handleClickScheduleUpdate}>
          <DialogTitle>Schedule Update for a instance</DialogTitle>
          <DialogContent>
            <Grid container spacing={8}>
              <Grid item md={4}>
                Current jenkins version
              </Grid>
              <Grid item md={8}>
                <TextField autoFocus id='outlined-required name' margin='dense' type='email' fullWidth variant='standard' />
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
        <Dialog className='dialog_cards' open={this.state.comingsoon} onClose={this.handleClickComingSoon}>
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
            <NoteAddIcon className='carousel_card_icon' />
            <h3 className='card_adjust'>Create New Instance</h3>
            <p>Create an instance on Jmaas</p>
          </div>

          <div className='carousel_cards' onClick={this.handleClickScheduleUpdate}>
            <UpdateIcon className='carousel_card_icon' />
            <h3>Schedule Update</h3>
            <p>Schedule Update for an instance on Jmaas</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickComingSoon}>
            <AccessTimeFilledIcon className='carousel_card_icon' />
            <h3>Schedule Restart</h3>
            <p>Schedule Restart for an instance on JMaas</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <SettingsIcon className='carousel_card_icon' />
            <h3>Configure Instance</h3>
            <p>Enable sso, JDK 11, Java Parameters</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <NotificationsNoneIcon className='carousel_card_icon' />
            <h3>Configure Alerts</h3>
            <p>Configure Alerts for an instance on JMaas</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <PlayCircleOutlineIcon className='carousel_card_icon' />
            <h3>Start jenkins</h3>
            <p>Start a jenkins instance on JMaas</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <SettingsIcon className='carousel_card_icon' />
            <h3>Configure Instance</h3>
            <p>Enable sso, JDK 11, Java Parameters</p>
          </div>
          <div className='carousel_cards' onClick={this.handleClickNewInstance}>
            <SettingsIcon className='carousel_card_icon' />
            <h3>Configure Instance</h3>
            <p>Enable sso, JDK 11, Java Parameters</p>
          </div>
        </Carousel>
        {/* to this */}
      </div>
    );
  }
}

export default Carousels;
