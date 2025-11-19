const code = `import { createNodoStrategy } from '@nodo/sdk';
import { hypernativeAlerts } from '@nodo/alerts';

const strategy = createNodoStrategy({
  name: 'stables-hedged-v1',
  inputs: ['SUI', 'USDC', 'wBTC'],
  rebalanceInterval: '15m',
});

strategy.on('preTrade', async (ctx) => {
  const threats = await hypernativeAlerts(ctx.vaultId);
  if (threats.hasActive()) {
    ctx.pause('Hypernative flagged a threat');
  }
});

strategy.on('execute', async (ctx) => {
  await ctx.swap({
    from: 'USDC',
    to: 'SUI',
    amount: ctx.positions.target('deltaNeutral'),
  });
});

export default strategy;`;

export default function NodoStrategySnippet() {
  const lines = code.split('\n');

  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#161617] shadow-lg shadow-black/30">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4 text-sm">
        <div>
          <p className="text-base font-semibold">NODO Strategy Simulation SDK</p>
          <span className="text-white/60">GitHub · nodo-labs/strategy-demo</span>
        </div>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">TypeScript</span>
      </div>
      <div className="overflow-x-auto px-6 py-5">
        <pre className="m-0 flex flex-col gap-1 font-mono text-[13px] text-white/80">
          {lines.map((line, index) => (
            <code key={index} className="flex min-w-full gap-4 whitespace-pre">
              <span className="w-8 text-right text-white/30">{String(index + 1).padStart(2, '0')}</span>
              <span>{line || '\u00A0'}</span>
            </code>
          ))}
        </pre>
      </div>
    </div>
  );
}
