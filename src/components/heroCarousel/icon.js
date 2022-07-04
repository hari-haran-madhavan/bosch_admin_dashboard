import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import UpdateIcon from '@mui/icons-material/Update';
function Icons(props) {
  if (props.name === 'settings') {
    return <SettingsIcon className='carousel_card_icon' />;
  } else if (props.name === 'create') {
    return <NoteAddIcon className='carousel_card_icon' />;
  } else if (props.name === 'update') {
    return <UpdateIcon className='carousel_card_icon' />;
  } else if (props.name === 'restart') {
    return <AccessTimeFilledIcon className='carousel_card_icon' />;
  } else if (props.name === 'notification') {
    return <NotificationsNoneIcon className='carousel_card_icon' />;
  } else if (props.name === 'play') {
    return <PlayCircleOutlineIcon className='carousel_card_icon' />;
  }
}
export default Icons;
