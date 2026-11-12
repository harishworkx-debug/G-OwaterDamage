import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  'Keep clear of standing water, especially near outlets, panels, and appliances.',
  'Shut off the water source if you can do so safely.',
  'Turn off power to affected areas if it is safe to do so.',
  'Photograph the damage before moving items, for your insurance records.',
  'Move valuables and dry items out of the wet area when it is safe.',
  'Call 908-677-5006 with your address, the water source, and the rooms affected.',
];

export default function FirstStepsSection() {
  return (
    <section className="bg-navy-50/60 py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.6fr]">
        <div className="space-y-6">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-600 text-white shadow-lg shadow-ocean-900/20">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </span>
          <SectionHeading
            eyebrow="First Steps"
            title="What to do right after water damage"
            description="These steps can help limit further damage while you wait for help. They do not replace professional assessment."
          />
          <div className="flex flex-col gap-2.5 pt-2 text-sm font-bold">
            <Link
              to="/blog/what-to-do-after-water-damage"
              className="inline-flex items-center gap-2 text-ocean-700 transition hover:text-ocean-900 hover:underline"
            >
              Read full guide: What to do after water damage
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-navy-700 transition hover:text-ocean-800 hover:underline"
            >
              Browse all homeowner water damage guides
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-4 rounded-2xl border border-white bg-white p-6 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-extrabold text-ocean-800">
                {index + 1}
              </span>
              <span className="leading-[1.5] text-navy-700">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
