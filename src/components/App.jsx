import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './transactions/transactions.jsx';

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
