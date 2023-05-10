import { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label(props: LabelProps) {
  return <label {...props} />
}