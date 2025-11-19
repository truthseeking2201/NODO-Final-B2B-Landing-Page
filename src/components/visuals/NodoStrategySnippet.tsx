import { useMemo } from 'react';

const defaultCode = `import { createNodoStrategy } from '@nodo/sdk';
import { hypernativeAlerts } from '@nodo/alerts';

const strategy = createNodoStrategy({
  name: 'stables-hedged-v1',
  inputs: ['SUI', 'USDC', 'wBTC'],
  rebalanceInterval: '15m',
});

const monitors = [
  'price-volatility',
  'oracle-resets',
  'withdrawal-drain',
  'custody-drift'
];

async function warmup(ctx) {
  await ctx.snapshot.load('baseline-v1');
  ctx.logger.info('seeded baseline snapshot');
}

function evaluateHealth(ctx) {
  return ctx.positions.reduce((score, position) => {
    const { exposure } = position;
    return score + (exposure > 0.2 ? 2 : 1);
  }, 0);
}

strategy.on('preTrade', async (ctx) => {
  await warmup(ctx);
  const threats = await hypernativeAlerts(ctx.vaultId);
  if (threats.hasActive()) {
    ctx.pause('Hypernative flagged a threat');
  }

  monitors.forEach((monitor) => {
    ctx.metrics.emit(\`monitor:\${monitor}\`, ctx.timestamp);
  });
});

strategy.on('execute', async (ctx) => {
  const health = evaluateHealth(ctx);
  if (health > 10) {
    ctx.logger.warn('health degraded, tightening spreads');
  }

  await ctx.swap({
    from: 'USDC',
    to: 'SUI',
    amount: ctx.positions.target('deltaNeutral'),
  });

  await ctx.holdings.rebalance({
    targetLeverage: 1.4,
    slip: '5bps'
  });
});

strategy.on('postTrade', async (ctx) => {
  await ctx.snapshot.save(\`daily-\${ctx.date}\`);
  ctx.logger.info('saved snapshot');
});

async function runBacktest(horizon) {
  for (const day of horizon) {
    await strategy.tick(day);
  }
}

await runBacktest(['mon', 'tue', 'wed', 'thu', 'fri']);

export default strategy;
`;

const KEYWORDS = [
  'import',
  'from',
  'const',
  'async',
  'await',
  'if',
  'return',
  'export',
  'default',
  'function'
];

const highlightLine = (line: string) => {
  return line
    .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="code-string">$1</span>')
    .replace(/(\b\d+[a-z]?)/gi, '<span class="code-number">$1</span>')
    .replace(
      new RegExp(`\\b(${KEYWORDS.join('|')})\\b`, 'g'),
      '<span class="code-keyword">$1</span>'
    );
};

type NodoStrategySnippetProps = {
  title?: string;
  subtitle?: string;
  linkLabel?: string;
  linkHref?: string;
  code?: string;
};

export default function NodoStrategySnippet({
  title = 'NODO Strategy Simulation SDK',
  subtitle = 'Solidity · backtest adapter example',
  linkLabel = 'GitHub',
  linkHref = 'https://github.com/nodo-labs/strategy-demo',
  code = defaultCode
}: NodoStrategySnippetProps) {
  const lines = useMemo(() => code.split('\n'), [code]);

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#242425] bg-[#161617] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 px-6 py-4 text-sm">
        <div>
          <p className="text-base font-semibold">{title}</p>
          <span className="text-white/60">{subtitle}</span>
        </div>
        <a
          className="inline-flex items-center gap-2 font-mono text-sm font-medium uppercase tracking-[2px] text-white leading-[normal] transition hover:text-white/80"
          href={linkHref}
          target="_blank"
          rel="noreferrer"
        >
          {linkLabel}
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
      <div className="max-h-[360px] overflow-x-auto overflow-y-auto px-6 py-5">
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
