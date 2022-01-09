// import {BsFillBagPlusFill} from 'react-icons/bs'
import {
  Card,
  UpperCard,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsItem,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <UpperCard>
        {/* <BsFillBagPlusFill size={100} color="tomato" /> */}
        <UserImage src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UpperCard>
      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </Card>
  );
};
