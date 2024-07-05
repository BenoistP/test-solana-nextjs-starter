import { PublicKey } from "@solana/web3.js";

import IDL_JSON from "./idl/idl.json"

export const IDL = IDL_JSON; 

const programID = process.env.NEXT_PUBLIC_PROGRAM_ID||''
if (!programID) {
    console.error('NEXT_PUBLIC_PROGRAM_ID is not set')
    throw new Error('NEXT_PUBLIC_PROGRAM_ID is not set')
}

export const NEXT_PUBLIC_PROGRAM_ID = new PublicKey(programID);

// export const IDL = {"version":"0.1.0","name":"hello_anchor","instructions":[{"name":"initialize","accounts":[{"name":"newAccount","isMut":true,"isSigner":false},{"name":"signer","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"data","type":"u64"},{"name":"age","type":"u16"}]}],"accounts":[{"name":"NewAccount","type":{"kind":"struct","fields":[{"name":"data","type":"u64"},{"name":"age","type":"u16"}]}}]};
// export const NEXT_PUBLIC_PROGRAM_ID = new PublicKey('E6gEbyUSGkQbwd3CpJmoHMgU9Gnzm3x5kKsLHoj5x5AT');

