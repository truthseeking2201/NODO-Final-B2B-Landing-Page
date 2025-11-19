import { CONTAINER_CLASS, SECTION_SPACING_CLASS } from '../../constants/layout';
import NodoOnchainAlertFlow from '../visuals/NodoOnchainAlertFlow';

export default function AlertMonitoringSection() {
  return (
    <section className={SECTION_SPACING_CLASS} id="security">
      <div className={`${CONTAINER_CLASS} space-y-12`}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-4">
            <h2 className="text-[32px] font-medium leading-[1.15] sm:text-[40px] lg:text-[48px]">24x7 Onchain Alert Monitoring</h2>
          </div>
          <div className="flex-1 space-y-4 text-sm font-semibold tracking-[0.32px] text-white sm:text-base">
            <p>
              Secured by Hypernative: The leading risk and on-chain monitoring platform. Together, we ensure proactive
              detection, rapid decision windows, and ongoing recovery.
            </p>
          </div>
        </div>
        <NodoOnchainAlertFlow />
        <div className="flex flex-col items-center gap-3 text-center translate-y-8 sm:translate-y-0">
          <p className="bg-gradient-to-r from-white to-[#898989] bg-clip-text font-mono text-[10px] uppercase tracking-[1px] text-transparent sm:text-[12px]">
            Secured by
          </p>
          <img src="/images/logo-hypernative-color.png" alt="Hypernative" className="h-10 w-auto" />
        </div>
      </div>
    </section>
  );
}
