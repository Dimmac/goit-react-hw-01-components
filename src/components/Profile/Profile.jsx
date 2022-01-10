import PropTypes from 'prop-types';
import {
  Card,
  UpperCard,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsItem,
  StatsQuantity,
  Properties,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <UpperCard>
        <UserImage src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UpperCard>
      <StatsList>
        <StatsItem>
          <Properties>Followers</Properties>
          <StatsQuantity>{stats.followers / 1000}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <Properties>Views</Properties>
          <StatsQuantity>{stats.views / 1000}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <Properties>Likes</Properties>
          <StatsQuantity>{stats.likes / 1000}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </Card>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
