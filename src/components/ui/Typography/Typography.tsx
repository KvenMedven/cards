import { ComponentPropsWithoutRef, ElementType } from "react";

import { clsx } from "clsx";

import s from "./Typography.module.scss";

type Props<T extends ElementType> = {
  as?: T;
  variant:
    | "Body1"
    | "Body2"
    | "Caption"
    | "H1"
    | "H2"
    | "H3"
    | "H4"
    | "Link1"
    | "Link2"
    | "Overline"
    | "Subtitle1"
    | "Subtitle2";
} & ComponentPropsWithoutRef<T>;
export const Typography = <T extends ElementType>(props: Props<T>) => {
  const { as: Component = "span", className, variant, ...rest } = props;

  return <Component className={clsx(className, s[variant])} {...rest} />;
};
