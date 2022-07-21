import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img
            src="https://img.okezone.com/content/2012/12/12/386/731068/pNDncoLTTa.jpg"
            alt=""
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Bill</span>
            <span className='widgetSmUserTitle'>DexterFans/Vocalist</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Duff_McKagan_2012.JPG/330px-Duff_McKagan_2012.JPG"
            alt=""
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Andrew</span>
            <span className='widgetSmUserTitle'>Accountant/Bassist</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src="https://img-9gag-fun.9cache.com/photo/avAR6Pn_700bwp.webp"
            alt=""
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Saul</span>
            <span className='widgetSmUserTitle'>Cyclist/Guitarist</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
