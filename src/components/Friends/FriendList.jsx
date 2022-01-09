export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          {friend.isOnline ? <span>true</span> : <span>брехня</span>}
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
