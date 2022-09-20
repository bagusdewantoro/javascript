import './home.css';
// import {
//
// } from '@material-ui/icons';
import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo'
import { Chart } from '../../components/chart/Chart'
import { userData } from '../../dummyData'
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userRequest } from '../../requestMethods';
import { useState, useEffect, useMemo } from 'react';

export const Home = () => {
  const [ userStats, setUserStats ] = useState([])
  const MONTHS = useMemo(() => [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dev'
  ], [])

  useEffect(() => {
    (async() => {
      try {
        const res = await userRequest.get('/users/stats')
        res.data.map(item => {
          setUserStats(prev => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              'Active User': item.total,
            },
          ])
        })
      } catch {}
    })()
  }, [MONTHS])
  console.log(userStats)

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        title='User Analytics'
        data={userData}
        grid
        dataKey='Active User'
      />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
