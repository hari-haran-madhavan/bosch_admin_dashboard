/* eslint-disable eqeqeq */
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
  return elements.map(ele => (
    <div>
      {console.log(props.value)}
      {props.value == ele.value ? (
        <Dialog className='dialog_cards' open={true} onClose={() => this.HandleDialogChange('newInstanceDialog', false)}>
          <DialogTitle>{ele.head}</DialogTitle>
          <DialogContent>
            {ele.description ? <DialogContentText>{ele.description}</DialogContentText> : ''}
            <TextField autoFocus margin='dense' id='name' label='Email Address' type='email' fullWidth variant='standard' />
            {ele.fields.map(fielding => (
              <Grid container spacing={4}>
                <Grid item md={4}>
                  {fielding.name}
                </Grid>
                <Grid item md={4}>
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
            <Button onClick={() => this.HandleDialogChange('newInstanceDialog', false)}>Cancel</Button>
            <Button onClick={() => this.HandleDialogChange('newInstanceDialog', false)}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      ) : (
        ''
      )}
    </div>
  ));
}
