import { CONTAINER_CLASS } from '../../constants/layout';

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
    <section className="pt-14 sm:pt-20 lg:pt-28 pb-0" id="benchmarks">
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
        <div className="grid gap-[1px] bg-[#43444A] md:grid-cols-2 lg:grid-cols-3">
          {benchmarks.map((benchmark) => (
            <article
              key={benchmark.title}
              className="group relative flex flex-col gap-4 bg-[#080808] px-8 py-10 transition duration-300 hover:bg-[linear-gradient(180deg,#282929_0%,#0A0A0A_100%)]"
            >
              <div className="relative z-10 space-y-4">
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
              </div>
              <span className="pointer-events-none absolute left-0 top-0 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-white opacity-0 transition group-hover:block group-hover:opacity-100" />
              <span className="pointer-events-none absolute right-0 top-0 hidden h-2 w-2 translate-x-1/2 -translate-y-1/2 bg-white opacity-0 transition group-hover:block group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-0 left-0 hidden h-2 w-2 -translate-x-1/2 translate-y-1/2 bg-white opacity-0 transition group-hover:block group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-0 right-0 hidden h-2 w-2 translate-x-1/2 translate-y-1/2 bg-white opacity-0 transition group-hover:block group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
