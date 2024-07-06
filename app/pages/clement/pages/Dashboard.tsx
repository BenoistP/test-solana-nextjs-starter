// import { Account } from "./Account";
// import { Authentication } from "./Authentication";
// import { Transfer } from "./Transfer";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { Account } from "@clement-pages/Account";
import { Authentication } from "@clement-pages/Authentication";
import { Transfer } from "@clement-pages/Transfer";

export function Dashboard() {

    const anchorWallet = useAnchorWallet();

    return (

        <div>

            {
                anchorWallet?.publicKey ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p>
                            Connected to wallet: <b>{anchorWallet.publicKey.toBase58()}</b>
                        </p>
                        <Authentication />
                        <Transfer />
                        <Account />
                    </div>
                ) : (
                    <div>
                    <h1>Solana React Exemple</h1>
                    <p>
                        Cliquer sur le bouton &quot;Connect Wallet&quot; pour connecter votre wallet Solana.
                    </p>
                    </div>
                )
            }
            
        </div>
    );
}