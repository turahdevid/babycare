export function PageTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-1 text-sm text-slate-700/80">{subtitle}</p>
      ) : null}
    </div>
  );
}
