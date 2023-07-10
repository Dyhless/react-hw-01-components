import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div className="friend-list-container">
      <ul className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </div>
  );
};
