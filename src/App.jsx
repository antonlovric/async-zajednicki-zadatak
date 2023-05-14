import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [aktivnost, postaviAktivnost] = useState('');
  const [brojac, postaviBrojac] = useState(0);

  async function dohvatiAktivnost() {
    const rezultat = await fetch('https://www.boredapi.com/api/activity');
    const podaci = await rezultat.json();
    postaviAktivnost(podaci.activity);
    postaviBrojac(brojac + 1);
  }

  useEffect(() => {
    if (brojac > 0) alert('Generirali ste ' + brojac + ' aktivnosti!');
  }, [brojac]);

  return (
    <div>
      <button onClick={dohvatiAktivnost}>Dohvati aktivnost</button>
      <div>
        <span>Aktivnost: </span>
        <p>{aktivnost}</p>
      </div>
    </div>
  );
}

export default App;
