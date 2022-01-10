import styled from '@emotion/styled';
export const ListStyles = styled.ul`
  padding: 15px;
  margin: 15px auto;
  max-width: 300px;
`;
export const FriendsItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  height: 100px;
  max-width: 300px;
  filter: drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.15));
  background-color: rgb(211, 211, 211, 0.3);
`;
export const Status = styled.span`
  margin-right: 20px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.status ? `green` : `red`;
  }};
`;
export const FriendName = styled.span`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-left: 20px;
`;
export const FriendImage = styled.img`
  height: 100%;
  width: auto;
  border-radius: 5px;
  background-color: lightgrey;
`;
