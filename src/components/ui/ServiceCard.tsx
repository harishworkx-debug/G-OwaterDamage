import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '@/data/services';
import { buildPexelsSrcSet, buildPexelsWebpUrl } from '@/lib/images';
import CallButton from '@/components/ui/CallButton';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:border-ocean-200 hover:shadow-xl hover:shadow-navy-900/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={buildPexelsWebpUrl(service.image, 940)}
          srcSet={buildPexelsSrcSet(service.image, [480, 640, 940])}
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 95vw"
          width={940}
          height={705}
          alt={service.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-7">
        <h3 className="text-xl font-extrabold text-navy-900">{service.name}</h3>
        <p className="flex-1 leading-[1.5] text-navy-600">{service.summary}</p>
        <Link
          to={service.path}
          className="inline-flex items-center gap-2 text-sm font-extrabold text-ocean-700 transition hover:text-ocean-900"
        >
          {service.name} in Elizabeth, NJ
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </Link>
        <CallButton label={service.callLabel} variant="outline" className="w-full text-sm" />
      </div>
    </article>
  );
}
