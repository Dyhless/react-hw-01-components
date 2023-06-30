import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
    </div>
  );
};
