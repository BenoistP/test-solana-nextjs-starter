import { PublicKey } from "@solana/web3.js";

import IDL_JSON from "./idl/idl.json"

export const IDL = IDL_JSON; 

const programID = process.env.NEXT_PUBLIC_PROGRAM_ID||''
if (!programID) {
    console.error('NEXT_PUBLIC_PROGRAM_ID is not set')
    throw new Error('NEXT_PUBLIC_PROGRAM_ID is not set')
}

export const NEXT_PUBLIC_PROGRAM_ID = new PublicKey(programID);


