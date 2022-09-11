import "./widgetLg.css";
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';
import { format } from 'timeago.js';

export default function WidgetLg() {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    (async function() {
      try {
        const res = await userRequest.get('orders')
        setOrders(res.data)
      } catch {}
    })()
  }, [])
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className="widgetLg">
      <h3 className='widgetLgTitle'>Latest Transaction</h3>
      <table className='widgetLgTable'>
        <thead>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>Customer</th>
            <th className='widgetLgTh'>Date</th>
            <th className='widgetLgTh'>Amount</th>
            <th className='widgetLgTh'>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr className='widgetLgTr' key={order._id}>
              <td className='widgetLgUser'>
                <span className='widgetLgName'>{order.userId}</span>
              </td>
              <td className='widgetLgDate'>{format(order.createdAt, 'en_US')}</td>
              <td className='widgetLgAmount'>Rp {order.amount}K</td>
              <td className='widgetLgStatus'>
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
