type UserAvatarProps = {
  initials?: string;
  className?: string;
};

export default function UserAvatar({ initials = "GR", className = "" }: UserAvatarProps) {
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center border border-surface-border bg-surface-overlay font-mono text-[10px] font-semibold uppercase tracking-wider text-content-secondary ${className}`}
      aria-label="Usuario"
    >
      {initials}
    </div>
  );
}
