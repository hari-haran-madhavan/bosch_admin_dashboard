import { Grid, MenuItem, Select, TextField } from '@material-ui/core';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import 'react-multi-carousel/lib/styles.css';

export default function DateAndTime() {
  const [startDate, setStartDate] = useState(new Date());
  let timeOptions = {
    options: [{ key: '00:00' }, { key: '01:00' }, { key: '02:00' }, { key: '03:00' }, { key: '04:00' }, { key: '05:00' }, { key: '06:00' }, { key: '07:00' }, { key: '08:00' }, { key: '09:00' }, { key: '10:00' }, { key: '11:00' }, { key: '12:00' }, { key: '13:00' }, { key: '14:00' }, { key: '15:00' }, { key: '16:00' }, { key: '17:00' }, { key: '18:00' }, { key: '19:00' }, { key: '20:00' }, { key: '21:00' }, { key: '22:00' }, { key: '23:00' }],
  };
  return (
    <React.Fragment>
      <Grid item md={4}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} maxDate={new Date().setDate(365)} showDisabledMonthNavigation renderInput={params => <TextField {...params} />} />{' '}
        </LocalizationProvider>
      </Grid>

      <Grid item md={4}>
        <Select fullWidth={true} labelId='demo-simple-select-label' id='demo-simple-select'>
          {timeOptions.options.map(optioning => (
            <MenuItem value={optioning.key}>{optioning.key}</MenuItem>
          ))}
        </Select>
      </Grid>
    </React.Fragment>
  );
}
