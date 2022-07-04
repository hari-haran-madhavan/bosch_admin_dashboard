import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import UpdateIcon from '@mui/icons-material/Update';
function Icons(props) {
  if (props.icon === 'settings') {
    return (
      <div>
        <SettingsIcon className='carousel_card_icon' />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    );
  } else if (props.icon === 'create') {
    return (
      <div>
        <NoteAddIcon className='carousel_card_icon' />
        <h3 className='card_adjust'>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    );
  } else if (props.icon === 'update') {
    return (
      <div>
        <UpdateIcon className='carousel_card_icon' />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    );
  } else if (props.icon === 'restart') {
    return (
      <div>
        <AccessTimeFilledIcon className='carousel_card_icon' />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    );
  } else if (props.icon === 'notification') {
    return (
      <div>
        <NotificationsNoneIcon className='carousel_card_icon' />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    );
  } else if (props.icon === 'play') {
    return (
      <div>
        <PlayCircleOutlineIcon className='carousel_card_icon' />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    );
  }
}
export default Icons;
