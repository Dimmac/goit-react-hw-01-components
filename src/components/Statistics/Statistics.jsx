import {
  StatBlock,
  StatisticsList,
  StatisticsItem,
} from '../Statistics/Statistics.styled';
export const Statistics = ({ title, stats }) => {
  // console.log(title)
  return (
    <StatBlock>
      {title && <h2>{title}</h2>}
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatBlock>
  );
};
