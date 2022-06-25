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
import '../../components/instances/instances.css';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number, sso: number) {
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
    width: '100%',
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
const rows = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 12), createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 12), createData('Eclair', 262, 16.0, 24, 6.0, 10), createData('Cupcake', 305, 3.7, 67, 4.3, 10), createData('Gingerbread', 356, 16.0, 49, 3.9, 10)];

class Instances extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={6} className='instances_table'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow className='table_head'>
                  <TableCell className='table_head'>Instance Details</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableRow className='table_search'>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell colSpan={3}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder='Instance Search…' inputProps={{ 'aria-label': 'search' }} />
                  </Search>
                </TableCell>
              </TableRow>
              <TableBody>
                <TableRow>
                  <TableCell>Instance Name</TableCell>
                  <TableCell align='center'>Version</TableCell>
                  <TableCell align='center'>Disk Utilization(%)</TableCell>
                  <TableCell align='center'>Inode Utilization(%)</TableCell>
                  <TableCell align='center'>Cost center</TableCell>
                  <TableCell align='center'>SSO</TableCell>
                </TableRow>
                {rows.map(row => (
                  <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='center'>{row.calories}</TableCell>
                    <TableCell align='center'>{row.fat}</TableCell>
                    <TableCell align='center'>{row.carbs}</TableCell>
                    <TableCell align='center'>{row.protein}</TableCell>
                    <TableCell align='center'>{row.sso}</TableCell>
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
                  <TableCell colSpan={2} className='table_head'>
                    Update Summary
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
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
                  <TableCell colSpan={3}>
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
                  <TableCell align='Center'>Current Version</TableCell>
                  <TableCell align='Center'>Update version</TableCell>
                  <TableCell align='Center'>Cluster</TableCell>
                  <TableCell align='Center'>Scheduled DateTime</TableCell>
                  <TableCell align='Center'>Status</TableCell>
                  <TableCell align='Center'>Requester Action</TableCell>
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
                    <TableCell align='center'>{row.protein}</TableCell>
                    <TableCell align='center'>{row.sso}</TableCell>
                    <TableCell align='center'>{row.sso}</TableCell>
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

export default Instances;
