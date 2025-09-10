import React, { useState } from 'react';

function App() {
  const [card, setCard] = useState(null);
  const [amount, setAmount] = useState('');

  const createCard = () => {
    const newCard = {
      number: '4111 1111 1111 1111',
      cvv: '123',
      expiry: '12/27',
      balance: 0
    };
    setCard(newCard);
  };

  const deposit = () => {
    if (card) {
      const updatedCard = { ...card, balance: card.balance + parseFloat(amount) };
      setCard(updatedCard);
      alert('Deposito effettuato!');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>NoKYC Crypto Card</h1>
      <button onClick={createCard}>Crea Carta</button>
      {card && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Numero:</strong> {card.number}</p>
          <p><strong>CVV:</strong> {card.cvv}</p>
          <p><strong>Scadenza:</strong> {card.expiry}</p>
          <p><strong>Saldo:</strong> ${card.balance}</p>
          <input
            type="number"
            placeholder="Importo"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginRight: '1rem' }}
          />
          <button onClick={deposit}>Ricarica</button>
        </div>
      )}
    </div>
  );
}

export default App;
