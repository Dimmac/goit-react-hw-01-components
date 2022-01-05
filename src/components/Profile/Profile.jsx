// import {BsFillBagPlusFill} from 'react-icons/bs'
import { Card, UpperCard, UserImage, UserName } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <UpperCard>
        {/* <BsFillBagPlusFill size={100} color="tomato" /> */}
        <UserImage src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </UpperCard>
      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </Card>
  );
};
