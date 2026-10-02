import type { ReactNode } from "react";

export function SectionBadge({
  children,
  icon: Icon,
}: {
  children: ReactNode;
  icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
      {Icon ? (
        <Icon className="size-3.5" aria-hidden={true} />
      ) : (
        <span aria-hidden="true" className="size-1 rounded-full bg-[#fb846b]" />
      )}
      {children}
    </span>
  );
}
