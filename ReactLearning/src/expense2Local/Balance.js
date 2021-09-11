const Balance = ({ total, thousands }) => {
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>Rp { thousands(total) }</h1>
    </div>
  )
};


export default Balance;
