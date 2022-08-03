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
import 'react-calendar/dist/Calendar.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../heroCarousel.css';
import DateAndTime from './dateandtime';
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
      {
        name: 'Select Date and Time',
        dualBox: true,
        options: [{ key: '00:00' }, { key: '01:00' }, { key: '02:00' }, { key: '03:00' }, { key: '04:00' }, { key: '05:00' }, { key: '06:00' }, { key: '07:00' }, { key: '08:00' }, { key: '09:00' }, { key: '10:00' }, { key: '11:00' }, { key: '12:00' }, { key: '13:00' }, { key: '14:00' }, { key: '15:00' }, { key: '16:00' }, { key: '17:00' }, { key: '18:00' }, { key: '19:00' }, { key: '20:00' }, { key: '21:00' }, { key: '22:00' }, { key: '23:00' }],
      },
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
      today: null,
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
    let { dialogOpen, today, instanceDate } = this.state;
    return (
      <React.Fragment>
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
                            <DateAndTime />
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
      </React.Fragment>
    );
  }
}

export default Carousels;
