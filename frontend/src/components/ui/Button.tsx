import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-graceland text-surface hover:bg-graceland-dim border border-graceland-dim",
  secondary:
    "bg-transparent text-content-primary border border-surface-border hover:border-content-muted hover:bg-surface-overlay",
  ghost: "text-content-secondary hover:text-content-primary hover:bg-surface-overlay border border-transparent",
  danger: "bg-danger/10 text-danger border border-danger/30 hover:bg-danger/20",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[10px] rounded-btn",
  md: "px-5 py-2.5 text-[11px] rounded-btn",
  lg: "px-6 py-3 text-xs rounded-btn",
};

export default function Button({
  variant = "secondary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-mono font-medium uppercase tracking-[0.2em] transition-colors disabled:pointer-events-none disabled:opacity-40 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
