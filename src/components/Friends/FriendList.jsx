import PropTypes from 'prop-types';
import {
  ListStyles,
  FriendsItem,
  Status,
  FriendName,
  FriendImage,
} from './Friends.styled';
export const FriendList = ({ friends }) => {
  return (
    <ListStyles>
      {friends.map(friend => (
        <FriendsItem key={friend.id}>
          <Status status={friend.isOnline}></Status>
          <FriendImage src={friend.avatar} alt="User avatar" width="48" />
          <FriendName>{friend.name}</FriendName>
        </FriendsItem>
      ))}
    </ListStyles>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
