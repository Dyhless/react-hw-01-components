import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './transactions/Transactions';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <Transactions />
    </div>
  );
};
