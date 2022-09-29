import './featuredInfo.css';
import {
  ArrowDownward,
  ArrowUpward,
} from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { userRequest } from '../../requestMethods';


export const FeaturedInfo = () => {
  const [income, setIncome] = useState([])
  const [perc, setPerc] = useState(0)
  useEffect(() => {
    (async () => {
      try {
        const res = await userRequest.get('orders/income')
        setIncome(res.data)
        setPerc(res.data[0].total);
        // setPerc((res.data[0].total * 100) / res.data[0].total - 100);
      } catch {}
    })()
  }, [])
  // console.log(income)
  // console.log(perc)
  const featuredData = [
    {
      title: 'Revenue',
      money: income[0]?.total,
      rate: Math.floor(perc),
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
  const formatIDR = amount => `Rp ${amount}K`;

  return (
    <div className='featuredItem'>
      <span className='featuredTitle'>{title}</span>
      <div className='featuredMoneyContainer'>
        <span className='featuredMoney'>{formatIDR(money)}</span>
        <span className='featuredMoneyRate'>
          {rate}%
          {rate > 0 ? <ArrowUpward className='featuredIcon' /> : <ArrowDownward className='featuredIcon negative' />}
        </span>
      </div>
      <span className='featuredSub'>Compared to last month</span>
    </div>
  )
}
