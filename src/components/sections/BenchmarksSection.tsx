import { CONTAINER_CLASS, SECTION_SPACING_CLASS } from '../../constants/layout';

const benchmarks = [
  {
    title: 'Simulation Infrastructure',
    detail: 'Move-native primitives and policy kits ready for strategist desks.',
    protocol: 'EMBER PROTOCOL, IPOR MODULES',
    icon: '/images/icon-benchmark-sim.png'
  },
  {
    title: 'Institutional MPC custody',
    detail: 'Certified flows with ForDeFi, Blockdaemon, and MPC signers.',
    protocol: 'YIELD FI, NEST-PLUME, Y0',
    icon: '/images/icon-benchmark-custody.png'
  },
  {
    title: 'Full-chain asset coverage',
    detail: 'Pre-mapped liquidity across major Sui DEXes at launch.',
    protocol: 'MORPHO, DRIFT VAULTS, HYPERBEAT',
    icon: '/images/icon-benchmark-coverage.png'
  },
  {
    title: 'Multi-pair vault orchestration',
    detail: 'One policy handles lending, LP, and treasury rotations.',
    protocol: 'VEDA.TECH',
    icon: '/images/icon-benchmark-orchestration.png'
  },
  {
    title: 'Lending market integrations',
    detail: 'Ready-made hooks into EnsoFi, AlphaFi, and Volo credit rails.',
    protocol: 'MANUAL SETUPS ELSEWHERE',
    icon: '/images/icon-benchmark-lending.png'
  },
  {
    title: 'Turnaround < 3 weeks',
    detail: 'Launch vaults fast — Momentum built in 14 days. DEX-ready from day one.',
    protocol: 'ALPHAFI, VOLO, MORPHO',
    icon: '/images/icon-benchmark-turnaround.png'
  }
];

export default function BenchmarksSection() {
  return (
    <section className={SECTION_SPACING_CLASS} id="benchmarks">
      <div className={`${CONTAINER_CLASS} space-y-12`}>
        <div className="flex flex-col gap-6 lg:flex-row">
          <h2 className="flex-1 text-[32px] font-medium leading-[1.15] sm:text-[40px] lg:text-[48px]">
            Core institutional benchmarks driving our optimization logic
          </h2>
          <p className="flex-1 text-sm font-semibold tracking-[0.32px] text-white sm:text-base">
            Six pillars distilled from partner diligence. Each card outlines the requirement and the active protocols advancing
            solutions in that domain.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benchmarks.map((benchmark) => (
            <article key={benchmark.title} className="space-y-4 rounded-[28px] border border-white/15 bg-black/40 p-8">
              <img src={benchmark.icon} alt="" className="h-12 w-12" />
              <div className="space-y-2">
                <p className="font-dm text-[18px] font-medium leading-[1.2] tracking-[-0.6px] text-white sm:text-[20px]">
                  {benchmark.title}
                </p>
                <p className="text-sm text-white/70 tracking-[0.16px]">{benchmark.detail}</p>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[1px] text-white sm:text-[12px]">
                <span className="text-white/50">PROTOCOL: </span>
                {benchmark.protocol}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
