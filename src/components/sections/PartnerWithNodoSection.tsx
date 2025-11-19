import UnicornScene from 'unicornstudio-react';
import { CONTAINER_CLASS } from '../../constants/layout';
import AnimatedButton from '../AnimatedButton';

const partnerProjectId =
  import.meta.env.VITE_PARTNER_UNICORN_PROJECT_ID?.trim() || 'MzzG66mHF5V5qMhZuRSd';

export default function PartnerWithNodoSection() {
  return (
    <section className="py-[80px] sm:py-[90px] lg:py-[100px]" id="contact">
      <div className={`${CONTAINER_CLASS}`}>
        <div className="relative overflow-hidden rounded-[32px]">
          <UnicornScene
            key={partnerProjectId}
            projectId={partnerProjectId}
            width="100%"
            height="310px"
            scale={1}
            dpi={2}
            ariaLabel="Partner with NODO background"
            className="h-[310px] w-full object-cover"
            lazyLoad
          />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-6 text-center px-6">
            <h2 className="text-[32px] font-medium leading-[1.15] sm:text-[40px] lg:text-[48px]">Partner with NODO</h2>
            <p className="text-sm font-semibold tracking-[0.32px] text-white sm:text-base">
              Get SDK access or request a custom vault deployment
            </p>
            <AnimatedButton
              label="Request Access"
              href="mailto:hello@nodo.build"
              className="pointer-events-auto text-sm sm:text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
