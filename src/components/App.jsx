import { Profile } from './profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './statistics/Statistics';
import { Transactions } from './transactions/Transactions';
import user from '../components/data/user.json';
import friends from '../components/data/friends.json';
import data from '../components/data/data.json';
import transactions from '../components/data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
};
