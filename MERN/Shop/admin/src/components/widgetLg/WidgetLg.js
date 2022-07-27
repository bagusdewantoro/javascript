import "./widgetLg.css";

export default function WidgetLg() {
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
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src='https://akcdn.detik.net.id/community/media/visual/2016/05/04/9ccb5362-7434-4885-9397-6657efbd1af4_43.jpg?w=700&q=90' alt='' className='widgetLgImg' />
              <span className='widgetLgName'>Thom</span>
            </td>
            <td className='widgetLgDate'>2 Jun 2021</td>
            <td className='widgetLgAmount'>Rp 122K</td>
            <td className='widgetLgStatus'>
              <Button type='Approved' />
            </td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src='https://cdn.mos.cms.futurecdn.net/Efv47gns6hZtmH7Z53uRT7.png' alt='' className='widgetLgImg' />
              <span className='widgetLgName'>Jonny</span>
            </td>
            <td className='widgetLgDate'>2 Jun 2021</td>
            <td className='widgetLgAmount'>Rp 122K</td>
            <td className='widgetLgStatus'>
              <Button type='Pending' />
            </td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src='https://www.nme.com/wp-content/uploads/2020/06/GettyImages-808332704-696x442.jpg' alt='' className='widgetLgImg' />
              <span className='widgetLgName'>Ed</span>
            </td>
            <td className='widgetLgDate'>2 Jun 2021</td>
            <td className='widgetLgAmount'>Rp 122K</td>
            <td className='widgetLgStatus'>
              <Button type='Declined' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
