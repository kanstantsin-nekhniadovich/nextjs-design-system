import { type ElementType, type ReactNode } from "react";
import clsx from "clsx";
import styles from "./Text.module.css";

export type TextVariant = "h1" | "h2" | "h3" | "lead" | "body" | "small" | "caption";
export type TextColor = "primary" | "secondary" | "muted" | "accent" | "inverse";

const defaultTag: Record<TextVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  lead: "p",
  body: "p",
  small: "p",
  caption: "span",
};

interface TextProps {
  as?: ElementType;
  variant?: TextVariant;
  color?: TextColor;
  className?: string;
  children: ReactNode;
}

export function Text({
  as,
  variant = "body",
  color = "primary",
  className,
  children,
}: TextProps) {
  const Tag = as ?? defaultTag[variant];

  return (
    <Tag className={clsx(styles[variant], styles[color], className)}>
      {children}
    </Tag>
  );
}
