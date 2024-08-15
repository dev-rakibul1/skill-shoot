import { ReactElement, ReactNode } from "react";

export type IIconPayload = {
  link: string;
  name: string;
  icon: ReactNode | ReactElement;
};
