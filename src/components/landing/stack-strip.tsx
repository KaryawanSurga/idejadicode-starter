const stack = [
  { slug: "nextdotjs", name: "Next.js" },
  { slug: "react", name: "React" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "drizzle", name: "Drizzle" },
  { slug: "tailwindcss", name: "Tailwind CSS" },
  { slug: "betterauth", name: "Better Auth" },
];

export function StackStrip() {
  return (
    <section
      aria-label="Built with"
      className="border-y border-white/[0.06] bg-neutral-950"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-6 py-9 sm:px-10">
        {stack.map((item) => (
          <span
            key={item.slug}
            className="flex items-center gap-2.5 text-sm text-neutral-400"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${item.slug}/ffffff`}
              alt=""
              width={16}
              height={16}
              loading="lazy"
              className="size-4 opacity-60"
            />
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
}
