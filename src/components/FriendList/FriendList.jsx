import friends from './friends.json';

export const FriendList = () => {
  return (
    <div className="friend-list-container">
      <ul className="friend-list">
        {friends.map((friend) => (
          <li key={friend.id} className="friend-item">
            <div className={`friend-status ${friend.isOnline ? 'online' : 'offline'}`}></div>
            <div className="friend-details">
              <img className="friend-avatar" src={friend.avatar} alt="User avatar" width="48" />
              <p className="friend-name">{friend.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
