import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const TransactionItem = ({ leftVal, rightVal }: { leftVal: string; rightVal: string }) => {
  return (
    <div className="flex justify-between text-sm gap-4">
      <span>{leftVal}</span>
      <span className="font-medium break-all text-right">{rightVal}</span>
    </div>
  );
};

const SignatureRequestModal = ({ solAmount }: { solAmount: number }) => {
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  // Simulate a transaction process for demonstration
  const handleTransaction = () => {
    // After processing, set the transaction as successful
    setTransactionSuccess(true);
  };

  return (
    <Dialog>
      <DialogTrigger disabled={solAmount === 0} asChild>
        <button
          className={` bg-[#14033c] w-full text-white py-2 px-4 rounded flex-1 font-medium text-[15px]`}
        >
          Deposit
        </button>
      </DialogTrigger>
      <DialogContent className=" w-full !max-w-[563px] px-0 py-6 !rounded-none shadow-lg">
        <div className="bg-white max-w-[563px] w-full mx-auto">
          {!transactionSuccess && (
            <>
              <div className="px-6">
                <div>
                  <p className="text-[24px] text-center">Request Signature</p>
                  <p className="text-center text-base">SOL-adz.com is requesting you to sign</p>
                </div>
                <div className="mt-4 text-2xl text-center">{solAmount} SOL</div>
                <div className="flex  justify-between mt-4">
                  <div className="flex items-center flex-col justify-center">
                    <div className="w-[57px] h-[57px] bg-blue-200 rounded-full flex items-center justify-center font-medium">
                      Mi
                    </div>

                    <div className="text-xs md:text-base mt-2 text-center break-all">
                      Micha... (TYikA... Hueck)
                    </div>
                    <div className="text-sm text-gray-500">500 TRX</div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div className="w-[57px] h-[57px] bg-blue-200 rounded-full flex items-center justify-center font-medium">
                      TP
                    </div>

                    <div className="text-xs md:text-base mt-2 text-center">TPteDwgC...xeng Fx</div>
                  </div>
                </div>
                <div className="mt-6 space-y-10">
                  <TransactionItem leftVal="Type" rightVal="Smart Contract Trigger" />
                  <TransactionItem leftVal="Network" rightVal="Mainnet/MainChain" />
                  <TransactionItem
                    leftVal="Contract"
                    rightVal="TPteDwgC28Df5XYeXvTrR2xyszbxengjFx"
                  />
                  <TransactionItem leftVal="Function" rightVal="registerUser(uint256)" />
                </div>
              </div>
              <div className="bg-[#D9D9D9] px-6 py-6 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium">Enable automatic signature</span>
                  <Switch />
                </div>
                <p className="text-[10px] my-[10px]">
                  Allow SOLLink to automatically sign for this DApp
                </p>
                <Input className="mt-2 bg-white" placeholder="For 1 hour" />
              </div>
              <div className="mt-6 px-6 flex justify-end space-x-6">
                <DialogClose className="w-full">
                  <Button
                    size={"lg"}
                    variant="outline"
                    className="w-full hover:text-[#ff0000] text-[#FF0000] border-[#09A6FF]"
                  >
                    Reject
                  </Button>
                </DialogClose>
                <Button
                  onClick={handleTransaction}
                  size={"lg"}
                  className="w-full bg-[#6FCCFF] hover:bg-[#4ab9f6]"
                >
                  Accept
                </Button>
              </div>
            </>
          )}
          {transactionSuccess && (
            <>
              {/* back icon - close  */}
              <DialogClose
                onClick={() => {
                  setTransactionSuccess(false);
                }}
                className="absolute top-[30px] left-6"
              >
                <FaChevronLeft size={20} />
              </DialogClose>

              {/* right icon | link to solscan */}
              <button className="absolute bottom-[25px] right-8">
                <FaChevronRight size={20} />
              </button>
              <div className="text-center px-6 w-full">
                <div className="text-2xl  mb-4">Transaction Details</div>
                <div className="text-green-500 text-center flex items-center justify-center text-3xl mb-2">
                  <FaCircleCheck />
                </div>
                <div className="text-green-500 font-bold mb-2">Success</div>
                <div className="text-gray-500 mb-4">-100 TRX</div>
                <div className="space-y-4 text-left">
                  <div>
                    <span className="font-medium">Transfer account</span>
                    <div>TYIKA1JYdQPZMFYMrPiur4UxsPtP8HuecI</div>
                  </div>
                  <div>
                    <span className="font-medium">Receiving account</span>
                    <div>TPteDwgC28Df5XYeXvTrR2xyszbxengjFx</div>
                  </div>
                  <div>
                    <span className="font-medium">Transaction type</span>
                    <div>Smart Contract Trigger</div>
                  </div>
                  <div>
                    <span className="font-medium break-words break-all text-wrap">
                      Transaction ID
                    </span>
                    <div className="break-all">
                      186722fd7dde3b206b573fa826baa06160614a1a1a48dc04005533acac5bd0dec
                    </div>
                  </div>
                  <div>
                    <span className="font-medium">Transaction time</span>
                    <div>2020-10-26 17:13:18</div>
                  </div>
                  <div>
                    <span className="font-medium">Block height</span>
                    <div>24475339</div>
                  </div>
                  <div>
                    <span className="font-medium">Fee (?)</span>
                  </div>
                </div>
                <div className="mt-4 text-left">Go to SOLscan for detailed data</div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignatureRequestModal;
