import React from "react";
// import ConnectWalletBorder from "../../assets/connect-wallet-border.png";

interface ConnectWalletButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  text = "CONNECT WALLET",
  onClick,
  className = ""
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer text-center relative  text-white text-sm bg-button-gradient  connect-wallet ${className} p-[2px] rounded-[12px]`}
    >
      <button className="bg-[#6a7aff] px-3 sm:px-3 md:px-[12px] rounded-[12px] lg:px-24 py-[10px]">
        {text || "CONNECT WALLET"}
      </button>
      {/* <img
        className="absolute pointer-events-none top-0 left-0 w-full h-full"
        src={ConnectWalletBorder}
        alt="connect wallet border"
      /> */}
    </div>
  );
};
