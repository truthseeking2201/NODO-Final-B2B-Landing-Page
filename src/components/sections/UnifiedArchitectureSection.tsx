import UnicornScene from 'unicornstudio-react';
import { CONTAINER_CLASS, SECTION_SPACING_CLASS } from '../../constants/layout';

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

const architectureProjectId =
  import.meta.env.VITE_ARCHITECTURE_UNICORN_PROJECT_ID?.trim() || 'DhIJMFCq0YkHHUtJPa8T';

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
        <div className="relative -mx-6 sm:mx-0 lg:-mx-16">
          <div className="relative left-1/2 w-[1440px] -translate-x-1/2">
            <UnicornScene
              key={architectureProjectId}
              projectId={architectureProjectId}
              width="100%"
              height="380px"
              scale={1}
              dpi={2}
              ariaLabel="Unified architecture visualization"
              className="h-[380px] w-full"
              lazyLoad
            />
          </div>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
            {architectureLayers.map((layer) => (
              <div
                key={layer.title}
                className="w-full max-w-[320px] rounded-[24px] border border-white/60 bg-black/85 px-6 py-5 text-center text-white shadow-[0_15px_60px_rgba(0,0,0,0.45)] backdrop-blur"
              >
                <p className="text-[15px] font-semibold uppercase tracking-[1.12px] sm:text-[16px]">{layer.title}</p>
                <p className="text-[15px] text-white/70 tracking-[0.16px] sm:text-[16px]">{layer.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex w-full max-w-3xl flex-col gap-6 rounded-[24px] bg-white px-6 py-5 text-black sm:flex-row sm:items-center sm:justify-between">
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
