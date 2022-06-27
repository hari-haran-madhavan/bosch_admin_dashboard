import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import UpdateIcon from '@mui/icons-material/Update';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};
class Carousels extends React.Component {
  render() {
    return (
      <div>
        {/*uncomment this*/}
        {/* <Carousel responsive={responsive}>
          <div className='carousel_cards'>
            <h3>{this.props.head}</h3>
          </div>
        </Carousel> */}

        {/* comment from this */}
        <Carousel responsive={responsive} className='carousel_hero'>
          <div className='carousel_cards'>
            <NoteAddIcon className='carousel_card_icon' />
            <h3 className='card_adjust'>Create New Instance</h3>

            <p>Create an instance on Jmaas</p>
          </div>
          <div className='carousel_cards'>
            <UpdateIcon className='carousel_card_icon' />
            <h3>Schedule Update</h3>
            <p>Schedule Update for an instance on Jmaas</p>
          </div>
          <div className='carousel_cards'>
            <AccessTimeFilledIcon className='carousel_card_icon' />
            <h3>Schedule Restart</h3>
            <p>Schedule Restart for an instance on JMaas</p>
          </div>
          <div className='carousel_cards'>
            <SettingsIcon className='carousel_card_icon' />
            <h3>Configure Instance</h3>
            <p>Enable sso, JDK 11, Java Parameters</p>
          </div>
          <div className='carousel_cards'>
            <NotificationsNoneIcon className='carousel_card_icon' />
            <h3>Configure Alerts</h3>
            <p>Configure Alerts for an instance on JMaas</p>
          </div>
          <div className='carousel_cards'>
            <PlayCircleOutlineIcon className='carousel_card_icon' />
            <h3>Start jenkins</h3>
            <p>Start a jenkins instance on JMaas</p>
          </div>
          <div className='carousel_cards'>
            <SettingsIcon className='carousel_card_icon' />
            <h3>Configure Instance</h3>
            <p>Enable sso, JDK 11, Java Parameters</p>
          </div>
          <div className='carousel_cards'>
            <SettingsIcon className='carousel_card_icon' />
            <h3>Configure Instance</h3>
            <p>Enable sso, JDK 11, Java Parameters</p>
          </div>
        </Carousel>
        {/* to this */}
      </div>
    );
  }
}

export default Carousels;
