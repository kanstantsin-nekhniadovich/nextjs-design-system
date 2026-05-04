import {
  cloneElement,
  isValidElement,
  type AnchorHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import clsx from "clsx";
import styles from "./Link.module.css";

export type LinkVariant = "default" | "subtle" | "muted" | "unstyled";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  asChild?: boolean;
  children: ReactNode;
}

type ChildWithClassName = ReactElement<{ className?: string }>;

export function Link({
  variant = "default",
  className,
  asChild = false,
  children,
  ...props
}: LinkProps) {
  const mergedClassName = clsx(styles.base, styles[variant], className);

  if (asChild) {
    if (!isValidElement(children)) {
      throw new Error("Link with asChild expects a single React element child.");
    }

    const child = children as ChildWithClassName;

    return cloneElement(child, {
      ...props,
      className: clsx(child.props.className, mergedClassName),
    });
  }

  return (
    <a className={mergedClassName} {...props}>
      {children}
    </a>
  );
}
