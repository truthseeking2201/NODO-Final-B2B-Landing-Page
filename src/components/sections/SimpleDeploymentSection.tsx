import { useState } from 'react';

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

const vaultDeploymentCode = `import { createDeploymentPipeline, fetchArtifacts } from '@nodo/deployer';
import { loadSecrets } from '@nodo/secrets';

const pipeline = createDeploymentPipeline({
  presets: ['delta-neutral'],
  confirmations: 24,
  telemetry: true,
});

async function bootstrap() {
  const artifacts = await fetchArtifacts('v0.12.4');
  const secrets = await loadSecrets({
    network: 'sui:mainnet',
    keyring: process.env.KEYRING,
  });

  return { artifacts, secrets };
}

export async function deployVault() {
  const { artifacts, secrets } = await bootstrap();
  const ctx = await pipeline.initialize({
    artifacts,
    signer: secrets.operators.primary,
  });

  await ctx.configureVault({
    name: 'nodo-trident-vault',
    modules: ['monitoring', 'execution', 'reconciliation'],
    policies: {
      withdrawal: 'guarded',
      supplyCap: '4M',
    },
  });

  for (const asset of ['SUI', 'USDC', 'wBTC']) {
    await ctx.addAssetRoute({
      asset,
      route: 'dex',
      slippage: '8bps',
    });
  }

  await ctx.publish({
    network: 'sui:mainnet',
    auditors: ['quill', 'hashlock'],
  });

  return ctx.summary();
}

await deployVault();
`;

const snippetTabs = [
  {
    id: 'simulation',
    label: 'Strategy Simulation SDK',
    props: {
      title: 'NODO Strategy Simulation SDK',
      subtitle: 'Solidity · backtest adapter example',
      linkLabel: 'GitHub',
      linkHref: 'https://github.com/nodo-labs/strategy-demo'
    }
  },
  {
    id: 'deployment',
    label: 'Vault Deployment Mode',
    props: {
      title: 'Vault Deployment Mode',
      subtitle: 'Sui deployment orchestration sample',
      linkLabel: 'Docs',
      linkHref: 'https://docs.nodo.so',
      code: vaultDeploymentCode
    }
  }
] as const;

export default function SimpleDeploymentSection() {
  type TabId = (typeof snippetTabs)[number]['id'];
  const [activeTab, setActiveTab] = useState<TabId>('simulation');
  const activeSnippet = snippetTabs.find((tab) => tab.id === activeTab) ?? snippetTabs[0];

  return (
    <section className={SECTION_SPACING_CLASS} id="deployment">
      <div className={`${CONTAINER_CLASS} space-y-6 text-center`}>
        <h2 className="text-[32px] font-medium leading-[1.1] sm:text-[40px] lg:text-[48px]">Simple Deployment</h2>
        <p className="mx-auto max-w-2xl text-sm font-semibold tracking-[0.16px] text-white sm:text-base">
          Automate smart contract deployment, configuration of vault products on Sui.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {snippetTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const widthClass = tab.id === 'simulation' ? 'w-[218px]' : 'w-[227px]';
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={isActive}
                className={`inline-flex ${widthClass} items-center justify-center rounded-full px-6 py-2 text-xs font-semibold transition sm:text-sm ${
                  isActive ? 'bg-white text-black' : 'border border-white/40 text-white hover:border-white/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className={`${CONTAINER_CLASS} mt-10 space-y-10`}>
        <NodoStrategySnippet {...activeSnippet.props} />
        <div className="grid gap-10 text-center md:grid-cols-3">
          {deploymentSteps.map((step, index) => {
            const showDivider = index < deploymentSteps.length - 1;
            return (
              <article key={step.title} className="relative space-y-4">
                <img src={step.icon} alt="" className="mx-auto h-12 w-12" />
                <div className="space-y-2">
                  <p className="font-dm text-[18px] font-medium tracking-[-0.6px] text-white sm:text-[20px]">{step.title}</p>
                  <p className="text-sm text-white/70 tracking-[0.16px]">{step.copy}</p>
                </div>
                {showDivider ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-5 top-1/2 hidden h-[120px] w-px -translate-y-1/2 deployment-divider md:block"
                  />
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
