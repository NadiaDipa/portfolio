import type { SkillGroup } from "@/data/skills";

// One card per skill group (Frontend, Backend, Tools), with an icon next to each skill.
export default function SkillCard({ group }: { group: SkillGroup }) {
  const GroupIcon = group.icon;

  return (
    <div className="h-full rounded-2xl border border-border bg-bg p-6 transition hover:-translate-y-1 hover:border-accent">
      <div className="flex items-start justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-soft text-2xl text-accent">
          <GroupIcon aria-hidden="true" />
        </span>
        <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
          {group.skills.length} skills
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold">{group.title}</h3>
      <p className="mt-1 text-sm text-muted">{group.description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {group.skills.map(({ name, icon: Icon }) => (
          <li
            key={name}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium transition hover:border-accent"
          >
            <Icon className="text-accent" aria-hidden="true" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
