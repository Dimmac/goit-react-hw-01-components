import { Profile } from '../Profile/Profile';
import user from '../Profile/user.json';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
}
