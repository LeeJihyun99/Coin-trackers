import {useState, useEffect} from 'react';

function App() {
  const[loading, setLoading] = useState(true);
  const[coins,setCoins] = useState([]);

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response)=> response.json()).then((json)=>setCoins(json));
    setLoading(false);
  }, []);

  return (
    <div>
      <h2>These are the coins!</h2>
      {loading ? "Loading!" : null}
      <select>
        {coins.map((coin)=>(
          <option key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>
        ))}
      </select>
    </div>
  );
}

export default App;
