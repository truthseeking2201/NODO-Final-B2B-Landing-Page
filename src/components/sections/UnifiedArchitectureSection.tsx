import { CONTAINER_CLASS, SECTION_SPACING_CLASS } from '../../constants/layout';
import UnifiedArchitecturePlaceholder from '../placeholders/UnifiedArchitecturePlaceholder';

const architectureLayers = [
  {
    title: 'Builder interfaces',
    copy: 'SDKs & policy consoles'
  },
  {
    title: 'Unified AI engine',
    copy: 'Signals, routing, automation'
  },
  {
    title: 'Secure vault ops',
    copy: 'Custody, compliance, telemetry'
  }
];

export default function UnifiedArchitectureSection() {
  return (
    <section className={SECTION_SPACING_CLASS} id="architecture">
      <div className={`${CONTAINER_CLASS} space-y-12`}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <h2 className="flex-1 text-[32px] font-medium leading-[1.15] sm:text-[40px] lg:text-[48px]">Unified Architecture</h2>
          <p className="flex-1 text-sm font-semibold tracking-[0.32px] text-white sm:text-base">
            Every layer circles the AI engine—builders plug in once, and vault governance, custody, and telemetry stay in sync.
          </p>
        </div>
        <div className="overflow-hidden rounded-[40px] border border-white/5 bg-gradient-to-b from-white/10 to-transparent p-6">
          <UnifiedArchitecturePlaceholder />
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4">
            {architectureLayers.map((layer) => (
              <div
                key={layer.title}
                className="w-full max-w-xs rounded-[24px] border border-white px-6 py-5 text-center"
              >
                <p className="text-[15px] font-semibold uppercase tracking-[1.12px] sm:text-[16px]">{layer.title}</p>
                <p className="text-[15px] text-white/60 tracking-[0.16px] sm:text-[16px]">{layer.copy}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full max-w-3xl flex-col gap-6 rounded-[999px] bg-white px-6 py-5 text-black sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-black/5">
                <img src="/images/alden.png" alt="Alden" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-lg font-semibold leading-tight">Talk to Alden</p>
                <p className="text-sm text-black/60">Infrastructure specialist</p>
              </div>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              href="#contact"
            >
              Talk Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
