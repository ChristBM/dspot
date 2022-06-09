// import avatar from '@public/avatar.jpg';
import { ListFriendData } from '../interfaces/ListFriendData';

const friends: ListFriendData[] = [
  {
    id: 1,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg',
    first_name: 'Jeremy',
    last_name: 'Davis',
    status: 'At work...',
    available: false,
  },
  {
    id: 2,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg',
    first_name: 'Vlad',
    last_name: 'Baratovich',
    status: 'Hangout out by the pool',
    available: true,
  },
  {
    id: 3,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/rssems/128.jpg',
    first_name: 'Reese',
    last_name: 'Samsonite',
    status: 'At NG-conf!',
    available: true,
  },
  {
    id: 4,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/enda/128.jpg',
    first_name: 'Edwardo',
    last_name: 'Gonzalez',
    status: 'Developing something amazing',
    available: false,
  },
  {
    id: 5,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg',
    first_name: 'Jim',
    last_name: 'Denison',
    status: 'Designing beatiful things',
    available: false,
  },
  {
    id: 6,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/walterstephanie/128.jpg',
    first_name: 'Steph',
    last_name: 'Walters',
    status: 'Developing something amazing',
    available: true,
  },
];

export default friends;
