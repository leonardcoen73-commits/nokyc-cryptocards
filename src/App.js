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
<div style={{ marginTop: '2rem' }}>
  <h3>Ricarica con Crypto</h3>
  <p>Puoi ricaricare la tua carta inviando USDT o USDC a uno degli indirizzi qui sotto.</p>

  <h4>USDT</h4>
  <ul>
    <li><strong>TRC20:</strong> TXYZ123456789... (economico e veloce)</li>
    <li><strong>ERC20:</strong> 0xABCDEF123456... (standard Ethereum)</li>
    <li><strong>BEP20:</strong> 0xBSC987654321... (Binance Smart Chain)</li>
    <li><strong>Polygon:</strong> 0xPOLY112233... (compatibile con Ethereum)</li>
    <li><strong>Solana:</strong> SOL123456789... (molto veloce)</li>
  </ul>

  <h4>USDC</h4>
  <ul>
    <li><strong>ERC20:</strong> 0xUSDCETH123... (standard Ethereum)</li>
    <li><strong>BEP20:</strong> 0xUSDCBSC456... (Binance Smart Chain)</li>
    <li><strong>Polygon:</strong> 0xUSDCPOLY789... (economico)</li>
    <li><strong>Solana:</strong> USDC_SOL_001... (veloce)</li>
  </ul>

  <p><em>⚠️ Attenzione: ogni rete ha un indirizzo diverso. Invia solo alla rete corretta!</em></p>

  <h4>QR Code per BEP20 (USDT)</h4>
  <img src="https://postimg.cc/f3m0HSPF" alt="QR Code BEP20" width="200" />

  <h4>QR Code per ERC20 (USDC)</h4>
  <img src="URL_DEL_TUO_QR_CODE_USDC_ERC20" alt="QR Code USDC ERC20" width="200" />
</div>

      )}
    </div>
  );
}

export default App;
