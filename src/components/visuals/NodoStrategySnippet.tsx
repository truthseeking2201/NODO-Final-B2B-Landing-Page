import { useMemo } from 'react';

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

const KEYWORDS = [
  'import',
  'from',
  'const',
  'async',
  'await',
  'if',
  'return',
  'export',
  'default'
];

const highlightLine = (line: string) => {
  return line
    .replace(/('(?:[^'\\\\]|\\\\.)*')/g, '<span class="code-string">$1</span>')
    .replace(/(\b\d+[a-z]?)/gi, '<span class="code-number">$1</span>')
    .replace(
      new RegExp(`\\b(${KEYWORDS.join('|')})\\b`, 'g'),
      '<span class="code-keyword">$1</span>'
    );
};

export default function NodoStrategySnippet() {
  const lines = useMemo(() => code.split('\n'), []);

  return (
    <div className="overflow-hidden rounded-[32px] bg-[#111111] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 px-6 py-4 text-sm">
        <div>
          <p className="text-base font-semibold">NODO Strategy Simulation SDK</p>
          <span className="text-white/60">Solidity · backtest adapter example</span>
        </div>
        <a
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:text-white/80"
          href="https://github.com/nodo-labs/strategy-demo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 10L10 4M10 4H5M10 4V9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="overflow-x-auto px-6 py-5">
        <pre className="nodo-code m-0 flex flex-col gap-1 font-mono text-[13px] text-white">
          {lines.map((line, index) => (
            <code key={index} className="flex min-w-full gap-4 whitespace-pre text-white/90">
              <span className="w-8 text-right text-white/30">{String(index + 1).padStart(2, '0')}</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: line ? highlightLine(line) : '&nbsp;'
                }}
              />
            </code>
          ))}
        </pre>
      </div>
    </div>
  );
}
