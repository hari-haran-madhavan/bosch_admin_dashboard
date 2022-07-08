import { Notifications as NotificationsIcon, PlayCircleOutline as PlayCircleOutlineIcon, PostAdd as PostAddIcon, Schedule as ScheduleIcon, Settings as SettingsIcon, SettingsApplications as SettingsApplicationsIcon, Update as UpdateIcon } from '@material-ui/icons';
import * as React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../heroCarousel/heroCarousel.css';

const feature_lists = [
  { type: 'postadd', name: 'Create Instance', description: 'Create an instance on JMaaS' },
  { type: 'update', name: 'Schedule Update', description: 'Schedule update of an instance on JMaaS' },
  { type: 'schedule', name: 'Schedule Restart', description: 'Schedule restart of an instance on JMaaS' },
  { type: 'settings', name: 'Configure Instance', description: 'Enable SSO, JDK 11, Java Parameters' },
  { type: 'notifications', name: 'Configure Alerts', description: 'Configure Alerts of an instance on JMaaS' },
  { type: 'playcircle', name: 'Start Jenkins', description: 'Start a jenkins instance on JMaaS' },
  { type: 'settingsapplications', name: 'Delete Instance', description: 'Delete a jenkins instance in JMaaS' },
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
    // the naming can be any, depends on you.
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

export default function Notification({ variant, ...props }) {
  return (
    <div>
      <Carousel responsive={responsive} className='carousel_hero'>
        {feature_lists.map(f => (
          <div className='carousel_cards'>
            {getIconByType(f.type)}
            <h3>{f.name}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
