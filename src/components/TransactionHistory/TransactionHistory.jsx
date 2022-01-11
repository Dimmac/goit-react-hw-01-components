import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadItem,
  TableHeadText,
  TableBody,
  TableBodyItem,
  TableBodyText,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadItem>
          <TableHeadText>Type</TableHeadText>
          <TableHeadText>Amount</TableHeadText>
          <TableHeadText>Currency</TableHeadText>
        </TableHeadItem>
      </TableHead>
      {items.map(item => (
        <TableBody key={item.id}>
          <TableBodyItem>
            <TableBodyText>{item.type}</TableBodyText>
            <TableBodyText>{item.amount}</TableBodyText>
            <TableBodyText>{item.currency}</TableBodyText>
          </TableBodyItem>
        </TableBody>
      ))}
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
