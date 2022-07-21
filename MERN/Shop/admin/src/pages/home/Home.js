import './home.css';
// import {
//
// } from '@material-ui/icons';
import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo'
import { Chart } from '../../components/chart/Chart'
import { userData } from '../../dummyData'
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export const Home = () => {
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
