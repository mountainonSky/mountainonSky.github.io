import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState<string>()

  useEffect(() => {
    fetch('/api/cocktail')
    .then(response => response.text())
    .then(setResponse);
  }, [])

  return (
    <div className="App">{response}</div>
  );
}


export default App;
