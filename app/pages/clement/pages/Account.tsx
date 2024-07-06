import { getAccount, initializeAccount } from "@helpers/solana.helper";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
// import { getAccount, initializeAccount } from "../../../helpers/solana.helper";

export function Account() {

    const anchorWallet = useAnchorWallet();
    const [transactionHash, setTransactionHash] = useState<string | null>(null);
    const [sendingTransaction, setSendingTransaction] = useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [account, setAccount] = useState<any | null | undefined>(undefined);
    const [data, setData] = useState<number>(0);
    const [age, setAge] = useState<number>(0);
    const [taille, setTaille] = useState(0)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h1>
                Account
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div>
                    <label className="labelClement">
                        Data
                    </label>
                    <input
                        type="number"
                        value={data}
                        onChange={(e) => setData(parseInt(e.target.value))}
                        placeholder="Data"
                    />
                </div>
                <div>
                    <label className="labelClement">
                        Age
                    </label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(parseInt(e.target.value))}
                        placeholder="Age"
                    />
                </div>
                <div>
                    <label className="labelClement">
                        taille
                    </label>
                    <input
                        type="number"
                        value={taille}
                        onChange={(e) => setTaille(parseInt(e.target.value))}
                        placeholder="Taille"
                    />
                </div>
            </div>
            {
                anchorWallet?.publicKey && (
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <button className="buttonClementInfo"
                            onClick={async () => {
                                if (anchorWallet.publicKey) {
                                    // const account = await getAccount(anchorWallet.publicKey)
                                    const account = await getAccount(anchorWallet.publicKey)
                                    if (!account) {
                                        console.error('Account not found');
                                        alert('Account not found')
                                    }
                                    setAccount(account);
                                    account?.data && setData(account.data);
                                    account?.age && setAge(account.age);
                                    account?.taille && setTaille(account.taille);
                                }
                            }}
                        >
                            Get Account
                        </button>
                        <button className="buttonClementAction"
                            onClick={async () => {
                                if (anchorWallet.publicKey) {
                                    setSendingTransaction(true);
                                    // const initResult = await initializeAccount(anchorWallet, data | 1, age | 20);
                                    console.debug('onClick Create Account')
                                    const initResult = await initializeAccount(anchorWallet, data | 1, age | 20, taille | 160);
                                    setTransactionHash(initResult);
                                    setSendingTransaction(false);
                                }
                            }}
                        >
                            Create Account
                        </button>
                    </div>
                )
            }
            {
                account  && (
                    <p>
                        Account: <b>{account === null ? 'N/A' : `data: ${account.data} ; age: ${account.age}`}</b>
                    </p>
                )
            }
            {
                sendingTransaction && (
                    <p>
                        Sending transaction...
                    </p>
                )
            }
            {
                transactionHash && !sendingTransaction && (
                    <p>
                        Transaction hash: <b>{transactionHash}</b>
                    </p>
                )
            }
        </div>
    );
}