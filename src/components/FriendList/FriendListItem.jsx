import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className="friend-item">
      <div className={`friend-status ${isOnline ? 'online' : 'offline'}`}></div>
      <div className="friend-details">
        <img
          className="friend-avatar"
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className="friend-name">{name}</p>
      </div>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendListItem;
