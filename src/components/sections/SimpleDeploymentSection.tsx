import { CONTAINER_CLASS, SECTION_SPACING_CLASS } from '../../constants/layout';
import NodoStrategySnippet from '../visuals/NodoStrategySnippet';

const deploymentSteps = [
  {
    title: 'Monitoring',
    copy: 'Deploys verified vault logic (Move modules) on-chain.',
    icon: '/images/icon-monitoring.png'
  },
  {
    title: 'Initialize Vault',
    copy: 'Registers vault admin and strategy module.',
    icon: '/images/icon-initialize.png'
  },
  {
    title: 'Verify Deployment',
    copy: 'Fetches vault state and confirms readiness for deposits.',
    icon: '/images/icon-verify.png'
  }
];

export default function SimpleDeploymentSection() {
  return (
    <section className={SECTION_SPACING_CLASS} id="deployment">
      <div className={`${CONTAINER_CLASS} space-y-6 text-center`}>
        <h2 className="text-[32px] font-medium leading-[1.1] sm:text-[40px] lg:text-[48px]">Simple Deployment</h2>
        <p className="mx-auto max-w-2xl text-sm font-semibold tracking-[0.16px] text-white sm:text-base">
          Automate smart contract deployment, configuration of vault products on Sui.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex w-[218px] items-center justify-center rounded-full bg-white px-6 py-2 text-xs font-semibold text-black sm:text-sm">
            Strategy Simulation SDK
          </span>
          <span className="inline-flex w-[227px] items-center justify-center rounded-full border border-white/40 px-6 py-2 text-xs text-white sm:text-sm">
            Vault Deployment Mode
          </span>
        </div>
      </div>
      <div className={`${CONTAINER_CLASS} mt-10 space-y-10`}>
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6">
          <NodoStrategySnippet />
        </div>
        <div className="grid gap-10 text-center md:grid-cols-3">
          {deploymentSteps.map((step) => (
            <article key={step.title} className="space-y-4">
              <img src={step.icon} alt="" className="mx-auto h-12 w-12" />
              <div className="space-y-2">
                <p className="font-dm text-[18px] font-medium tracking-[-0.6px] text-white sm:text-[20px]">{step.title}</p>
                <p className="text-sm text-white/70 tracking-[0.16px]">{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
