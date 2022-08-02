import { TextField } from '@material-ui/core';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from 'react';

export default function DateAndTime() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} maxDate={new Date().setDate(365)} showDisabledMonthNavigation renderInput={params => <TextField {...params} />} />{' '}
      </LocalizationProvider>
    </React.Fragment>
  );
}
