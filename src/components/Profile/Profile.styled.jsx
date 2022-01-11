import styled from '@emotion/styled';
export const Card = styled.div`
  margin: auto;
  display: block;
  background-color: white;
  max-width: 300px;
  border: lightgrey 1px solid;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 5px;
  overflow: hidden;
`;
export const UpperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const UserImage = styled.img`
  margin: 30px 0px;
  max-height: 200px;
  border-radius: 50%;
  background-color: lightgrey;
`;
export const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: #383636;
  padding-bottom: 15px;
`;
export const UserTag = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: gray;
  padding: 0px 0px;
`;
export const UserLocation = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.25px;
  color: lightgray;
  padding: 15px 0px;
`;
export const StatsList = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
`;
export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 10px;
  width: 100%;
  background-color: rgb(211, 211, 211, 0.3);
  border: lightgrey 1px solid;
`;
export const StatsQuantity = styled.span`
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
`;
export const Properties = styled.span`
  color: grey;
`;
