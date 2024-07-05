import React from 'react';

interface BalanceProps {
    balance: number | null;
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {
    const calculateBalance = () => {
        return (balance ?
            <>Balance: <b>{balance}</b> SOL</>
            :
            <>Balance unavailable</>)
    };

    return (
        <div>
        <p>
            {calculateBalance()}
        </p>
      </div>

    // <div>
    //         <h2>Balance</h2>
    //         <p>Your current balance is: {calculateBalance()}</p>
    //     </div>
    );
};

export default Balance;