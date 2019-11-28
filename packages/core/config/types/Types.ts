import { AbstractConfigType } from "./AbstractConfigType";
import { IConfigInput } from "./IConfigInput";

declare namespace JSX {
  interface IntrinsicClassAttributes<Q extends IConfigInput, T extends AbstractConfigType<Q>> {
    input: Q;
  }

  interface ElementChildrenAttribute {
    children: {};
  }
}