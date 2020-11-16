import * as React from "react";
import styles from "./button.module.scss";

export enum Kinds {
  primary = "primary",
  outline = "outline"
}

export type ButtonProps = {
  children: React.ReactNode | React.ReactNodeArray;
  kind: "primary" | "outline";
};

const Button = ({ kind, children }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles[Kinds[kind]]}`}
    >
      {children}
    </button>
  );
};

export default Button;
