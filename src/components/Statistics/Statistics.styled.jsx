import styled from '@emotion/styled';
import { getRandomHexColor } from '../../helpers/RandomCololor';
export const StatBlock = styled.div`
  padding: 15px;
  margin: 15px auto;
  width: fit-content;
  background-color: rgb(211, 211, 211, 0.3);
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin: 30px;
  text-transform: uppercase;
  color: gray;
  font-weight: 600;
  font-size: 18px;
`;
export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-height: 70px;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 17px;
  background-color: ${getRandomHexColor};
  color: white;
`;
