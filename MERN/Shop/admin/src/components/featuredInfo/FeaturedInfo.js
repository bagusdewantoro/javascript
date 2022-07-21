import './featuredInfo.css';
import {
  ArrowDownward,
  ArrowUpward,
} from '@material-ui/icons';


export const FeaturedInfo = () => {
  const featuredData = [
    {
      title: 'Revenue',
      money: 250000,
      rate: -11.4,
    },
    {
      title: 'Sales',
      money: 125000,
      rate: -1.4,
    },
    {
      title: 'Cost',
      money: 300000,
      rate: 2.4,
    },
  ];
  return (
    <div className='featured'>
      {featuredData.map((data, index) => (
        <FeaturedItem
          key={index}
          title={data.title}
          money={data.money}
          rate={data.rate}
        />
      ))}
    </div>
  )
}


const FeaturedItem = (props) => {
  const {title, money, rate} = props;
  const formatIDR = amount => `Rp ${amount/1000}K`;

  return (
    <div className='featuredItem'>
      <span className='featuredTitle'>{title}</span>
      <div className='featuredMoneyContainer'>
        <span className='featuredMoney'>{formatIDR(money)}</span>
        <span className='featuredMoneyRate'>
          {rate}
          {rate > 0 ? <ArrowUpward className='featuredIcon' /> : <ArrowDownward className='featuredIcon negative' />}
        </span>
      </div>
      <span className='featuredSub'>Compared to last month</span>
    </div>
  )
}
