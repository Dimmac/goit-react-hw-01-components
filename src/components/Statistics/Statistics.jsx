import PropTypes from 'prop-types';
import {
  StatBlock,
  Title,
  StatisticsList,
  StatisticsItem,
} from '../Statistics/Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <StatBlock>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatBlock>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
