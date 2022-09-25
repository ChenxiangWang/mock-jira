import React from "react";

export interface SelectProps {
  children?: React.ReactNode;
  [x: string]: any;
}

export interface SelectOptionProps {
  value: any;
  children?: React.ReactNode;
  [x: string]: any;
}

export default function Select({ name, children, ...restProps }: SelectProps) {
  return <select {...restProps}>{children}</select>;
}

Select.Option = function ({
  value,
  children,
  ...restProps
}: SelectOptionProps) {
  return (
    <option value={value} {...restProps}>
      {children}
    </option>
  );
};
