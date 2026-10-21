type Props = {
  index: string; // "01", "02", ...
  eyebrow: string;
  title: string;
  subtitle?: string;
};

// Reusable heading for every section: number + label, big title, optional subtitle
export default function SectionHeading({ index, eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-accent">
        <span className="font-mono">{index}</span>
        <span className="h-px w-10 bg-border" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}
