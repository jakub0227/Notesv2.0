import { FC } from "react";
import { IconType } from "../types/IconType";

export interface Route extends FC {
  routeName: string;
  icon: IconType;
  displayName: string;
}
