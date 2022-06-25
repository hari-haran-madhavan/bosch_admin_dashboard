import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { alpha, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import '../../components/configuration/configuration.css';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number, sso: Boolean) {
  return { name, calories, fat, carbs, protein, sso };
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create('width'),
    // width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const rows = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0, true), createData('Ice cream sandwich', 237, 9.0, 37, 4.3, true), createData('Eclair', 262, 16.0, 24, 6.0, true), createData('Cupcake', 305, 3.7, 67, 4.3, true), createData('Gingerbread', 356, 16.0, 49, 3.9, true)];

class Configuration extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={6} className='instances_table'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow className='table_head'>
                  <TableCell colSpan={2} className='table_head'>
                    Alert Configuration
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow className='table_search'>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase placeholder='Instance Search...' inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Instance Name</TableCell>
                  <TableCell align='center'>Cluster</TableCell>
                  <TableCell align='center'>Disk Usage Threshold</TableCell>
                  <TableCell align='center'>Inode Usage Threshold</TableCell>
                </TableRow>
                {rows.map(row => (
                  <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='center'>{row.calories}</TableCell>
                    <TableCell align='center'>{row.fat}</TableCell>
                    <TableCell align='center'>{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6} className='instances_table'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow className='table_head'>
                  <TableCell colSpan={3} className='table_head'>
                    Scheduled Restart Configuration
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableHead>
                <TableRow className='table_search'>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell colSpan={2}>
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase placeholder='Instance Search…' inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableHead>
                <TableRow>
                  <TableCell>Instance Name</TableCell>
                  <TableCell align='center'>Cluster</TableCell>
                  <TableCell align='center'>Cron Entry</TableCell>
                  <TableCell align='center'>Restart DateTime</TableCell>
                  <TableCell align='center'>Requester</TableCell>
                  <TableCell align='center'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='center'>{row.calories}</TableCell>
                    <TableCell align='center'>{row.fat}</TableCell>
                    <TableCell align='center'>{row.carbs}</TableCell>
                    <TableCell align='center'>{row.carbs}</TableCell>
                    <TableCell align='center'>{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    );
  }
}

export default Configuration;
