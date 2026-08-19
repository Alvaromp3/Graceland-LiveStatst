type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`rounded-md bg-gradient-to-r from-surface-overlay via-surface-border to-surface-overlay bg-[length:200%_100%] animate-shimmer ${className}`}
    />
  );
}
