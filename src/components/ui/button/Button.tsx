import { ComponentPropsWithoutRef, ElementType } from "react";

import { clsx } from "clsx";

import s from "./Button.module.scss";

type Props<T extends ElementType = "button"> = {
  as?: T;
  fullWidth?: boolean;
  /**
   * some description
   */
  variant?: "primary" | "secondary";
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">(props: Props<T>) => {
  const {
    as: Component = "button",
    className,
    fullWidth,
    variant = "primary",
    ...rest
  } = props;

  return (
    <Component
      // className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ""}`}
      className={clsx(className, s[variant], fullWidth && s.fullWidth)}
      {...rest}
    />
  );
};
