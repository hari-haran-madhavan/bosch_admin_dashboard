import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import '../header/header.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  backgroundColor: 'rgb(29 100 168)',
  color: '#fff',
}));
class Header extends React.Component {
  render() {
    return (
      <div className='header_div'>
        <Grid container>
          <Grid item xs={4} textAlign={'left'}>
            <Item className='bosch_logo'>
              <svg xmlns='http://www.w3.org/2000/svg' width={100} height={24} viewBox='0 0 433 97'>
                <g>
                  <g id='logotype'>
                    <path id='logotype-b-47' d='M185.2,46.88a13.77,13.77,0,0,0,8.8-13c0-11.7-8.3-17.5-19.7-17.5H144.4V80h32.5c10,0,19.8-7,19.8-17.7C196.7,49.58,185.2,47,185.2,46.88ZM160,29.58h11.6a5.66,5.66,0,0,1,6,5.31q0,.34,0,.69a5.93,5.93,0,0,1-6,5.81H159.9Zm11.7,37.1H160.1V54.18h11.3c5.7,0,8.4,2.5,8.4,6.2C179.8,65,176.4,66.68,171.7,66.68Z' style={{ fill: '#ed0007', fillRule: 'evenodd' }}></path>
                    <path id='logotype-o-47' d='M231.1,14.78c-18.4,0-29.2,14.7-29.2,33.3s10.8,33.3,29.2,33.3,29.2-14.6,29.2-33.3S249.6,14.78,231.1,14.78Zm0,51.4c-9,0-13.5-8.1-13.5-18.1s4.5-18,13.5-18,13.6,8.1,13.6,18C244.7,58.18,240.1,66.18,231.1,66.18Z' style={{ fill: '#ed0007', fillRule: 'evenodd' }}></path>
                    <path
                      id='logotype-s-47'
                      d='M294.2,41.38l-2.2-.5c-5.4-1.1-9.7-2.5-9.7-6.4,0-4.2,4.1-5.9,7.7-5.9a17.86,17.86,0,0,1,13,5.9l9.9-9.8c-4.5-5.1-11.8-10-23.2-10-13.4,0-23.6,7.5-23.6,20,0,11.4,8.2,17,18.2,19.1l2.2.5c8.3,1.7,11.4,3,11.4,7,0,3.8-3.4,6.3-8.6,6.3-6.2,0-11.8-2.7-16.1-8.2l-10.1,10c5.6,6.7,12.7,11.9,26.4,11.9,11.9,0,24.6-6.8,24.6-20.7C314.3,46.08,303.3,43.28,294.2,41.38Z'
                      style={{ fill: '#ed0007', fillRule: 'evenodd' }}></path>
                    <path id='logotype-c-47' d='M349.7,66.18c-7,0-14.3-5.8-14.3-18.5,0-11.3,6.8-17.6,13.9-17.6,5.6,0,8.9,2.6,11.5,7.1l12.8-8.5c-6.4-9.7-14-13.8-24.5-13.8-19.2,0-29.6,14.9-29.6,32.9,0,18.9,11.5,33.7,29.4,33.7,12.6,0,18.6-4.4,25.1-13.8L361.1,59C358.5,63.18,355.7,66.18,349.7,66.18Z' style={{ fill: '#ed0007', fillRule: 'evenodd' }}></path>
                    <polygon id='logotype-h-47' points='416.3 16.38 416.3 39.78 397 39.78 397 16.38 380.3 16.38 380.3 79.98 397 79.98 397 54.88 416.3 54.88 416.3 79.98 433 79.98 433 16.38 416.3 16.38' style={{ fill: '#ed0007', fillRule: 'evenodd' }}></polygon>
                  </g>
                  <g id='symbol'>
                    <path d='M48.2.18a48.2,48.2,0,1,0,48.2,48.2A48.2,48.2,0,0,0,48.2.18Zm0,91.9a43.7,43.7,0,1,1,43.7-43.7,43.71,43.71,0,0,1-43.7,43.7Z'></path>
                    <path d='M68.1,18.28H64.8v16.5H31.7V18.28H28.3a36.06,36.06,0,0,0,0,60.2h3.4V62H64.8v16.5h3.3a36.05,36.05,0,0,0,0-60.2ZM27.1,72A31.59,31.59,0,0,1,24.47,27.4a32.51,32.51,0,0,1,2.63-2.62Zm37.7-14.6H31.7V39.28H64.8Zm4.5,14.5v-10h0V34.78h0v-10a31.65,31.65,0,0,1,2.39,44.71A33.68,33.68,0,0,1,69.3,71.88Z'></path>
                  </g>
                </g>
              </svg>
            </Item>
          </Grid>
          <Grid item xs={4} textAlign={'center'}>
            <Item>
              <span style={{ fontSize: '20.5px' }}>JMaas Self Service</span>
            </Item>
          </Grid>
          <Grid item xs={4} textAlign={'right'}>
            <Item>
              <CircleNotificationsIcon className='header_icons' />
              <a href='https://inside-docupedia.bosch.com/confluence/display/cines4info/JMaaS+-+Self-Service+Portal'>
                <ContactSupportIcon className='header_icons' />
              </a>

              <PersonIcon className='header_icons' />
            </Item>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Header;
