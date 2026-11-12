import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    title: 'Initial damage assessment',
    text: 'Identify where the water came from, which rooms and materials are affected, and how far the moisture has spread.',
  },
  {
    title: 'Water source and safety',
    text: 'Address the source of the water and any electrical or safety hazards before work begins in affected areas.',
  },
  {
    title: 'Water removal',
    text: 'Remove standing water from floors, carpets, and basements so the materials can start to dry.',
  },
  {
    title: 'Drying and moisture checks',
    text: 'Dehumidify the structure and check moisture levels so drying can be tracked rather than guessed.',
  },
  {
    title: 'Cleaning and restoration assessment',
    text: 'Clean the affected areas and decide with you which materials can be kept and which need repair or replacement.',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="space-y-6 lg:sticky lg:top-32">
          <SectionHeading
            eyebrow="The Restoration Process"
            title="How water damage restoration generally works"
            description="This is a general overview of the stages involved in water damage work. The team will explain how your specific job would be handled when you call."
          />
          <div className="flex flex-col gap-2.5 pt-2 text-sm font-bold">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-ocean-700 transition hover:text-ocean-900 hover:underline"
            >
              About our Elizabethport restoration team
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-navy-700 transition hover:text-ocean-800 hover:underline"
            >
              View our address &amp; contact information
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <ol className="relative space-y-6 border-l-2 border-ocean-100 pl-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[3.1rem] flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-extrabold text-cyan-200 ring-4 ring-white">
                {index + 1}
              </span>
              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm transition duration-300 hover:border-ocean-200 hover:shadow-lg hover:shadow-navy-900/5">
                <h3 className="text-lg font-extrabold text-navy-900">{step.title}</h3>
                <p className="mt-2 leading-[1.5] text-navy-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
