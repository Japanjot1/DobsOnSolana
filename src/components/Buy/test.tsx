import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} className="text-center" />
    </div>
  );
}
export const projects = [
  {
    title: "Get a Solana Wallet",
    description:
      "Download and install the Phantom Wallet either from the app store on your phone or as a browser extension for desktop.",
    link: "https://phantom.app/",
  },
  {
    title: "Fund or bridge Sol",
    description:
      "Fund Sol from exchange of your choice Click here for buying Sol on Binance.",
    link: "https://www.binance.com/en-IN/trade/SOL_USDT",
  },
  {
    title: "Swap DOBS ",
    description:
      "Swap dobs using Jupiter or Raydium. Literally your first step to financial freedom.",
    link: "",
  },
];
