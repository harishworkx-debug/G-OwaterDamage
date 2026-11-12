import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-20 pt-16 text-white md:pb-24 md:pt-24">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #67E8F9 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="container-page relative space-y-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-extrabold md:text-6xl">{title}</h1>
        <p className="max-w-2xl text-lg leading-[1.5] text-navy-100">{description}</p>
        {children && <div className="flex flex-col gap-3 pt-2 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
