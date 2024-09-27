import {useState, useEffect} from 'react';

function App() {
  const[loading, setLoading] = useState(true);
  const[coins,setCoins] = useState([]);
  const[value,setValue] = useState(0);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response)=> response.json()).then((json)=>setCoins(json));
    setLoading(false);
  }, []);
  const onChange = (event)=>(
    setValue(event.target.value)
  );
  return (
    <div>
      <h2>These are the coins!</h2>
      {loading ? "Loading!" : null}
      <input value={value} onChange={onChange} style={{width:"300px"}}type="number" placeholder="Tell me how much you have"></input>
      <hr/>
      <ul>
        {coins.map((coin)=>(
          <li key={coin.id}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD => You can buy {Math.round(value / coin.quotes.USD.price)} Coins</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
