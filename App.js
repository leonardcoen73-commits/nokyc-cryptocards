import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [card, setCard] = useState(null);
  const [amount, setAmount] = useState('');

  const createCard = async () => {
    const res = await axios.post('https://TUO_BACKEND_URL/create-card');
    setCard(res.data);
  };

  const deposit = async () => {
    await axios.post('https://TUO_BACKEND_URL/deposit', {
      id: card.id,
      amount: parseFloat(amount)
    });
    alert('Deposito effettuato!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>NoKYC Crypto Card</h1>
      <button onClick={createCard}>Crea Carta</button>
      {card && (
        <div>
          <p>Numero: {card.number}</p>
          <p>CVV: {card.cvv}</p>
          <p>Scadenza: {card.expiry}</p>
          <p>Saldo: ${card.balance}</p>
          <input
            type="number"
            placeholder="Importo"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={deposit}>Ricarica</button>
        </div>
      )}
    </div>
  );
}

export default App;
