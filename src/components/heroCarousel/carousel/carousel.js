/* eslint-disable eqeqeq */
import { DialogContentText, TextField } from '@material-ui/core';
import { Notifications as NotificationsIcon, PlayCircleOutline as PlayCircleOutlineIcon, PostAdd as PostAddIcon, Schedule as ScheduleIcon, Settings as SettingsIcon, SettingsApplications as SettingsApplicationsIcon, Update as UpdateIcon } from '@material-ui/icons';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../heroCarousel.css';
const elements = [
  {
    value: 'newInstanceDialog',
    head: 'Create an instance from Jmaas service',
    email: true,
    buttons: [
      { button: 'Cancel', primary: false },
      { button: 'Create', primary: true },
    ],
  },
  {
    value: 'scheduleUpdateDialog',
    head: 'Schedule Update for a instance',
    fields: [
      { name: 'Cluster', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { name: 'Instance Name', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { name: 'Current jenkins version', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { name: 'Jenkins Version', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { name: 'Select Date and Time', dualBox: true, options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
    ],
    buttons: [
      { button: 'Cancel', primary: false },
      { button: 'Schedule', primary: true },
    ],
  },
  {
    value: 'scheduleRestartDialog',
    head: 'Schedule Restart',
    fields: [
      { name: 'Cluster', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { name: 'Instance Name', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { name: 'Cron entry', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
    ],
    buttons: [
      { button: 'Cancel', primary: false },
      { button: 'Configure', primary: true },
    ],
  },
  {
    value: 'configureInstanceDialog',
    head: 'Coming soon',
    description: 'This feature will be available soon',
    buttons: [
      { button: 'Cancel', primary: false },
      { button: 'Configure', primary: true },
    ],
  },
  {
    value: 'configureAlertDialog',
    head: 'Coming soon',
    description: 'This feature will be available soon',
    buttons: [
      { button: 'Cancel', primary: false },
      { button: 'Configure', primary: true },
    ],
  },
  {
    value: 'startJenkins',
    head: 'Coming soon',
    description: 'This feature will be available soon',
    buttons: [
      { button: 'Cancel', primary: false },
      { button: 'Configure', primary: true },
    ],
  },
  {
    value: 'deleteInstance',
    head: 'Coming soon',
    description: 'This feature will be available soon',
    buttons: [
      { button: 'Cancel', primary: false },
      { button: 'Configure', primary: true },
    ],
  },
];
const feature_lists = [
  { type: 'postadd', name: 'Create Instance', description: 'Create an instance on JMaaS', dialog: 'newInstanceDialog' },
  { type: 'update', name: 'Schedule Update', description: 'Schedule update of an instance on JMaaS', dialog: 'scheduleUpdateDialog' },
  { type: 'schedule', name: 'Schedule Restart', description: 'Schedule restart of an instance on JMaaS', dialog: 'scheduleRestartDialog' },
  { type: 'settings', name: 'Configure Instance', description: 'Enable SSO, JDK 11, Java Parameters', dialog: 'configureInstanceDialog' },
  { type: 'notifications', name: 'Configure Alerts', description: 'Configure Alerts of an instance on JMaaS', dialog: 'configureAlertDialog' },
  { type: 'playcircle', name: 'Start Jenkins', description: 'Start a jenkins instance on JMaaS', dialog: 'startJenkins' },
  { type: 'settingsapplications', name: 'Delete Instance', description: 'Delete a jenkins instance in JMaaS', dialog: 'deleteInstance' },
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
      tag: null,
      value: false,
      dialogOpen: false,
      instanceDate: null,
    };
  }
  HandleDialogChange = (dialog, open) => {
    // this.setState({ [index]: open });
    let { tag, dialogOpen, value } = this.state;
    tag = dialog;
    value = open;
    dialogOpen = open;
    this.setState({ tag, value, dialogOpen });
  };
  render() {
    let { dialogOpen, instanceDate } = this.state;
    return (
      <div>
        {/* <Dialog className='dialog_cards' open={newInstanceDialog} onClose={() => this.HandleDialogChange('newInstanceDialog', false)}>
          <DialogTitle>Schedule Restart</DialogTitle>
          <DialogContent>
            <DialogContentText>To subscribe to this website, please enter your email address here. We will send updates occasionally.</DialogContentText>
            <TextField autoFocus margin='dense' id='name' label='Email Address' type='email' fullWidth variant='standard' />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.HandleDialogChange('newInstanceDialog', false)}>Cancel</Button>
            <Button onClick={() => this.HandleDialogChange('newInstanceDialog', false)}>Subscribe</Button>
          </DialogActions>
        </Dialog> */}
        {/* Schedule Update */}
        {/* <Dialog className='dialog_cards' maxWidth={'md'} open={scheduleUpdateDialog} onClose={() => this.HandleDialogChange('scheduleUpdateDialog', false)}>
          <DialogTitle className='dialog_title'>Schedule Update for a instance</DialogTitle>
          <DialogContent>
            <Grid container spacing={4}>
              <Grid item md={4}>
                Instance Name
              </Grid>
              <Grid item md={8}> */}
        {/* <TextField autoFocus id='outlined-required name' margin='dense' type='email' fullWidth variant='standard' /> */}
        {/* <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item md={4}>
                Current jenkins version
              </Grid>
              <Grid item md={8}> */}
        {/* <TextField autoFocus id='outlined-required name' margin='dense' type='email' fullWidth variant='standard' /> */}
        {/* <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item md={4}>
                Jenkins Version
              </Grid>
              <Grid item md={8}>
                <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
              <Grid item md={4}>
                Select date and time
              </Grid>

              <Grid item md={4}> */}
        {/* <TextField autoFocus id='outlined-required name' margin='dense' type='email' fullWidth variant='standard' /> */}
        {/* </Grid>

              <Grid item md={4}> */}
        {/* <TextField autoFocus id='outlined-required name' margin='dense' type='email' fullWidth variant='standard' /> */}
        {/* <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid> */}
        {/* <DialogContentText>To subscribe to this website, please enter your email address here. We will send updates occasionally.</DialogContentText> */}
        {/* </DialogContent>
          <DialogActions>
            <Button className='confirm_button dialog_button' onClick={() => this.HandleDialogChange('scheduleUpdateDialog', false)}>
              <CalendarTodayIcon className='confirm_button_icon' />
              Schedule
            </Button>
            <Button className='dialog_button cancel_button' onClick={() => this.HandleDialogChange('scheduleUpdateDialog', false)}>
              <CancelIcon fontSize='small' /> Cancel
            </Button>
          </DialogActions>
        </Dialog> */}
        {/* coming soon */}
        {/* <Dialog className='dialog_cards' fullWidth={true} open={comingsoon} onClose={() => this.HandleDialogChange('comingsoon', false)}>
          <DialogTitle>Coming soon</DialogTitle>
          <DialogContent>
            <DialogContentText>This feature will be available in the upcoming version.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.HandleDialogChange('comingsoon', false)}>Cancel</Button>
          </DialogActions>
        </Dialog> */}
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
        {this.state.value
          ? elements.map(ele => (
              <div>
                {this.state.tag == ele.value ? (
                  <Dialog
                    className='dialog_cards'
                    open={dialogOpen}
                    fullWidth={true}
                    maxWidth='md'
                    onClose={() => {
                      this.HandleDialogChange(ele.value, false);
                    }}>
                    <DialogTitle
                      style={{
                        // borderWidth: '0.5px',
                        borderBottomStyle: 'solid',
                        borderBottomColor: '#c3c4c3',
                      }}>
                      {ele.head}
                    </DialogTitle>
                    <DialogContent
                      style={{
                        borderBottomStyle: 'solid',
                        borderBottomColor: '#c3c4c3',
                      }}>
                      {ele.description ? <DialogContentText style={{ fontSize: '1.1rem', color: '#1976d2', marginTop: '25px' }}>{ele.description}</DialogContentText> : ''}
                      {ele.email ? <TextField autoFocus margin='dense' id='name' label='Email Address' type='email' fullWidth variant='standard' /> : ''}
                      {ele.fields?.map(fielding => (
                        <Grid
                          container
                          style={{
                            marginTop: '5px',
                            marginBottom: '5px',
                          }}
                          spacing={4}>
                          <Grid item md={4}>
                            {fielding.name}
                          </Grid>
                          {fielding.dualBox ? (
                            <>
                              <Grid item md={4}>
                                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                  <DesktopDatePicker
                                    value={null || instanceDate}
                                    minDate={new Date('2017-01-01')}
                                    onChange={newValue => {
                                      this.setState({ instanceDate: newValue });
                                    }}
                                    renderInput={params => <TextField {...params} />}
                                  />
                                </LocalizationProvider> */}
                              </Grid>
                              <Grid item md={4}>
                                <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                                  {fielding.options.map(optioning => (
                                    <MenuItem value={optioning.key}>{optioning.key}</MenuItem>
                                  ))}
                                </Select>
                              </Grid>
                            </>
                          ) : (
                            <Grid item md={8}>
                              <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                                {fielding.options.map(optioning => (
                                  <MenuItem value={optioning.key}>{optioning.key}</MenuItem>
                                ))}
                              </Select>
                            </Grid>
                          )}
                        </Grid>
                      ))}
                    </DialogContent>
                    <DialogActions>
                      {ele.buttons?.map(buttoning => (
                        <Button
                          onClick={() => {
                            this.HandleDialogChange(ele.value, false);
                          }}>
                          {buttoning.button}
                        </Button>
                      ))}
                    </DialogActions>
                  </Dialog>
                ) : (
                  ''
                )}
              </div>
            ))
          : ''}
      </div>
    );
  }
}

export default Carousels;
