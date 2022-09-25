import React from "react";

export interface BaseProps {
  children?: React.ReactNode;
  [x: string]: any;
}

export type FormProps = BaseProps;
export type InputProps = BaseProps;
export type OutputProps = BaseProps;
export type BlockProps = BaseProps;
export type ButtonProps = BaseProps;
export type LabelProps = BaseProps;

export default function Form({ children, ...restProps }: FormProps) {
  return <div {...restProps}>{children}</div>;
}

Form.Input = function (props: InputProps) {
  return <input {...props} />;
};

Form.Label = function ({ children, ...restProps }: LabelProps) {
  return <label {...restProps}>{children}</label>;
};

Form.Block = function ({ children, ...restProps }: BlockProps) {
  return <div {...restProps}>{children}</div>;
};

Form.Button = function ({ children, ...restProps }: ButtonProps) {
  return <button {...restProps}>{children}</button>;
};
