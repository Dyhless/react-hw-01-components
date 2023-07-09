import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <div className="friend-list-container">
      <ul className="friend-list">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id} className="friend-item">
            <div className={`friend-status ${isOnline ? 'online' : 'offline'}`}></div>
            <div className="friend-details">
              <img className="friend-avatar" src={avatar} alt="User avatar" width="48" />
              <p className="friend-name">{name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};