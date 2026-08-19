import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  padding?: "none" | "sm" | "md" | "lg";
  accent?: boolean;
};

const paddingClasses = {
  none: "",
  sm: "p-3",
  md: "p-4 pl-5",
  lg: "p-6 pl-7",
};

export default function Card({
  padding = "md",
  accent = true,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`panel-frame rounded-card ${accent ? "" : "before:hidden"} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
