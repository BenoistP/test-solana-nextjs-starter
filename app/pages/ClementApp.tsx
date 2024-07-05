// import '../styles/clement/clement-app.css'; // unused global style

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect, useState } from 'react';
import Balance from './clement/pages/Balance';
import { Dashboard } from './clement/pages/Dashboard';
import { getSolanaBalance } from '../helpers/solana.helper';

function ClementApp() {

  const wallet = useWallet();
  const [solanaBalance, setSolanaBalance] = useState<number | null>(null);

  useEffect(() => {
    if (wallet.publicKey) {
      getSolanaBalance(wallet.publicKey.toBase58())
        .then((balance) => setSolanaBalance(balance));
    } else {
      setSolanaBalance(null);
    }
    return () => {
      //
    }
  }, [wallet.publicKey]);

  return (
    <div className="App">
      <div className="header">
        <div className='wallet'>
          <Balance balance={solanaBalance}/>
          <WalletMultiButton></WalletMultiButton>
        </div>
      </div>
      <Dashboard />
    </div>
  );
}

export default ClementApp;