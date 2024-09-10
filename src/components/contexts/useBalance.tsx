import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { createContext, useCallback, useState } from "react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Idl, Program, utils } from "@coral-xyz/anchor";
import IDL from '../../idl/soladz.json';
import { calculateRank } from "@/utils/soladz.utils";

export interface BalanceContextProps {
    balance: number;
    getBalance: () => void;
    rank: string;
    getRank: () => void;
}

export const BalanceContext = createContext<BalanceContextProps>({} as BalanceContextProps)

export const BalanceContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [balance, setBalance] = useState(0);
    const [rank, setRank] = useState('starter');

    const { publicKey, signAllTransactions, signTransaction } = useWallet();

    const { connection } = useConnection();

    const getBalance = async () => {
        if (!publicKey || !connection) return;
        try {
            const balance = await connection.getBalance(publicKey);
            setBalance(balance / LAMPORTS_PER_SOL);
        } catch { }
    }

    const getRank = useCallback(async () => {
        try {
            if (!publicKey || !signTransaction || !signAllTransactions) return;
            const provider = new AnchorProvider(connection, { publicKey, signTransaction, signAllTransactions });
            const program = new Program(IDL as Idl, provider);
            const investor = PublicKey.findProgramAddressSync(
                [
                    utils.bytes.utf8.encode("investor"),
                    publicKey.toBuffer()
                ],
                program.programId
            )[0];
            // @ts-ignore
            const investorAccount = await program.account.investor.fetch(investor);
            const solAmount = Number(investorAccount.amount) / LAMPORTS_PER_SOL;
            setRank(calculateRank(solAmount));
        } catch (e) {
            console.log(e);
        }
    }, [publicKey, connection, signAllTransactions, signTransaction])

    return (
        <BalanceContext.Provider value={{ balance, getBalance, rank, getRank }}>
            {children}
        </BalanceContext.Provider>
    )
}