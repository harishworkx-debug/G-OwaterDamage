import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqList from '@/components/ui/FaqList';

const homeFaqs = [
  {
    question: 'How quickly should I call after water damage?',
    answer:
      'As soon as it is safe to do so. Standing water and damp materials can spread damage, so an earlier call leaves more options.',
  },
  {
    question: 'Do you serve my town?',
    answer:
      'The towns we serve are listed above. Coverage is confirmed by phone, so call 908-677-5006 with your address.',
  },
  {
    question: 'What should I have ready when I call?',
    answer:
      'Your address, a short description of the water and where it came from, the rooms affected, and whether the water is still active.',
  },
  {
    question: 'Can I book online?',
    answer:
      'No. G&OwaterDamage is reached by phone only. Call 908-677-5006 to talk with the team about your property.',
  },
];

export default function HomeFaqSection() {
  return (
    <section className="bg-navy-50/60 py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          <SectionHeading eyebrow="FAQ" title="Common questions before you call" />
          <div className="flex flex-col gap-2.5 text-sm font-bold">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-ocean-700 transition hover:text-ocean-900 hover:underline"
            >
              Contact G&amp;OwaterDamage in Elizabeth, NJ
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link
              to="/water-damage-restoration-elizabeth-nj"
              className="inline-flex items-center gap-2 text-navy-700 transition hover:text-ocean-800 hover:underline"
            >
              Water damage restoration overview
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <FaqList items={homeFaqs} />
      </div>
    </section>
  );
}
