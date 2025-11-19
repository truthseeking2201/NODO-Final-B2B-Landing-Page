import UnicornScene from 'unicornstudio-react';
import { CONTAINER_CLASS, SECTION_SPACING_CLASS } from '../../constants/layout';

const projectId = import.meta.env.VITE_UNICORN_PROJECT_ID?.trim();

export default function UnicornSceneSection() {
  const hasProjectId = Boolean(projectId);

  return (
    <section className={`${SECTION_SPACING_CLASS}`} id="unicorn-scene">
      <div className={`${CONTAINER_CLASS} space-y-8`}>
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-white/70">Live Interactive Scene</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Experience the Unicorn Studio build</h2>
          <p className="text-base text-white/70">
            This embed streams directly from Unicorn Studio. Update <code className="rounded bg-white/10 px-1">VITE_UNICORN_PROJECT_ID</code> to
            showcase your latest scene.
          </p>
        </div>
        <div className="rounded-[16px] border border-white/10 bg-black/50 p-4 md:rounded-[32px]">
          {hasProjectId ? (
            <div className="overflow-hidden rounded-[12px] md:rounded-[24px]">
              <UnicornScene
                key={projectId}
                projectId={projectId!}
                width="100%"
                height="600px"
                lazyLoad
                scale={1}
                dpi={2}
                ariaLabel="Unicorn Studio scene"
              />
            </div>
          ) : (
            <div className="flex h-[320px] flex-col items-center justify-center gap-2 text-center text-white/70">
              <p className="text-lg font-semibold">Unicorn Studio project ID not configured</p>
              <p className="max-w-md text-sm">
                Define <code className="rounded bg-white/10 px-1 py-0.5">VITE_UNICORN_PROJECT_ID</code> in your <code>.env</code> file to load the live scene.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
