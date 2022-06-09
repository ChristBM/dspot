import { FriendsDetails } from '../interfaces/FriendsDetails';

const details: FriendsDetails = {
  id: 6,
  img: 'https://s3.amazonaws.com/uifaces/faces/twitter/walterstephanie/128.jpg',
  first_name: 'Steph',
  last_name: 'Walters',
  phone: '(820) 289-1818',
  address_1: '5190 Center Court Drive',
  city: 'Spring',
  state: 'TX',
  zipcode: '77370',
  bio: "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
  photos: [
    'https://flic.kr/p/mxHVJu',
    'https://flic.kr/p/nCJyXN',
    'https://flic.kr/p/mxwwsv',
  ],
  statuses: [
    'Developing something amazing',
    'This could be interesting....',
    'Man, life is so good',
    'There is nothing quite like a good friend',
    'Take a look around you, everything is awesome',
    'What is the point of all of this',
  ],
  available: true,
};

export default details;
