/* eslint-disable eqeqeq */
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import '../heroCarousel.css';
const elements = [
  {
    value: 'newInstanceDialog',
    head: 'Schedule Update for a instance',
    fields: [
      { name: 'Instance Name', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { name: 'Current jenkins version', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
      { name: 'Jenkins Version', options: [{ key: '1' }, { key: '2' }, { key: '3' }] },
    ],
  },
  {
    value: 'scheduleUpdateDialog',
    head: 'Coming soon',
  },
  {
    value: 'scheduleRestartDialog',
    head: 'Coming soon',
  },
  {
    value: 'configureInstanceDialog',
    head: 'Coming soon',
  },
  {
    value: 'configureAlertDialog',
    head: 'Coming soon',
  },
  {
    value: 'startJenkins',
    head: 'Coming soon',
  },
  {
    value: 'deleteInstance',
    head: 'Coming soon',
  },
];

export default function Dialogs(props) {
  let [dialogOpen, dialogFunction] = useState(props.open);
  console.log('props.open', props.open);
  console.log('dialogOpen', dialogOpen);

  function changeDialogs() {
    dialogFunction((dialogOpen = false));
    console.log('dialogOpen', dialogOpen);
  }
  // dialogOpen = props.open;
  return elements.map(ele => (
    <div>
      {props.value == ele.value ? (
        <Dialog className='dialog_cards' open={dialogOpen} fullWidth={true} maxWidth='lg' onClose={changeDialogs}>
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
            {/* {ele.description ? <DialogContentText>{ele.description}</DialogContentText> : ''} */}
            {/* <TextField autoFocus margin='dense' id='name' label='Email Address' type='email' fullWidth variant='standard' /> */}
            {ele.fields?.map(fielding => (
              <Grid
                container
                style={{
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
                spacing={4}>
                <Grid item md={4}>
                  {fielding.name}
                </Grid>
                <Grid item md={8}>
                  <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
                    {fielding.options.map(optioning => (
                      <MenuItem value={optioning.key}>{optioning.key}</MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={changeDialogs}>Cancel</Button>
            <Button onClick={changeDialogs}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      ) : (
        ''
      )}
    </div>
  ));
}
