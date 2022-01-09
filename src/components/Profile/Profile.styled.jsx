import styled from '@emotion/styled';
export const Card = styled.div`
  display: inline-block;
  background-color: #ece9e9;
  border: solid 1px gray;
  border-radius: 0.3em;
`;
export const UpperCard = styled.div`
  background-color: white;
  padding: 20px 40px;
  align-items: center;
  justify-content: center;
`;
export const UserImage = styled.img`
  width: 100px;
  border-radius: 50%;
`;
export const UserName = styled.p`
  font-size: 20px;
  line-height: 12px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #383636;
`;
export const UserTag = styled.p`
  font-size: 14px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: gray;
`;
export const UserLocation = styled.p`
  font-size: 16px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: gray;
`;
export const StatsList = styled.ul`
  list-style: none;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.2vw;
`;
export const StatsItem = styled.li`
  display: contents;
  border: solid 1px gray;
`;
