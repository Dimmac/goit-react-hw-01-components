import styled from '@emotion/styled';
export const Table = styled.table`
  position: relative;
  padding-top: 40px;
  margin: 0 auto;
  border-radius: 15px;
  max-width: 600px;
  height: 100%;
  background-color: white;
`;
export const TableHead = styled.thead`
  position: absolute;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  background-color: #00d9ff;
`;
export const TableHeadItem = styled.tr`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const TableHeadText = styled.th`
  text-transform: uppercase;
  padding: 15px 30px;
  color: white;
`;
export const TableBody = styled.tbody``;
export const TableBodyItem = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  &:nth-of-type(2n) {
    background-color: lightyellow;
  }
`;
export const TableBodyText = styled.td`
  text-transform: capitalize;
  width: 120px;
  padding: 10px 40px;
  margin: 0;
  border: lightgray solid 2px;
  color: gray;
`;
