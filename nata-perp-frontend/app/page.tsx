import ExplanationBox from "@/components/ExplanationBox";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-around">
      <ExplanationBox
        title="Trade on Natas Perp"
        description={`Create your Natas Perpetual position.\n\nUsers can enter a long or a short position, and close it when they want to with up to 20x leverage.`}
        buttonTitle="Start Trading"
        href="/trading"
      />
      <ExplanationBox
        title="Be a Natas Provider"
        description={`Earn rewards by providing liquidity on Natas\n\nProvide liquidity in various pools and receive a part of the protocol revenue.`}
        buttonTitle="Add Liquidity"
        href="/liquidity-pool"
      />
      <ExplanationBox
        title="Liquidate on Natas"
        description={`Liquidate undercollateralized positions and earn rewards!\n\nThe war between traders and liquidity providers is eternal ...`}
        buttonTitle="Liquidate positions"
        href="/liquidation"
      />
    </main>
  );
}
