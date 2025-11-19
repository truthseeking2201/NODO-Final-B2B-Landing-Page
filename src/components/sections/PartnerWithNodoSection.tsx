import { CONTAINER_CLASS, SECTION_SPACING_CLASS } from '../../constants/layout';
import PartnerBackgroundPlaceholder from '../placeholders/PartnerBackgroundPlaceholder';

export default function PartnerWithNodoSection() {
  return (
    <section className={SECTION_SPACING_CLASS} id="contact">
      <div className={`${CONTAINER_CLASS}`}>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black py-16">
          <div className="absolute inset-0 -z-10">
            <PartnerBackgroundPlaceholder />
          </div>
          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
            <h2 className="text-[32px] font-medium leading-[1.15] sm:text-[40px] lg:text-[48px]">Partner with NODO</h2>
            <p className="text-sm font-semibold tracking-[0.32px] text-white sm:text-base">
              Get SDK access or request a custom vault deployment
            </p>
            <a
              className="inline-flex w-[182px] items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 sm:text-base"
              href="mailto:hello@nodo.build"
            >
              Request Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
