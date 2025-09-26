import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Badge({
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center w-fit shrink-0 whitespace-nowrap gap-1",
        "rounded-md border px-2 py-0.5 text-xs font-medium",
        "bg-primary-color text-background border-transparent",
        "[&>svg]:size-3 [&>svg]:pointer-events-none",
        "transition-all",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
