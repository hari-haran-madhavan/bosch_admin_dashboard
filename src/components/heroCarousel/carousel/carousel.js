/* eslint-disable eqeqeq */
import { Notifications as NotificationsIcon, PlayCircleOutline as PlayCircleOutlineIcon, PostAdd as PostAddIcon, Schedule as ScheduleIcon, Settings as SettingsIcon, SettingsApplications as SettingsApplicationsIcon, Update as UpdateIcon } from '@material-ui/icons';
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

const feature_lists = [
  { type: 'postadd', name: 'Create Instance', description: 'Create an instance on JMaaS', dialog: 'newInstanceDialog' },
  { type: 'update', name: 'Schedule Update', description: 'Schedule update of an instance on JMaaS', dialog: 'scheduleUpdateDialog' },
  { type: 'schedule', name: 'Schedule Restart', description: 'Schedule restart of an instance on JMaaS', dialog: 'scheduleRestartDialog' },
  { type: 'settings', name: 'Configure Instance', description: 'Enable SSO, JDK 11, Java Parameters', dialog: 'configureInstanceDialog' },
  { type: 'notifications', name: 'Configure Alerts', description: 'Configure Alerts of an instance on JMaaS', dialog: 'configureAlertDialog' },
  { type: 'playcircle', name: 'Start Jenkins', description: 'Start a jenkins instance on JMaaS', dialog: 'startJenkins' },
  { type: 'settingsapplications', name: 'Delete Instance', description: 'Delete a jenkins instance in JMaaS', dialog: 'comingsoon' },
];

const typesIcons = {
  postadd: <PostAddIcon />,
  update: <UpdateIcon />,
  schedule: <ScheduleIcon />,
  settings: <SettingsIcon />,
  notifications: <NotificationsIcon />,
  playcircle: <PlayCircleOutlineIcon />,
  settingsapplications: <SettingsApplicationsIcon />,
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
    slidesToSlide: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 3,
  },
};

function getIconByType(type = 'postadd') {
  const icon = typesIcons[type];
  const iconWithStyles = React.cloneElement(icon, {
    style: {
      color: '#1D64A8',
      fontSize: '65px',
    },
  });
  return iconWithStyles;
}
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
  HandleDialogChange = (index, value) => {
    this.setState({ [index]: value });
  };

  render() {
    let { newInstanceDialog, scheduleRestartDialog, scheduleUpdateDialog, configureInstanceDialog, configureAlertDialog, startJenkins, comingsoon } = this.state;
    return (
      <div>
        <Dialog className='dialog_cards' open={newInstanceDialog} onClose={() => this.HandleDialogChange('newInstanceDialog', false)}>
          <DialogTitle>Schedule Restart</DialogTitle>
          <DialogContent>
            <DialogContentText>To subscribe to this website, please enter your email address here. We will send updates occasionally.</DialogContentText>
            <TextField autoFocus margin='dense' id='name' label='Email Address' type='email' fullWidth variant='standard' />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.HandleDialogChange('newInstanceDialog', false)}>Cancel</Button>
            <Button onClick={() => this.HandleDialogChange('newInstanceDialog', false)}>Subscribe</Button>
          </DialogActions>
        </Dialog>
        {/* Schedule Update */}
        <Dialog className='dialog_cards' fullWidth={true} maxWidth={true} open={scheduleUpdateDialog} onClose={() => this.HandleDialogChange('scheduleUpdateDialog', false)}>
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
            <Button onClick={() => this.HandleDialogChange('scheduleUpdateDialog', false)}>Configure</Button>
            <Button onClick={() => this.HandleDialogChange('scheduleUpdateDialog', false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
        {/* coming soon */}
        <Dialog className='dialog_cards' fullWidth={true} open={comingsoon} onClose={() => this.HandleDialogChange('comingsoon', false)}>
          <DialogTitle>Coming soon</DialogTitle>
          <DialogContent>
            <DialogContentText>This feature will be available in the upcoming version.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.HandleDialogChange('comingsoon', false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
        {/* Dialogs ends*/}
        <Carousel responsive={responsive} className='carousel_hero'>
          {feature_lists.map(f => (
            <div className='carousel_cards' onClick={() => this.HandleDialogChange(f.dialog, true)}>
              {getIconByType(f.type)}
              <h3 id={`${f.type}`}>{f.name}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Carousels;
