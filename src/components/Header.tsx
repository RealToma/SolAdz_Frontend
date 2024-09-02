import { ConnectWalletButton } from "./common/ConnectWalletButton";
import TopLogo from "../assets/top-logo.png";

export const Header = () => {
  const rightText = "MY SOLADZ RANK: STARTER | MY SOL ADDRESS:";

  return (
    <div>
      <header className="flex gap-1 justify-between items-center mt-12">
        <div className="flex items-center gap-2 sm:gap-4">
          <img className="max-w-[50px] lg:max-w-[62px] w-full" src={TopLogo} alt="top logo" />
          <h1 className="bg-gradient-to-br from-[#F7F6FF] via-[#F7F6FF_26%] to-[#C669FF] bg-clip-text text-[30px] lg:text-[50px] text-transparent poller">
            SolAdz
          </h1>
        </div>

        <div className="flex items-center text-xs lg:text-sm">
          <div className="hidden md:flex">
            <span className="text-white mr-4">{rightText}</span>
          </div>
          <ConnectWalletButton text="CONNECT WALLET" />
        </div>
      </header>

      <div className=" flex text-center md:hidden justify-center mt-6">
        <span className="text-white text-xs mr-4">{rightText}</span>
      </div>
    </div>
  );
};
