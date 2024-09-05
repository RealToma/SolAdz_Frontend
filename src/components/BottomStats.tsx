// import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { connection } from "@/lib/utils";
import { AnchorProvider, Idl, Program, utils } from "@coral-xyz/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
import IDL from '../idl/soladz.json';
import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

export const BottomStats = () => {
  const [reward, setReward] = useState(0);
  const contactInfoItems = Array(8)
    .fill(null)
    .map((_, index: number) => ({
      paidContributionTimer: `Paid Contribution Timer ${index + 1}`,
      contractAddress: `Contract Address ${index + 1}`
    }));

  const personalStatistics = Array(7)
    .fill(null)
    .map(() => ({
      nextIncome: 0,
      contribution: 0
    }));
  const { publicKey, signAllTransactions, signTransaction } = useWallet();
  useEffect(() => {
    const timer = setInterval(async () => {
      try {
        if (!publicKey || !signTransaction || !signAllTransactions) return;
        const provider = new AnchorProvider(connection, { publicKey, signTransaction, signAllTransactions });
        const program = new Program(IDL as Idl, provider);
        const investorAccount = PublicKey.findProgramAddressSync(
          [
            utils.bytes.utf8.encode("investor"),
            publicKey.toBuffer()
          ],
          program.programId
        )[0];
        const res = await program.methods.rewardView().accounts({
          investorAccount
        }).view();
        setReward(Number(res) / LAMPORTS_PER_SOL)
      } catch (e) { 
        
      }
    }, 3000)
    return () => {
      clearInterval(timer);
    }
  }, [publicKey, setReward, signTransaction, signAllTransactions]);

  return (
    <div className="px-4 mt-12">
      <div className="flex flex-col gap-4 lg:flex-row p-4 md:p-6 max-w-[1200px] border border-dashed rounded-lg border-black mx-auto">
        <Card className="w-full py-4 md:py-8 px-4 md:px-6 bg-[#0A1129] text-white border-none">
          <CardHeader>
            <h2 className="text-2xl poller font-bold">Smart contact info</h2>
          </CardHeader>
          <CardContent>
            {contactInfoItems.map((item, index) => (
              <div
                key={index}
                className={`${index === 0 ? "border-white/20 border-t" : ""
                  } border-b py-4 border-white/20 flex justify-between items-center hover:bg-white/10 px-4`}
              >
                <div>
                  <p className="text-sm">{item.paidContributionTimer}</p>
                  <p className="text-sm ">{item.contractAddress}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="w-full py-4 md:py-8 px-4 md:px-6 bg-[#0A1129] text-white border-none">
          <CardHeader>
            <h2 className="text-2xl poller font-bold">Personal Statistics</h2>
          </CardHeader>
          <CardContent className="">
            <div
              className={`"border-white/20 border-t border-b py-4 border-white/20 flex justify-between items-center hover:bg-white/10 px-4`}
            >
              <div className="">
                <p className="text-sm">Next income</p>
                <p className="text-sm">Contribution</p>
              </div>
              <p className="text-sm">{`${reward} SOL`}</p>
            </div>
            {personalStatistics.map((stat, index) => (
              <div
                key={index}
                className={`${index === 0 ? "border-white/20 border-t" : ""
                  } border-b py-4 border-white/20 flex justify-between items-center hover:bg-white/10 px-4`}
              >
                <div className="">
                  <p className="text-sm">Next income</p>
                  <p className="text-sm">Contribution</p>
                </div>
                <p className="text-sm">{stat.nextIncome} SOL</p>
              </div>
            ))}
            <div
              className={`mt-8 max-w-[253px] relative inline-block p-[2px] w-full rounded-[6px] bg-button-gradient-2`}
            >
              <button className="w-full hover:bg-white/20 transition-all duration-300 bg-[#140e3c] text-white py-1 px-4 rounded flex-1 font-medium text-[14px]">
                Withdraw
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
